document.getElementById("btn").onclick= function(){cube()};

function cube(){
  const num = Number(document.getElementById("numInput").value);
  document.getElementById("Result").value=num*num*num;
  document.getElementById("Result2").value=6*num*num;
}
