function hitung() {
var W = document.getElementById("weight").value;
var Hm = document.getElementById("height").value/100;
document.getElementById("BMI").value=W / (Hm**2);
}
