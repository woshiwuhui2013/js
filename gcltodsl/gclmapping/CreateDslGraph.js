
const vscode = require('vscode')
const fs = require('fs')
const path = require('path');
const { Script } = require('vm');

function getHtmlContent(context, dslgraph) {
    //检查dslgraph是否为Map对象
    if (!(dslgraph instanceof Map)) {
        throw new Error('dslgraph must be a Map object');
    }

    console.log("dslgraph", dslgraph)
    console.log("size = ", dslgraph.size)

    // 使用for...of循环遍历Map对象
    let htmlcontent = "graph TB\n";
    let flowchartElements = "[";

    
    for (let [key, value] of dslgraph) {

        // 假设每个值是一个对象，并且包含一个html属性
        console.log("key ", key, "val ", value)
        for (let elem of value) {
            htmlcontent += `${key}[${key}] --> ${elem}[${elem}]\n`
            flowchartElements += `{"name": "${elem}", "type": "scripttask"},`
        }
    }

    flowchartElements += "]"

    let runscript = fs.readFileSync(path.join(context.extensionPath,"HtmlScriptContent.js"), {encoding: 'utf-8'})
   
    

    var script = `\n var flowchartElements = ${flowchartElements}\n`+ `${runscript}`
    var style = `
    /* 添加CSS样式 */
       
    `

    var body = `
     <div class="mermaid" id="graph">
       ${htmlcontent}
    </div>
    `

    return `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8" />
        <title>flow graph</title>
        <!-- 引入刚刚下载的 ECharts 文件 -->
        <script src="https://cdn.jsdelivr.net/npm/mermaid@10.6.1/dist/mermaid.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
        <script>
        ${script}
        </script>
        <style>
            ${style}
        </style>
    </head>
    <body class="bg-gray-100 h-screen flex flex-col>
        <main class="flex-grow flex overflow-hidden">
        <!-- 左侧流程图 -->
        <div class="w-1/2 p-4 bg-white border-r border-gray-200 overflow-auto">
            <h2 class="text-xl font-semibold mb-4">流程图</h2>
            <div class="bg-gray-200 h-full flex items-center justify-center">
                ${body}
            </div>
        </div>
        <!-- 右侧配置表格 -->
        <div class="w-1/2 p-4 overflow-auto flex flex-col">
            <h2 class="text-xl font-semibold mb-4">元素配置</h2>
            <div class="bg-white shadow-md rounded-lg overflow-hidden">
                <table class="w-full">
                    <thead class="bg-gray-200">
                        <tr>
                            <th class="px-4 py-2 text-left">元素名称</th>
                            <th class="px-4 py-2 text-left">类型</th>
                        </tr>
                    </thead>
                    <tbody id="configTableBody">
                        <!-- 表格内容将通过 JavaScript 动态生成 -->
                    </tbody>
                </table>
                <div class="px-4 py-3 bg-gray-100 border-t border-gray-200">
                    <button id="submitConfig" class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out">
                        完成配置
                    </button>
                </div>
            </div>
        </div>
        </main>
    </body>
    </html>
`
}

function CreateDslGraph(context, dslgraph) {
    const panel = vscode.window.createWebviewPanel("graph", "dslgraph", vscode.ViewColumn.One, {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [vscode.Uri.file(vscode.workspace.rootPath)]

    })

    panel.webview.html = getHtmlContent(context, dslgraph)

}


module.exports = { CreateDslGraph };