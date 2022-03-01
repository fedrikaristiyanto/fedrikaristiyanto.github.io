function switchColor() {
 var elemen = document.querySelector("body");
 elemen.classList.toggle("DarkMode");
}


function changeTxt(){
  
var stl = document.form.syle.value;
if (stl == "Uppercase"){
document.getElementById("txt").style.textTransform="uppercase";
}
else if (stl == "Lowercase"){
document.getElementById("txt").style.textTransform="lowercase";
}
else {
document.getElementById("txt").style.textTransform="capitalize";
}
}
