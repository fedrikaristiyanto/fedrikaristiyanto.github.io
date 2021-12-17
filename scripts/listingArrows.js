function listingArrows() {
let text = "<ul>";
for (let i = 8592; i <= 8703; i++) {
  text += "<li>" + String.fromCharCode(i) + "</li>";
}
text += "</ul>";

document.getElementById("list").innerHTML = text;
}
