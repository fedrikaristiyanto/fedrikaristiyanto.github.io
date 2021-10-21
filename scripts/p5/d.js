function setup () {
let canvas = createCanvas(400,400);
canvas.parent("tgl");
}

function draw() {
background(silver);
let d = day();
let m = month();
let y = year();
text(d+"-"+"-"+y,5,50);
}
