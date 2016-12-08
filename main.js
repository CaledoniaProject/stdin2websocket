var peers = [];
var rl = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

rl.on('line', function(line){
  peers.forEach(function(peer) {
    peer.sendText(line);
  })
  console.log('[STDOUT]', line);
})
rl.on('close', function() {
  process.exit(1);
})

var ws = require("nodejs-websocket")
var server = ws.createServer(function(conn) {
  console.log("New connection")

  peers.push(conn);
  conn.on("text", function(str) {
    console.log('Received', str);    
  })
  conn.on("close", function(code, reason) {
    console.log("Connection closed");
    for (var i = 0; i < peers.length; i ++) {
      if (peers[i] === conn) {
        console.log('Removed connection #', i);
        peers.splice(i, 1);
        break;
      }
    }
  })
}).listen(8300)
