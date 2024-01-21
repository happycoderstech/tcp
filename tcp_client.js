var net = require('net');

var client = new net.Socket();
client.connect(15000, '127.0.0.1', function() { // make sure server running on this port
	console.log('**** Client Connected');
	var writeBuffer = Buffer(1);
	writeBuffer[0] = 0; //Value to send
	client.write("data from client");
});

client.on('data', function(data) {
	console.log('****** Data Received: ' + data);
});

client.on('close', function() {
	console.log('Connection closed');
});
