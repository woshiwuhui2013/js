const fs = require('fs')
const langParser_1 = require("./langParser");
const { get } = require('http');
const { ContractDefinitionContext } = require('../languageServer/Lang/LangParser');
// const { networkInterfaces } = require('os');
// const doc = fs.readFileSync('./RegLang .gcl', 'utf-8')
// const tree = (0, langParser_1.default)(doc);

const mappingFunction = "next_step"
const checkVariable = "state"
const startFunction = ""
class GCLMap {
    constructor(filepath) {
        const doc = fs.readFileSync(filepath, 'utf-8')
        this.tree = (0, langParser_1.default)(doc);
    }

    getFirstLayerContextNodes(contextName, startNode) {
        let result = []
        let childrens = startNode.children;
        childrens.forEach(elem => {
            if (elem.constructor.name === contextName) {
                result.push(elem)
            }
        })

        return result
    }

    getContextNode(contextName, startNode) {

        let childrens = startNode.children;
        for (let elem of childrens) {
            if (elem.constructor.name === contextName) {
                return elem;
            }
        }

        return null;
    }

    getNodeLeafText(node) {
        if (node.childCount == 0) {
            return { val: node.text, obj: node }
        }
        let childrens = node.children;
        if (childrens[0].constructor.name === "TerminalNode") {
            return { val: childrens[0].text, obj: childrens[0] }
        }

        return this.getNodeLeafText(childrens[0]);
    }

    getContract() {
        if (this.tree != undefined) {
            let res = this.getFirstLayerContextNodes('ContractDefinitionContext', this.tree);
            this.contractres = this.getFirstLayerContextNodes('ContractPartContext', res[0]);
            return this.contractres;
        }

    }

    getVariable() {
        let variableList = []
        for (let e of this.contractres) {
            let tmp = this.getFirstLayerContextNodes('StateVariableDeclarationContext', e);
            variableList = [...variableList, ...tmp]
        }

        this.dataObject = []
        for (let variable of variableList) {
            const typename = this.getContextNode("TypeNameContext", variable);
            const identifier = this.getContextNode("IdentifierContext", variable);
            let data = {};
            data.name = this.getNodeLeafText(identifier).val
            data.type = this.getNodeLeafText(typename).val
            data.elem = variable
            this.dataObject.push(data)
        }
        return this.dataObject
    }

    getFunction() {
        this.getContract()
        let functionList = []
        for (let e of this.contractres) {
            let tmp = this.getFirstLayerContextNodes("FunctionDefinitionContext", e);
            functionList = [...functionList, ...tmp]
        }

        this.funObject = []
        for (let funDefine of functionList) {
            const funDeclaration = this.getContextNode("FunctionDeclarationContext", funDefine);
            const funIdentifier = this.getContextNode("IdentifierContext", funDeclaration);
            let funinfo = {};
            funinfo.name = this.getNodeLeafText(funIdentifier).val;
            funinfo.elem = funDefine
            this.funObject.push(funinfo)
        }
        return this.funObject
    }

    searchCalllist(node, result) {
        for (let child of node.children) {
            if (child.constructor.name === "FunctionCallArgumentsContext") {
                result.push(node)
                continue
            }

            if (child.childCount === 0) {
                continue
            }

            this.searchCalllist(child, result)
        }
    }


    //获取函数体调用的函数
    getFunctionCallList(functionContext, members) {
        const statementContexts = this.getFirstLayerContextNodes("StatementContext", functionContext)
        let result = []
        for (let statement of statementContexts) {
            this.searchCalllist(statement, result)
        }

        // console.log(result)
        let calleeArr = []
        for (let functionNode of result) {
            let textArr = []
            this.getExpressionText(functionNode, textArr)

            const callStatement = textArr.reduce((p, c) => p + c, "")
            // console.log("call statement is ", callStatement)

            for (let member of members) {
                const regex = new RegExp(`\\b${member.name}\\s*\\(\\s*([^)]*)\\s*\\)`, 'g');
                if (regex.test(callStatement)) {
                    calleeArr.push(member.name)
                    break
                }
            }
        }

        return calleeArr
    }


    // 获取状态函数的所有代码块
    getStateBlock(stateVar, stateFun) {

        // 建立函数的调用关系
        const nextstepFun = this.funObject.filter(e => e.name == stateFun)
        console.log(nextstepFun)

        // 获取函数中的所有StatementContext
        const statements = this.getFirstLayerContextNodes("StatementContext", nextstepFun[0].elem)

        this.checkblock = []
        statements.forEach(e => {

            const ifstatements = this.getFirstLayerContextNodes("IfStatementContext", e);
            ifstatements.forEach(statementobj => {
                const ifblocks = this.getFirstLayerContextNodes("IfWithBlockContext", statementobj)
                const elseblocks = this.getFirstLayerContextNodes("ElseIfWithBlockContext", statementobj)

                this.checkblock = [...this.checkblock, ...ifblocks, ...elseblocks]

            })
        })
    }

    getExpressionText(statement, res) {
        if (statement.childCount == 0) {
            res.push(statement.text);
            return;
        }
        const children = statement.children;
        for (let child of children) {
            this.getExpressionText(child, res)
        }
    }

