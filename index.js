// const gcparse = require('./definitionProvider')

// new gcparse.default().provideDefinition()

const fs = require('fs')
const langParser_1 = require("./langParser");
const doc = fs.readFileSync('./RegLang.gcl', 'utf-8')
const tree = (0, langParser_1.default)(doc);

let gcltree = {
    name: "gclsource",
    children: []
}

// let childrenArr = children
function addChildren(curNode, children){

    if (curNode.children){
        for (elem of curNode.children){
            let tmp = {}
            tmp.name = elem.constructor.name;
            tmp.children = []
            addChildren(elem, tmp.children)
            children.push(tmp)
        }
    }else{
        let tmp = {};
        tmp.name = curNode.text;
        tmp.children = []
        children.push(tmp)
    }
}

addChildren(tree, gcltree.children)

console.log("gcl source tree")
console.log(JSON.stringify(gcltree))

fs.writeFileSync('./public/gcl.json', JSON.stringify(gcltree))