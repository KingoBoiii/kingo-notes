const http = require('http');

const server = http.createServer((req, res) => {
    console.log('Request made');
});

const port = process.env.port || 3000;

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});