    handleblock(param, stateJumpTable) {
        //获得block节点的孩子节点的最终标识符，找到（）和{}中的节点
        const childrens = param.children;
        if (childrens == null) {
            return
        }

        let blockNode = []
        childrens.forEach(child => {
            let tmp = {}
            tmp.text = this.getNodeLeafText(child).val;
            tmp.node = child
            blockNode.push(tmp)
        })

        // console.log(blockNode)
        let startindex1 = false

        // 处理（）中的expression
        let conditionStatement;
        for (let elem of blockNode) {
            if (startindex1 == true) {
                conditionStatement = elem;
                if (conditionStatement?.node.constructor.name == "ExpressionContext") {
                    break
                }
            }
            if (elem.text == "(") {
                startindex1 = true;
            }
        }

        // 获取state当前状态
        let expressionText = []
        // function getExpressionText(statement, res) {
        //     if (statement.childCount == 0) {
        //         res.push(statement.text);
        //         return;
        //     }
        //     const children = statement.children;
        //     for (let child of children) {
        //         this.getExpressionText(child, res)
        //     }
        // }

        this.getExpressionText(conditionStatement?.node, expressionText)
        // console.log(expressionText)

        const conditionstr = expressionText.reduce((p, c) => p + c, "")

        const conditionpattern = /^([0-9a-zA-Z._]+)==([0-9a-zA-Z._]+)$/i
        const regularres = conditionpattern.exec(conditionstr)
        if (regularres == null) {
            return;
        }

        const curstate = ["state", regularres[1] == "state" ? regularres[2] : regularres[1]]
        console.log(curstate)

        //开始处理{}中的expression
        let flag = false;
        let statements = []
        for (let elem of blockNode) {
            if (elem.text == "{") {
                flag = true;
                continue;
            }

            if (elem.text == "}") {
                flag = false;
                break;
            }
            if (flag) {
                if (elem?.node.constructor.name == "StatementContext") {
                    statements.push(elem.node)
                }
            }

        }

        if (statements.length == 0) {
            return
        }

        const nextstate = statements.reduce((p, e) => {

            let tmp = []
            this.getExpressionText(e, tmp);
            const expstr = tmp.reduce((p, c) => p + c, "")
            const regularpattern = /^state=([0-9a-zA-Z._;]+)$/

            const regularpatterngateway = /^state=([0-9a-zA-Z._;]+)\?([0-9a-zA-Z._;]+):([0-9a-zA-Z._;]+)$/

            let matchres = regularpattern.exec(expstr);
            if (matchres == null) {
                matchres = regularpatterngateway.exec(expstr)
                if (matchres == null) {
                    return []
                } else {
                    return ["state", [matchres[2], matchres[3].substring(0, matchres[3].length - 1)]]
                }
            } else {
                const length = matchres[1].length
                if (matchres[1][length - 1] == ";") {
                    return ["state", [matchres[1].substring(0, length - 1)]]
                } else {
                    return ["state", [matchres[1]]]
                }
            }

        }, [])

        console.log(nextstate)

        stateJumpTable.push([curstate[1], nextstate[1]])
    }

    sortStateJumpTable(statejumptable) {

        console.log('state jump table')
        console.log(statejumptable)
        let incommingMap = new Map()
        for (let e of statejumptable) {
            if (incommingMap[e[1]] == undefined) {
                for (let nextelem of e[1]) {
                    incommingMap[nextelem] = 1;
                }

                if (incommingMap[e[0]] == undefined) {
                    incommingMap[e[0]] = 0;
                }
            } else {
                if (incommingMap[e[0]] == undefined) {
                    incommingMap[e[0]] = 0;
                }
                for (let nextelem of e[1]) {
                    incommingMap[nextelem] = incommingMap[nextelem] + 1
                }

            }
        }

        console.log(incommingMap)
        let entry = []
        for (let key in incommingMap) {
            console.log(key)
            if (incommingMap[key] == 0) {
                entry.push(key)
            }

        }

        console.log(entry)

        // {elem:a, child:[]}
        function getNextState(cur, stateTable, graph) {
            let next = undefined;
            for (let state of stateTable) {

                if (graph.get(state[0]) != undefined) {
                    continue;
                }
                if (state[0] == cur) {
                    next = state[1]
                }
            }

            if ((next == undefined)) {
                return;
            } else {
                graph.set(cur, next);
                for (let e of next) {
                    getNextState(e, stateTable, graph)
                }
            }
        }

        this.graph = []
        for (let e of entry) {
            const flow = new Map()
            getNextState(e, statejumptable, flow)
            this.graph.push(flow)
        }


        // console.log(this.graph)

    }

    getStateBlockGraph() {
        this.statejump = []
        this.checkblock.forEach(block => {
            this.handleblock(block, this.statejump)
        })

        this.sortStateJumpTable(this.statejump)
    }

    parseGcl(isState, stateVar, stateFun) {
        if (isState) {
            this.getStateBlock(stateVar, stateFun)
            this.getStateBlockGraph()

            console.log(this.dataObject)
            console.log(this.funObject)
            console.log(this.graph)
            return this.graph;
        }else{
            let callGraph = []
            for (let fun of this.funObject) {
                const arr = this.getFunctionCallList(fun.elem, this.funObject)
        
                console.log(fun.name, "->", arr)
                if (arr.length != 0) {
                    callGraph.push([fun.name, arr])
                }
            }
            this.sortStateJumpTable(callGraph)
            return this.graph
        }

    }
}

module.exports = { GCLMap }
