function listingArrows() {
let text = "";
for (let i = 8592; i <= 8703; i++) {
  text += i + ":" + String.fromCharCode(i) + "\n";
}

document.getElementById("list").value = text;
}
