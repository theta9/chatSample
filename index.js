var http = require('http');

var server = http.createServer();
server.on('request', doRequest);
server.listen(process.env.PORT || 3000);
console.log('Server running!');

// ���N�G�X�g�̏���
function doRequest(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World\n');
    res.end();
}