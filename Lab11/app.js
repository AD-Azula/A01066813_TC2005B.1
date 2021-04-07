console.log("Dios bendiga al npm");
console.log("Sigue corriendo el programa :')");
console.log("Dios bendiga al npm");

//json -> JavaScript Object Notation
//{nombre_Atributo: valor}

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

//Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use('/ruta/nueva-ruta', (request, response, next) => {
    response.send('<h1>Recien hecha</h1>'); 
});

app.use('/ruta', (request, response, next) => {
    response.send('<h1>Bienvenido seas</h1>'); 
});

app.use('/', (request, response, next) => {
    response.send('<h1>Disque la ruta raiz</h1>'); 
});

app.use((request, response, next) => {
    console.log('Vaya vaya!');
    response.send('Vaya vaya!'); //Manda la respuesta
});

app.listen(3000);
                         