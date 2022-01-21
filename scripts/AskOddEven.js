function AskOddEven(){
var number = document.getElementById("inp").value;  
var answer = ( number % 2 == 0) ? ' adlh bilangan genap' : ' adlh bilangan ganjil';  
document.getElementById("outp").innerHTML=number + answer;
}
