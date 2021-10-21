function setup() {
  let canvas = createCanvas(100, 100);
  canvas.parent("tgl");
}

function draw() {
  background("silver");
  let d = day();
  let m = month();
  let y = year();
  text('tanggal:\n' +d+"/"+m+"/"+y, 5, 50);
  
}
