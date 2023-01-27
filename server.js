const { Server } = require('net');

const server = new Server();

server.on("connection", (socket) => {
    const remoteSocket = `${socket.remoteAddress}:${socket.remotePort}`;
    console.log(`New connection from ${remoteSocket}`);
    socket.setEncoding('utf-8');
    socket.on("data", (message) => {
        console.log(`${remoteSocket} -> ${message}`)
    });
});

server.listen({ port: 8000, host: '0.0.0.0' }, () => {
    console.log("Listening on port 8000");
});