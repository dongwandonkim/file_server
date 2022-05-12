// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  // stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

let msg = '';
const handleUserInput = function (key) {
  // your code here

  msg += key;
  connection.write(msg);
  msg = '';

  if (key === '\u0003') {
    console.log('bye');
    process.exit();
  }
};

module.exports = {setupInput};
