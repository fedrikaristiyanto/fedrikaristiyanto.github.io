function myFunc() {
var r = Number(document.getElementById("rad").value);
document.getElementById("area").value=Math.PI * (r**2);
document.getElementById("circumference").value=2*Math.PI*r;
}
