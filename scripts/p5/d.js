function setup() {
  let canvas = createCanvas(100, 100);
  canvas.parent("tgl");
}

function draw() {
  background("silver");
  let d = day();
  let m = month();
  text('tanggal: \n' + d + "/"+m, 5, 50);
  
}
