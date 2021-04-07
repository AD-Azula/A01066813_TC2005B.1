const filesystem = require('fs');

const requesthandler = (request, response) =>
{
    if(request.url === "/"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><title>Laboratorio 10</title></head>');
        response.write('<body><header><h3>Emilio Gallegos Garcia A01066813</h3>');
        response.write('<section><div><h2>Seleccione Rutas:</div>');
        response.write('<ul><li><a href="/">Home Page</a></li>');
        response.write('<li><a href="/route1">Route 1</a></li>');
        response.write('<li><a href="/route2">Route 2</a></li>'); 
        response.write('<li><a href="/route3">Route 3</a></li>'); 
        response.write('</section><body></body></html>');
        response.end();
    }

    else if (request.url === "/route1"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Ruta_1</title></head>');
        response.write('<body><header><h2>Buenos dias!</h2>');
        response.write('<h1>Ruta 1</h1></header>');
        response.write('<section><div><h2>Seleccione Rutas:</div>');
        response.write('<ul><li><a href="/">Home Page</a></li>');
        response.write('<li><a href="/route1">Route 1</a></li>');
        response.write('<li><a href="/route2">Route 2</a></li>'); 
        response.write('<li><a href="/route3">Route 3</a></li>'); 
        response.write('</section><body></body></html>');
        response.end();
    }

    else if (request.url === "/route2"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Ruta_1</title></head>');
        response.write('<body><header><h2>Buenas tardes!</h2>');
        response.write('<h1>Ruta 2</h1></header>');
        response.write('<section><div><h2>Seleccione Rutas:</div>');
        response.write('<ul><li><a href="/">Home Page</a></li>');
        response.write('<li><a href="/route1">Route 1</a></li>');
        response.write('<li><a href="/route2">Route 2</a></li>'); 
        response.write('<li><a href="/route3">Route 3</a></li>'); 
        response.write('</section><body></body></html>');
        response.end();
    }

    else if (request.url === "/route3"){
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Ruta_1</title></head>');
        response.write('<body><header><h2>Buenas noches!</h2>');
        response.write('<h1>Ruta 3</h1></header>');
        response.write('<section><div><h2>Seleccione Rutas:</div>');
        response.write('<ul><li><a href="/">Home Page</a></li>');
        response.write('<li><a href="/route1">Route 1</a></li>');
        response.write('<li><a href="/route2">Route 2</a></li>'); 
        response.write('<li><a href="/route3">Route 3</a></li>'); 
        response.write('</section><body></body></html>');
        response.end();
    }
    else {
        response.statusCode = 404;
        response.setHeader('Content-Type', 'text/html');
        response.write('<html>');
        response.write('<head><meta charset="UTF-8" /> <meta http-equiv="X-UA-Compatible" content="IE=edge" /><meta name="viewport" content="width=device-width, initial-scale=1.0" /><title>Page not Found</title></head>');
        response.write('<body><header><h2>Buenas noches!</h2>');
        response.write('<h1>Ruta 1</h1></header>');
        response.write('<section><div><h2>Seleccione Rutas:</div>');
        response.write('<ul><li><a href="/">Home Page</a></li>');
        response.write('<li><a href="/route1">Route 1</a></li>');
        response.write('<li><a href="/route2">Route 2</a></li>'); 
        response.write('<li><a href="/route3">Route 3</a></li>'); 
        response.write('</section><body></body></html>');
        response.end();
    }
}

module.exports = requesthandler;