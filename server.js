const { Server } = require('net');

const server = new Server();

server.listen({ port: 8000, host: '0.0.0.0' }, () => {
    console.log("Listening on port 8000");
} )