console.log("Dios bendiga al npm");
console.log("Sigue corriendo el programa :')");
console.log("Dios bendiga al npm");

//json -> JavaScript Object Notation
//{nombre_Atributo: valor}

const express = require('express');
const app = express();

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.use((request, response, next) => {
    console.log('Vaya vaya!');
    response.send('Vaya vaya!'); //Manda la respuesta
});

app.listen(3000);
                         