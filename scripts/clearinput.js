//single clear input field 
function cl(){
  document.getElementById("inp").value="";
}


//multi clear input field with class name .field
function cl2(){
 var FLD = document.querySelectorAll(".field");

 for (var i = 0; i < FLD.length; i++) {
   FLD[i].value = "";}

}
