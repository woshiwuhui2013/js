const fs = require('fs')
const langParser_1 = require("./langParser");
const { get } = require('http');
const { ContractDefinitionContext } = require('./languageServer/Lang/LangParser');
const { networkInterfaces } = require('os');
const doc = fs.readFileSync('./RegLang .gcl', 'utf-8')
const tree = (0, langParser_1.default)(doc);

const mappingFunction = "next_step"
const checkVariable = "state"
const startFunction = ""



function getFirstLayerContextNodes(contextName, startNode) {
    let result = []
    let childrens = startNode.children;
    childrens.forEach(elem => {
        if (elem.constructor.name === contextName) {
            result.push(elem)
        }
    })

    return result
}

function getContextNode(contextName, startNode) {

    let childrens = startNode.children;
    for (let elem of childrens) {
        if (elem.constructor.name === contextName) {
            return elem;
        }
    }

    return null;
}

function getNodeLeafText(node) {
    if (node.childCount == 0) {
        return { val: node.text, obj: node }
    }
    let childrens = node.children;
    if (childrens[0].constructor.name === "TerminalNode") {
        return { val: childrens[0].text, obj: childrens[0] }
    }

    return getNodeLeafText(childrens[0]);
}


let res = getFirstLayerContextNodes('ContractDefinitionContext', tree);

// console.log(res)

// 获取contractpart节点 支持单个文件单个contract
// for(let e of res){

let contractres = getFirstLayerContextNodes('ContractPartContext', res[0]);
// }

// 获取变量值
// variable structure
// name ; type; value

let variableList = []
for (let e of contractres) {
    let tmp = getFirstLayerContextNodes('StateVariableDeclarationContext', e);
    variableList = [...variableList, ...tmp]
}

let dataObject = []
for (let variable of variableList) {
    const typename = getContextNode("TypeNameContext", variable);
    const identifier = getContextNode("IdentifierContext", variable);
    let data = {};
    data.name = getNodeLeafText(identifier).val
    data.type = getNodeLeafText(typename).val
    data.elem = variable
    dataObject.push(data)
}

// console.log(dataObject)

// 获取合约里包含的函数定义
let functionList = []
for (let e of contractres) {
    let tmp = getFirstLayerContextNodes("FunctionDefinitionContext", e);
    functionList = [...functionList, ...tmp]
}

let funObject = []
for (let funDefine of functionList) {
    const funDeclaration = getContextNode("FunctionDeclarationContext", funDefine);
    const funIdentifier = getContextNode("IdentifierContext", funDeclaration);
    let funinfo = {};
    funinfo.name = getNodeLeafText(funIdentifier).val;
    funinfo.elem = funDefine
    funObject.push(funinfo)
}

// console.log(funObject)

// 建立函数的调用关系
const nextstepFun = funObject.filter(e => e.name == mappingFunction)
console.log(nextstepFun)

// 获取函数中的所有StatementContext
const statements = getFirstLayerContextNodes("StatementContext", nextstepFun[0].elem)

let checkblock = []
statements.forEach(e => {

    const ifstatements = getFirstLayerContextNodes("IfStatementContext", e);
    ifstatements.forEach(statementobj => {
        const ifblocks = getFirstLayerContextNodes("IfWithBlockContext", statementobj)
        const elseblocks = getFirstLayerContextNodes("ElseIfWithBlockContext", statementobj)

        checkblock = [...checkblock, ...ifblocks, ...elseblocks]

    })
})



const handleblock = (param) => {
    //获得block节点的孩子节点的最终标识符，找到（）和{}中的节点
    const childrens = param.children;
    if (childrens == null) {
        return
    }

    let blockNode = []
    childrens.forEach(child => {

        let tmp = {}
        tmp.text = getNodeLeafText(child).val;
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
    function getExpressionText(statement, res) {
        if (statement.childCount == 0) {
            res.push(statement.text);
            return;
        }
        const children = statement.children;
        for (let child of children) {
            getExpressionText(child, res)
        }
    }

    getExpressionText(conditionStatement?.node, expressionText)
    // console.log(expressionText)

    const conditionstr = expressionText.reduce((p,c)=>p+c,"")

    const conditionpattern = /^([0-9a-zA-Z._]+)==([0-9a-zA-Z._]+)$/i
    const regularres = conditionpattern.exec(conditionstr)
    if (regularres == null){
        return;
    }

    const curstate = ["state",regularres[1]=="state"?regularres[2]:regularres[1]]
    console.log(curstate)

    // const parseCurrentState = (expressionArr) => {
    //     let a = "", b = "", flag = false;

    //     for (let e of expressionArr) {
    //         if (e == "==") {
    //             flag = true;
    //             continue;
    //         }
    //         if (!flag) {
    //             a = a.concat(e)
    //         } else {
    //             b = b.concat(e)
    //         }
    //     }
    //     return [a, b]
    // }

    // const statecur = parseCurrentState(expressionText)
    // console.log(statecur)


    //开始处理{}中的expression
    let flag = false;
    let statements = []
    for (let elem of blockNode) {
        if (elem.text == "{"){
            flag = true;
            continue;
        }

        if (elem.text == "}"){
            flag =false;
            break;
        }
        if (flag) {
            if (elem?.node.constructor.name == "StatementContext") {
                statements.push(elem.node)
            }
        }

    }


    if (statements.length == 0){
        return
    }

    
    const nextstate = statements.reduce((p,e)=>{
        
        let tmp = []
        getExpressionText(e, tmp);
        const expstr = tmp.reduce((p,c)=>p+c,"")
        const regularpattern = /^state=([0-9a-zA-Z._;]+)$/
        
        const matchres = regularpattern.exec(expstr);
        if (matchres == null){
            return []
        }

        return ["state", matchres[1]]

    },[])

    console.log(nextstate)
}

checkblock.forEach(block => {
    handleblock(block)
})
