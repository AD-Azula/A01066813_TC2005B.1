const express = require('express');
const router = express.Router();

router.get('/1', (request, response, next) => {
    let html = '<h3>Emilio Gallegos A01066813</h3>';
    html += '<h1>Ruta 1</h1>'
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

router.use('/2', (request, response, next) => {
    let html = '<h3>Emilio Gallegos A01066813</h3>';
    html += '<h1>Ruta 1</h1>'
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

router.use('/3', (request, response, next) => {
    let html = '<h3>Emilio Gallegos A01066813</h3>';
    html += '<h1>Ruta 1</h1>'
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

router.use('/4', (request, response, next) => {
    let html = '<h3>Emilio Gallegos A01066813</h3>';
    html += '<h1>Ruta 1</h1>'
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

module.exports = router;