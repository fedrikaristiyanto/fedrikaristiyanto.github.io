function change(){
 let x = Math.floor(Math.random()*6);
 
 let color;
 if (x==0){
  color = "Red";
 }
 else if (x==1){
  color = "Green";
 }
 else if (x==2){
  color = "Blue";
 }
 else if (x==3){
  color = "Cyan";
 }
 else if (x==4){
  color = "Magenta";
 }
 else {
  color = "Yellow";
 }
document.body.style.backgroundColor=color;
document.getElementById("val").value="I am " + color;
}



