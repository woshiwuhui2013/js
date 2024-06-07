const { createCanvas, loadImage } = require('canvas');
const fs = require('fs')
const path = require('path')

// 创建一个新的 canvas 对象
const canvas = createCanvas(800, 600);
const ctx = canvas.getContext('2d');

// 设置填充样式
ctx.fillStyle = '#FF0000'; // 红色
ctx.fillRect(0, 0, 400, 200); // 绘制一个红色矩形

// 设置文本样式
ctx.font = '48px Arial';
ctx.fillStyle = '#000000'; // 黑色
ctx.fillText('Hello, World!', 150, 300); // 绘制文本
// // 创建图片并绘制到 canvas 上
// loadImage(path.join(__dirname, './image.png')).then(image => {
//   ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
// });

// 将 canvas 保存为图像文件
canvas.createPNGStream().pipe(fs.createWriteStream('output.png'));