function webSafeColor(){
var Inp1 = parseInt(document.getElementById("rangeInp1").value);
var Inp2 = parseInt(document.getElementById("rangeInp2").value);
var Inp3 = parseInt(document.getElementById("rangeInp3").value);
var web_safe_color = document.getElementById("val").value=
"#" + Inp1.toString(16).toUpperCase()
    + Inp2.toString(16).toUpperCase()
    + Inp3.toString(16).toUpperCase();

document.getElementById("pratinjau").style.backgroundColor=
web_safe_color;
}
