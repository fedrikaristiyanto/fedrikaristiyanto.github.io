function setup () {
createCanvas(400,400);
}

function draw() {
background(silver);
let d = day();
let m = month();
let y = year();
text(d+"-"+"-"+y);
}
