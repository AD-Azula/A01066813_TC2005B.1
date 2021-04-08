const express = require('express');
const router = express.Router();
const filesystem = require('fs');
const bodyParser = require('body-parser');
const path = require('path');


router.use('/inicio', (request, response, next) => {
    response.send('<h1>Home Page</h1>'); 
});

router.use('/indice', (request, response, next) => {
    response.send('<html><head><meta charset="UTF-8"><title>Indice del sitio</title></head><body><h1>Laboratorio 12 </h1> <h2> Indice: </h2>  <ul ><li><a href="inicio">Home Page</a></li><li><a href="mensaje">Guardar mensaje</a></li><li><a href="indice">Indice</a></li><li><a href="paginahtml">HTML preguntas</a></li><li><a href="personajes">Pagina de personajes</a></li><li><a href="personajes/nuevo-personaje">Pagina para ingresar personajes</a></li></ul> </body></html>'); 
    
});


router.get('/mensaje', (request, response, next) => {
    response.send('<body><h1>Ingresar mensaje</h1><form action="mensaje" method="POST"><input type="text" name="mensaje"><input type="submit" value="Guardar"></form>'); 
});

router.post('/mensaje', (request, response, next) => {
    console.log(request.body.mensaje);
    filesystem.writeFileSync('input.txt', request.body.mensaje)
    response.send('<h1>Guardado</h1>'); 
});

module.exports = router;