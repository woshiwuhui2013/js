const puppeteer = require('puppeteer');

(async () => {
  // 启动浏览器
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // 导航到你的 HTML 文件
  await page.goto(`file://${__dirname}/chart.html`, { waitUntil: 'networkidle0' });

  // 等待 Chart.js 图表渲染完成，这里需要根据实际情况选择合适的选择器
  // 例如，如果图表被渲染在一个具有特定 ID 的 canvas 元素中，你可以这样做：
  await page.waitForSelector('#flag');

  // 或者等待一段固定的时间，以确保图表有足够的时间渲染
//   await page.waitFor(1000); // 等待1秒

  // 截图并保存为流程图的图片
  await page.screenshot({ path: 'chart.png', fullPage: false });

  // 关闭浏览器
  await browser.close();
})();