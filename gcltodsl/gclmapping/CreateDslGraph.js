
const vscode = require('vscode')

function getHtmlContent(dslgraph){
    
    return `
    <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <title>ECharts</title>
    <!-- 引入刚刚下载的 ECharts 文件 -->
    <script src="https://cdn.jsdelivr.net/npm/mermaid@10.6.1/dist/mermaid.min.js"></script> 
    <script>
    window.onload=function(){
        console.log("aaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff")
        var element = document.getElementById('mermaid-flowchart');
        element.innerHTML = "fdfadfafdafadf";
        console.log("endddddddddddddddddddddddddddddddddddddddddddddddddddddd)
    } 
    </script>


</head>

<body>
    <div id="mermaid-flowchart">
    </div>
    <div class="mermaid">
        graph LR
        A[方形] -- 链接 --> B((圆形))
        B --> C(圆角矩形)
        C --> D{rhombus}
        D --> E>三角形]
        E --> F(test)
    </div>
    

</body>

</html>
    `
}

function CreateDslGraph(dslgraph) {
    const panel = vscode.window.createWebviewPanel("graph", "dslgraph", vscode.ViewColumn.One, {
        enableScripts: true,
        retainContextWhenHidden: true,
        localResourceRoots: [vscode.Uri.file(vscode.workspace.rootPath)]

    }) 

    panel.webview.html = getHtmlContent(dslgraph)

}


module.exports = {CreateDslGraph};