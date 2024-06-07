const fs = require('fs')
const langParser_1 = require("./langParser");
const doc = fs.readFileSync('./RegLang .gcl', 'utf-8')
const tree = (0, langParser_1.default)(doc);



function getFirstLayerContextNode(contextName, startNode){
    let result = []
    let childrens = startNode.children;
    childrens.forEach(elem=>{
        if (elem.constructor.name === contextName){
            result.push(elem)
        }
    })

    return result
}


let res = getFirstLayerContextNode('ContractDefinitionContext', tree);

console.log(res)