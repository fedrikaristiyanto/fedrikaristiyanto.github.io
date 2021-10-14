function hitung() {
var W = document.getElementById("weight").value;
var Hm = document.getElementById("height").value/100;
var bmi = W / (Hm**2);

if (bmi < 18.5) {
 document.getElementById("output").innerHTML=bmi + "<br> kurus";}
else if (bmi < 25) {
 document.getElementById("output").innerHTML=bmi + "<br> normal";}
else {
 document.getElementById("output").innerHTML=bmi + "<br> gemuk";}
}
