//untuk mengecek bilangan ganjil atau genap
function GanjilGenap(){
var number = parseInt(document.getElementById("inp").value);  
var answer = (number % 2 == 1) ? ' adalah bilangan Ganjil' : ' adalah bilangan Genap';  
if (isNaN(number)){
 alert("input not valid");
}
else {
document.getElementById("outp").value=number + answer;
}
}
