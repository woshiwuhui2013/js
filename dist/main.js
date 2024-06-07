/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./browser.js":
/*!********************!*\
  !*** ./browser.js ***!
  \********************/
/***/ (() => {

eval("// const langParser_1 = require(\"./langParser\");\n\n// const tree = (0, langParser_1.default)(documentText);\n\n// console.log(tree.children)\n\n // 基于准备好的dom，初始化echarts实例\n var myChart = echarts.init(document.getElementById('main'));\n\n myChart.showLoading();\n\n fetch('./public/gcl.json')\n     .then(response => {\n         // 首先检查响应是否成功\n         if (!response.ok) {\n             throw new Error('Network response was not ok');\n         }\n         return response.json(); // 解析 JSON 数据\n     })\n     .then(data => {\n         // 使用 JSON 数据\n         console.log(data);\n         myChart.hideLoading();\n\n        //  function expandNode(node){\n        //     if (node.children){\n        //         node.children.forEach(function (elem) {\n        //             elem.collapsed = false;\n        //             expandNode(elem)\n        //          }); \n                \n        //     }else{\n\n        //         return\n        //     }\n        \n        //  }\n        //  data.children.forEach(function (datam) {\n        //     expandNode(datam)\n        //  });\n        // expandNode(data.children)\n         myChart.setOption(\n             (option = {\n                 tooltip: {\n                     trigger: 'item',\n                     triggerOn: 'mousemove'\n                 },\n                 series: [\n                     {\n                         type: 'tree',\n                         state: 'expand',\n                         data: [data],\n                         top: '1%',\n                         left: '7%',\n                         bottom: '1%',\n                         right: '20%',\n                         symbolSize: 10,\n                         label: {\n                             position: 'left',\n                             verticalAlign: 'middle',\n                             align: 'right',\n                             fontSize: 9\n                         },\n                         leaves: {\n                             label: {\n                                 position: 'right',\n                                 verticalAlign: 'middle',\n                                 align: 'left'\n                             }\n                         },\n                         emphasis: {\n                             focus: 'descendant'\n                         },\n                         expandAndCollapse: true,\n                         animationDuration: 550,\n                         animationDurationUpdate: 750\n                     }\n                 ]\n             })\n         );\n\n         let divobj = document.createElement('div')\n         divobj.setAttribute('id', 'flag')\n         document.body.appendChild(divobj);\n\n     })\n     .catch(error => {\n         // 处理请求或解析过程中的错误\n         console.error('There was a problem with the fetch operation:', error);\n     });\n\n//# sourceURL=webpack://js/./browser.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./browser.js"]();
/******/ 	
/******/ })()
;