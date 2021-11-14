var i = 0;
var txt = 'I ...<br>Love...<br>You...';
var speed = 100;

function ketik() {
  if (i < txt.length) {
    document.getElementById("output").innerHTML += txt.charAt(i);
    i++;
    setTimeout(ketik, speed);
  }
}
