function jvnum() {
let text = "<ol start='0'>";
for (let i = 43472; i <= 43481; i++) {
  text += "<li>" + String.fromCharCode(i) + "</li>";
}
text += "</ol>";
document.getElementById("JavaneseNum").innerHTML = text;
}
