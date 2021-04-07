console.log("Laboratorio 10");
console.log("Emilio Gallegos A01066813");


const http = require('http');
const archivo = require('./route.js');

const server = http.createServer(archivo);

server.listen(80);