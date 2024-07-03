// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const path = require('path');

const fs = require('fs')
const langParser_1 = require("./langParser");

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
class TreeDataProvider {
	getChildren(element) {

		console.log(element)
		if (element != undefined) {
			if ((element.label == "aa") || (element.label == "bb")) {
				return Promise.resolve([])
			}
		} else {

			return Promise.resolve([new vscode.TreeItem("aa", vscode.TreeItemCollapsibleState.Collapsed), new vscode.TreeItem("bb", vscode.TreeItemCollapsibleState.Collapsed)])
		}

	}

	getTreeItem(element) {
		return element;
	}
}

function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "gclmapping" is now active!');

	context.subscriptions.push(vscode.window.createTreeView("package-dependencies", {
		treeDataProvider: new TreeDataProvider()
	}))

	context.subscriptions.push(vscode.commands.registerCommand('samples.quickInput', async () => {
        
		var options = [{label:"有状态函数驱动业务运转", id: 0}, {label:"无状态函数，函数间直接调用完成业务运转", id:1}]
       
        const quickPick = vscode.window.createQuickPick();
        quickPick.items = Object.keys(options).map(label => (options[label]));
        console.log(quickPick.items);
		quickPick.placeholder = "请选择源码结构"
		quickPick.onDidChangeSelection(selection=>{
			if (selection[0]) {
                vscode.window.showInformationMessage(selection[0].label)
            }
		})
       
        quickPick.show();
    }));

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('gclmapping.gclAst', function (e) {
		// The code you place here will be executed every time your command is executed
		const panel = vscode.window.createWebviewPanel("gclast", "gclsource", vscode.ViewColumn.One, {
			enableScripts: true,
			retainContextWhenHidden: true,
			localResourceRoots: [vscode.Uri.file(vscode.workspace.rootPath)]
		})

		console.log(context.extensionPath)
		console.log(e.path)

		const doc = fs.readFileSync(e.path, 'utf-8')
		const tree = (0, langParser_1.default)(doc);

		let gcltree = {
			name: "gclsource",
			children: []
		}

		// let childrenArr = children
		function addChildren(curNode, children) {

			if (curNode.children) {
				for (let elem of curNode.children) {
					let tmp = {}
					tmp.name = elem.constructor.name;
					tmp.children = []
					addChildren(elem, tmp.children)
					children.push(tmp)
				}
			} else {
				let tmp = {};
				tmp.name = curNode.text;
				tmp.children = []
				children.push(tmp)
			}
		}

		addChildren(tree, gcltree.children)

		console.log("gcl source tree")
		// console.log(JSON.stringify(gcltree))

		fs.writeFileSync(path.join(context.extensionPath, '/gcl.json'), JSON.stringify(gcltree))

		let file = fs.readFileSync(path.join(context.extensionPath, '/gcl.json'))

		panel.webview.html = getWebviewContent(JSON.stringify(gcltree));

	});

	context.subscriptions.push(disposable);
}

function getWebviewContent(info) {

	return `<!DOCTYPE html>
	<html>
	  <head>
		<meta charset="utf-8" />
		<title>ECharts</title>
		<!-- 引入刚刚下载的 ECharts 文件 -->
		<script src="
		https://cdn.jsdelivr.net/npm/echarts@5.5.0/dist/echarts.min.js
		"></script>
		

		<style>
		body{
			background:white
		}
	
	  </style>
	  </head>
	  <body>
		<!-- 为 ECharts 准备一个定义了宽高的 DOM -->
		<div id="main" style="width: 2000px;height:100vh;"></div>
		<div style="visibility: hidden" id="treeinfo">${info}</div>
		<script type="text/javascript">
		window.onload = function() {
			// 你的JavaScript代码
			// 基于准备好的dom，初始化echarts实例
		var myChart = echarts.init(document.getElementById('main'));
        var div = document.getElementById('treeinfo');
        console.log(div.textContent)
		var option2 = {
			xAxis: {
			  type: 'category',
			  data: ['Matcha Latte', 'Milk Tea', 'Cheese Cocoa', 'Walnut Brownie']
			},
			yAxis: {},
			series: [
			  {
				type: 'bar',
				name: '2015',
				data: [89.3, 92.1, 94.4, 85.4]
			  },
			  {
				type: 'bar',
				name: '2016',
				data: [95.8, 89.4, 91.2, 76.9]
			  },
			  {
				type: 'bar',
				name: '2017',
				data: [97.7, 83.1, 92.5, 78.1]
			  }
			]
		  };

		data = JSON.parse(div.textContent)
		var option = {
			tooltip: {
				trigger: 'item',
				triggerOn: 'mousemove'
			},
			series: [
				{
					type: 'tree',
					data: [data],
					top: '1%',
					left: '7%',
					bottom: '1%',
					right: '20%',
					symbolSize: 10,
					label: {
						position: 'left',
						verticalAlign: 'middle',
						align: 'right',
						fontSize: 9
					},
					leaves: {
						label: {
							position: 'right',
							verticalAlign: 'middle',
							align: 'left'
						}
					},
					emphasis: {
						focus: 'descendant'
					},
					expandAndCollapse: true,
					animationDuration: 550,
					animationDurationUpdate: 750
				}
			]
		}

		// 指定图表的配置项和数据
		myChart.setOption(option);
		    
		};
		
		</script>
	  </body>
	</html>`
}
// This method is called when your extension is deactivated
function deactivate() { }


module.exports = {
	activate,
	deactivate
}
