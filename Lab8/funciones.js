function avg (array = []){
  let total=0,
  numeros = [1, 2, 3, 4, 5];
  for(let i = 0; i <= numeros.length; i++) total+=numeros[i];
  console.log(total);
}

function text(str){
  const filesystem = require('fs');
  filesystem.writeFileSync('file.txt', str);
  return true;
}
const http = require('http');
const server=http.createServer((request, response) => {
  let script = "Muy buenas noches";
  response.write('prom');
  response.end();
});


server.listen(3000);
