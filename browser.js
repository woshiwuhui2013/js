// const langParser_1 = require("./langParser");



// const tree = (0, langParser_1.default)(documentText)
// console.log(tree.children)

// mermaid.initialize({
//     startOnLoad: true,
//     flowchart: {
//         useMaxWidth: true,
//         expandAll: true
//     }
// });

// var flowchartCode = "graph TD\n  A[开始]\n  B[继续]\n  C[完成]\n  A --> B\n  B --> C";
// mermaid.render(flowchartCode, "#mermaid-flowchart");

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

myChart.showLoading();


// graphDefinition.addEventListener('click', function (event) {
//     console.log(event.target);
//  });


fetch('./public/gcl.json')
    .then(response => {
        // 首先检查响应是否成功
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // 解析 JSON 数据
    })
    .then(data => {
        // 使用 JSON 数据
        console.log(data);
        myChart.hideLoading();

        //  function expandNode(node){
        //     if (node.children){
        //         node.children.forEach(function (elem) {
        //             elem.collapsed = false;
        //             expandNode(elem)
        //          }); 

        //     }else{

        //         return
        //     }

        //  }
        //  data.children.forEach(function (datam) {
        //     expandNode(datam)
        //  });
        // expandNode(data.children)
        myChart.setOption(
            (option = {
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
            })
        );

        // let divobj = document.createElement('div')
        // divobj.setAttribute('id', 'flag')
        // document.body.appendChild(divobj);

    })
    .catch(error => {
        // 处理请求或解析过程中的错误
        console.error('There was a problem with the fetch operation:', error);
    });