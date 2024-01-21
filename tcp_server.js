var net = require('net');

var server = net.createServer(function(socket) {
	
	socket.write('Echo server\r\n');
	socket.pipe(socket);

	socket.on('data', function(data) {
		console.log('****** Data Received: ' + data);
	});
	
});

server.listen(15000, '127.0.0.1'); // change port if required. client going to connect to this port






