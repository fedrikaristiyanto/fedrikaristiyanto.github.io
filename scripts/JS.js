function GanjilGenap(){
var number = parseInt(document.getElementById("inp").value);  
var answer = (number % 2 == 1) ? ' adalah bilangan Ganjil' : ' adalah bilangan Genap';  
document.getElementById("outp").value=number + answer;
}
