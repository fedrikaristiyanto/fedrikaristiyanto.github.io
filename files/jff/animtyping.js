var i = 0;
var txt = "aku mencintaimu...";
var speed = 500;

function ketik() {
  if (i < txt.length) {
    document.getElementById("output").innerHTML += txt.charAt(i);
    i++;
    setTimeout(ketik, speed);
  }
}
