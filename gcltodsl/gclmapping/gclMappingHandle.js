
const vscode = require('vscode')
const { GCLMap } = require("./gclMap")

// gcl parse when code has state function
const stateHandle = function (quickPickObj, filepath) {
    console.log("state", " ", filepath)

    // get function list
    vscode.window.showInformationMessage(filepath)
    const gclmapping = new GCLMap(filepath)
    const funs = gclmapping.getFunction()
    console.log(funs)
    quickPickObj.hide()

    // select state function
    const functionQuickPick = vscode.window.createQuickPick()
    functionQuickPick.items = funs.map(fun => { return { label: fun.name } });
    console.log(functionQuickPick.items);
    functionQuickPick.placeholder = "选择状态函数"

    let statefunName = undefined
    let state = undefined
    functionQuickPick.onDidChangeSelection(selection => {
        if (selection[0]) {
            vscode.window.showInformationMessage(selection[0].label)

            statefunName = selection[0].label
            functionQuickPick.hide()

            // select state variable
            const variables = gclmapping.getVariable()
            const variableQuickPick = vscode.window.createQuickPick()
            variableQuickPick.items = variables.map(para => { return { label: para.name } });
            console.log(variableQuickPick.items);
            variableQuickPick.placeholder = "选择状态变量"

            variableQuickPick.onDidChangeSelection(selection => {
                if (selection[0]) {
                    vscode.window.showInformationMessage(selection[0].label)
                    state = selection[0].label
                    variableQuickPick.hide()
                    const graph = gclmapping.parseGcl(true, state, statefunName)
                    vscode.window.showInformationMessage(JSON.stringify(graph))
                }
            })
            variableQuickPick.onDidHide(() => variableQuickPick.dispose());
            variableQuickPick.show();
        }
    })
    functionQuickPick.onDidHide(() => functionQuickPick.dispose());
    functionQuickPick.show();
}

const noStateHandle = function (quickPickObj, filepath) {
    console.log("nostate", " ", filepath)
    vscode.window.showInformationMessage(filepath)
}

module.exports = { stateHandle, noStateHandle }