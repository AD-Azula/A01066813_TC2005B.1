let doc = document.querySelector("html");

function prob1(){
    document.write("<h2>Problma 1</h2>")
    let num=prompt("Escriba un numero");
    let squares;
    let cubes;


      for(let i = 0; i <= num; i++){
        squares = i * i;
        cubes = squares * i;
          document.write("<br><tr><td> " + i + "</td><td> " + squares + "</td><td> " + cubes + "</td></tr>");
      }

      document.write('<br><br><button id="regresar"> Regresar </button>');
      document.getElementById("regresar").onclick = function(){reWrite()};
}
function prob2(){
  document.write("<h2>Problema 2</h>")
  let start = Date.now();
  let randNum1 = Math.floor(Math.random() *(100+1));
  let randNum2 = Math.floor(Math.random() *(100+1));
  let sum = randNum1 + randNum2; //generar la sum con su resultado

//para contar el tiempo y mostrar resultado...
  let tim1 = new Date().getTime();//haciendo uso de getTime();
  let result = prompt("El resultado de la sum entre "+randNum1 +" y "+randNum2);
  let tim2 = new Date().getTime();//haciendo uso de getTime();
  let overallTime = (tim2-tim1)/1000;

  if (result == sum){
      let end = Date.now();
         document.write("Respuesta correcta, obtenida en un tiempo de " + overallTime + " segundos");
     }
     else{
       let end = Date.now();

         document.write("Respuesta incorrecta; " + sum);
     }

     document.write("</p></li>")

 document.write('<br><br><button id="regresar"> Regresar </button>');
 document.getElementById("regresar").onclick = function(){reWrite()};

}

function prob3(array){
  let positive = 0;
  let negative = 0;
  let zeroes = 0;
  for (let i = 0; i < array.length; i++ ){
    if (array[i] > 0){
            positive++;
}
    else if (array[i] < 0) {
            negative ++;
}
    else {
            zeroes ++;
}

}
    let answer = [0,0,0];
    answer[0] = positive;
    answer[1] = zeroes;
    answer[2] = negative;

    return answer;

var size = prompt("Escriba el numero de elementos");
let inptArray = [];
var tXt = "";
for (let i=0; i< size; i++){
    tXt = "Escriba el numero " + i + " en el array.";
    inptArray.push(prompt(tXt));
}
var count = prob3(inptArray);
tXt = "En el arreglo hay " + count[0] + " numeros positivos, " + count[1]+ " ceros y " + count[2] +" numeros negativos.";
alert(tXt);
document.write(tXt);

    document.write("<br><br> Los numeros positivos: "+ positive+"<br>Los numeros negativos: "+ negative+ "<br>Cantidad de ceros: "+ zeroes);
    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

function prob4(){
    var avgNum = prompt("Escriba los promedios");
    var dataNum = prompt("Datos de promedio")
    var matrix = []

    for(let r=0; r<dataNum; r++){
        var avg = [];

        for (let i = 0; i < avgNum; i++){
            var data =  Math.round(Math.random() * (100 - 50) + 50);
            avg.push(data);
        }
        console.log(avg)

        matrix.push(avg);
    }

    for (var i = 1; i <= dataNum; i++){
        var sum = 0;
        for (var j = 0; j < matrix[i-1].length; j++){

            var d = matrix[i-1][j];
            sum += d;
        }
        sum = sum / avgNum;
        alert("El " + i + "° promedio es = " + sum + "\n");
        console.log(matrix);
    }
}

function prob5(){
  document.write("<h2>Problema 5</h2>")
  let num = 1782946;
  document.write("Numero origianl: "+ num);

    const inverse = (num) => parseInt(String(num).split("").reverse().join(""), 10);
    document.write("<br><br>Numero inverso: "+ inverso(num));

    document.write('<br><br><button id="regresar"> Regresar </button>');
    document.getElementById("regresar").onclick = function(){reWrite()};
}

function prob6(input){
  document.write("<h2>Problema 6<h2>")
  var chars = input.split('');
  var currentChar;
  var str = "";
  var longest_string = "";
  var hash = {};
  for (var i = 0; i < chars.length; i++) {
    currentChar = chars[i];
    if (!hash[chars[i]]) {
      str += currentChar;
      hash[chars[i]] = {index:i};
}
    else{
      if(longest_string.length <= str.length){
        longest_string = str;
}

  var prevIndex = hash[currentChar].index;
  var previous = input.substring(prevIndex + 1, i);
  str = previous + currentChar;
  hash = {};
  for (var j = index + 1; j <= i; j++) {
    hash[input.charAt(j)] = {index:j};}
}
}
return longest_string.length > str.length ? longest_string : str;
}
console.log(prob6("Parangaricutirimicuaro"));
console.log(prob6("aaaeeeeeiiiooouuu"));



function reWrite(){
    // Re-write the webpage
    window.location.reload(true);
}
