function setup() {
  let canvas = createCanvas(100, 100);
  canvas.parent("tgl");
}

function draw() {
  background("gold");
  let d = day();
  let m = month();
  let y = year();
  textSize(14);
  textFont("Georgia");
  text('tanggal:\n' +d+"/"+m+"/"+y, 5, 50);
  
}
