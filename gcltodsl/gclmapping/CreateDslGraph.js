
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
    for (let [key, value] of dslgraph) {

        // 假设每个值是一个对象，并且包含一个html属性
        console.log("key ", key, "val ", value)
        for (let elem of value) {

            htmlcontent += `${key}[${key}] --> ${elem}[${elem}]\n`
        }
    }

    let runscript = fs.readFileSync(path.join(context.extensionPath,"HtmlScriptContent.js"), {encoding: 'utf-8'})
   

    var script = `
    ${runscript}
    `
    var style = `
    /* 添加CSS样式 */
        body {
            display: flex;
            justify-content: center; /* 水平居中 */
            align-items: center; /* 垂直居中 */
            height: 100vh; /* 使用视口高度 */
            margin: 0; /* 移除默认的外边距 */
        }
        .mermaid {
            width: 100%; /* 使mermaid图占据全部宽度 */
            max-width: 600px; /* 限制最大宽度，防止在大屏幕上过宽 */
            box-sizing: border-box; /* 边框和内边距计算在宽度内 */
        }
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
        <script>
        ${script}
        </script>
        <style>
            ${style}
        </style>
    </head>
    <body>
    ${body}
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