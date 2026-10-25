const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="vi">
    <head>
      <meta charset="UTF-8">
      <title>NodeJS App - Heroku Deployment</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; text-align: center; padding: 50px; background: #f4f6f9; color: #333; }
        .card { background: white; max-width: 600px; margin: 0 auto; padding: 30px; border-radius: 12px; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }
        h1 { color: #673AB7; margin-bottom: 8px; }
        p { color: #666; font-size: 16px; line-height: 1.6; }
        .badge { display: inline-block; padding: 6px 14px; background: #EDE7F6; color: #512DA8; border-radius: 20px; font-weight: bold; font-size: 14px; }
        .meta { margin-top: 20px; font-size: 13px; color: #888; border-top: 1px solid #eee; padding-top: 15px; }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Node.js & Express on Heroku</h1>
        <p class="badge">Heroku Cloud Platform</p>
        <p>Ứng dụng Node.js được triển khai thành công lên nền tảng Heroku sử dụng Heroku CLI và Git.</p>
        <div class="meta">
          <p>Sinh viên: <strong>Nguyễn Văn Hùng</strong> | MSSV: <strong>23IT.B069</strong> | Lớp: <strong>23GITB</strong></p>
          <p>Server Port: <code>${PORT}</code></p>
        </div>
      </div>
    </body>
    </html>
  `);
});

app.get('/api/info', (req, res) => {
  res.status(200).json({
    app: "heroku-node",
    status: "running",
    platform: "Heroku Dyno",
    port: PORT,
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

