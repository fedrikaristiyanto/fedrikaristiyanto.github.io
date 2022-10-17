document.body.onload=function(){HaloDuniaCanvas()};

function HaloDuniaCanvas() {
  var canvas = document.createElement("CANVAS");
    canvas.style.border="1px solid black";

  var ctx = canvas.getContext("2d");
    ctx.font = "32px monospace";
    ctx.textAlign = "center";
    ctx.textBaseline="middle"; 
    ctx.fillStyle = "black";
    ctx.fillText("Halo Dunia!", canvas.width/2, canvas.height/2);
  document.body.appendChild(canvas);
}
