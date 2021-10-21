function setup() {
  let canvas = createCanvas(100, 100);
  canvas.parent("tgl");
}

function draw() {
  background("silver");
  let d = day();
  text('Current day: \n' + d, 5, 50);
  
}
