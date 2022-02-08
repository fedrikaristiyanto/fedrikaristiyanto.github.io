function webSafeColor(){
var Inp1 = parseInt(document.getElementById("rangeInp1").value); // dptkan value dari input 1
var Inp2 = parseInt(document.getElementById("rangeInp2").value); // dptkan value dari input 2
var Inp3 = parseInt(document.getElementById("rangeInp3").value); // dptkan value dari input 3

// menyatukan semua value yg tlah didapat dan diubah ke string 16 dengan diawali tanda #
var web_safe_color = document.getElementById("val").value=
"#" + Inp1.toString(16).toUpperCase()
    + Inp2.toString(16).toUpperCase()
    + Inp3.toString(16).toUpperCase();

// mengaplikasikan warna pd textarea
document.getElementById("pratinjau").style.backgroundColor=
web_safe_color;
}
