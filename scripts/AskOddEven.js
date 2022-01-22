function AskOddEven(){
var number = parseInt(document.getElementById("inp").value);  
var answer = (number % 2 == 0) ? ' adalah bilangan GENAP' : ' adalah bilangan GANJIL';  
document.getElementById("outp").innerHTML=number + answer;
}
