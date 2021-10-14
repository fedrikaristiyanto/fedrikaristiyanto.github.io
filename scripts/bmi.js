function hitung() {
var W = document.getElementById("weight").value;
var Hm = document.getElementById("height").value/100;
var bmi = W / (Hm**2);

if (bmi < 18.5) {
 document.write("BMI: " + bmi + "<br> kurus");}

}
