import http from 'http';
import fs from 'fs';
import path from 'path';

const flagValue = name => {
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
};

const root = path.resolve('dist');
const port = Number(flagValue('--port') || process.env.PORT || 3000);
const host = flagValue('--host') || process.env.HOST || '0.0.0.0';
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.mp4': 'video/mp4',
};

const server = http.createServer((req, res) => {
  const pathname = decodeURI(new URL(req.url, 'http://local').pathname);
  let file = path.join(root, pathname);
  if (pathname.endsWith('/')) file = path.join(root, pathname, 'index.html');
  else if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file = path.join(file, 'index.html');
  if (!fs.existsSync(file)) file = path.join(root, '404.html');

  const stat = fs.statSync(file);
  const extension = path.extname(file);
  const range = req.headers.range;
  res.setHeader('Content-Type', types[extension] || 'application/octet-stream');
  res.setHeader('Accept-Ranges', extension === '.mp4' ? 'bytes' : 'none');

  if (range && extension === '.mp4') {
    const [rawStart, rawEnd] = range.replace('bytes=', '').split('-');
    const start = Number(rawStart);
    const end = rawEnd ? Number(rawEnd) : stat.size - 1;
    if (!Number.isFinite(start) || start < 0 || end >= stat.size || start > end) {
      res.writeHead(416, { 'Content-Range': `bytes */${stat.size}` });
      res.end();
      return;
    }
    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${stat.size}`,
      'Content-Length': end - start + 1,
    });
    if (req.method === 'HEAD') res.end();
    else fs.createReadStream(file, { start, end }).pipe(res);
    return;
  }

  res.setHeader('Content-Length', stat.size);
  if (req.method === 'HEAD') res.end();
  else fs.createReadStream(file).pipe(res);
});

server.listen(port, host, () => console.log(`Intégrale Group listening on ${host}:${port}`));
