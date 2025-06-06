const http = require('http');
const fs = require('fs');
const path = require('path');

// 静态文件服务目录，可根据实际情况修改
const staticDir = path.join(__dirname, '.');
// 服务器端口
const port = 3000;

// 创建 HTTP 服务器
const server = http.createServer((req, res) => {
  // 处理请求路径，避免路径遍历攻击
  let filePath = path.join(staticDir, req.url === '/' ? 'index.html' : req.url);

  // 检查文件是否存在
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      // 文件不存在，返回 404 错误
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('404 Not Found');
      return;
    }

    // 读取文件
    fs.readFile(filePath, (err, data) => {
      if (err) {
        // 读取文件出错，返回 500 错误
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('500 Internal Server Error');
        return;
      }

      // 根据文件扩展名设置 Content-Type
      const extname = path.extname(filePath);
      let contentType = 'text/html';
      switch (extname) {
        case '.js':
          contentType = 'text/javascript';
          break;
        case '.css':
          contentType = 'text/css';
          break;
        case '.json':
          contentType = 'application/json';
          break;
        case '.png':
          contentType = 'image/png';
          break;
        case '.jpg':
          contentType = 'image/jpg';
          break;
        case '.gif':
          contentType = 'image/gif';
          break;
      }

      // 返回文件内容
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    });
  });
});

// 启动服务器
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
