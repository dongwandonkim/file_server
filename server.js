const net = require('net');

const fs = require('fs');
const server = net.createServer();
const port = 5000;

server.on('connection', (client) => {
  console.log('client connected');
  client.setEncoding('utf-8');

  let fileName = '';
  client.on('data', (msg) => {
    fileName = msg.trim();
    console.log('message from client: ', msg.trim());

    fs.readFile(`./files/${fileName}.txt`, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        client.write(`${fileName}.txt:${data}`);
      }
    });
  });
  // client.on('error', (err) => {
  //   client.write('file not found');
  // });
});

server.listen(port, '127.0.0.1', () => {
  console.log(`server is running on ${port}`);
});
