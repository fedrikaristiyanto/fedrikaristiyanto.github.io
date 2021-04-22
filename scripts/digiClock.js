var X = setInterval(T, 1000);

function T(){
var d = new Date();
document.getElementById("digiClock").innerHTML = d.toLocaleTimeString();
}
