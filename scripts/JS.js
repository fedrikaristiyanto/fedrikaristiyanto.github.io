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

// what is my screen resolution
function MyScreenResolution() {
 document.write('Your screen resolution: ' + screen.width+' x '+screen.height);
}

// sayHello
function sayHello() {
var user = prompt("Please enter your name!");
document.write("<h1>Hello " + user + "</h1>");
}
