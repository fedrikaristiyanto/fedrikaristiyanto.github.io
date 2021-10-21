function setup () {
var canvas = createCanvas(400,400);
canvas.parent("tgl");
}

function draw() {
background(silver);
var d = day();
var m = month();
var y = year();
text(d, 5,50);
}
