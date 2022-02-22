var Button = document.getElementById("bttn");
  Button.addEventListener("click", hitung);

function hitung(){
var p = document.getElementById("pjg").value;
var l = document.getElementById("lbr").value;
var L = p*l;
var k = 2*(p+l);

if (l >= p) {
  alert("tdk msk akal, l tdk lbh pjg dr p ato sama dgn p");
}
else{
document.getElementById("Result").value=`Luas : ${L} 
keliling: ${k}`;
}
}
