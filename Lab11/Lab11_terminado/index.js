const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const archivo = require('./routes/file');
const rutas = require('./routes/route');

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/file',archivo);
app.use('/route', rutas);

app.get( '/', (request, response, next) => {
    let html = '<h3>Emilio Gallegos A01066813</h3>';
    html += '<h1>Laboratorio 11</h1>'
    html += '<h2>Seleccione Rutas:</h2>\
                <ul>\
                <li><a href="/">Home Page</a></li>\
                <li><a href="/routes/1">Ruta 1</a></li>\
                <li><a href="/routes/2">Ruta 2</a></li>\
                <li><a href="/routes/3">Ruta 3</a></li>\
                <li><a href="/routes/4">Ruta 4</a></li>\
                <li><a href="/file/add">Agregar Archivo</a></li>\
                </ul>\
                ';
    
    response.send(html);
});

app.use( (request, response, next) => {
    response.status(404);
    response.send('<h1>OOPS!</h1><h1>PAGE NOT FOUND!</h1>');
});

app.listen(3000);