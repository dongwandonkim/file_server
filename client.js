const net = require('net');
const fs = require('fs');
const {setupInput} = require('./input');

const conn = net.createConnection({
  host: 'localhost', // change to IP address of computer or ngrok host if tunneling
  port: 5000, // or change to the ngrok port if tunneling
});
// '192.168.1.114'
conn.setEncoding('utf8');

conn.on('data', (data) => {
  const dataArr = data.split(':');
  // console.log(dataArr);
  fs.writeFile(`${dataArr[0]}`, dataArr[1], (err) => {
    console.log(err);
  });
});

conn.on('connect', () => {
  console.log('connected!!!!');
});

setupInput(conn);
