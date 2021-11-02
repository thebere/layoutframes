import * as http from 'http';
import app from './app';

const server: http.Server = http.createServer(app);

export async function start(port: number) {
  return new Promise((resolve, reject) => {
    try {
      server.listen(port, () => {
        resolve(true);
      });
    } catch (error) {
      reject(error);
    }
  })
}

export function shutdown() {
  server.close(() => {
    console.log('server closed.');
    process.exit(1);
    process.kill(process.pid);
  });
}
