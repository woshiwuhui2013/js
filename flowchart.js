const  {Canvas, Group, Node, Edge}  =  require( 'butterfly-dag');
require('butterfly-dag/dist/index.css');


let canvas = new Canvas({
    root: dom,              //canvas的根节点(必传)
    zoomable: true,         //可缩放(可传)
    moveable: true,         //可平移(可传)
    draggable: true,        //节点可拖动(可传)
  });
  canvas.draw({
    groups: [],  //分组信息
    nodes: [],  //节点信息
    edges: []  // 连线信息
  })

  canvas.createPNGStream().pipe(fs.createWriteStream('test.png'));