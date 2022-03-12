function loaD(){
const unforgiven = [
"<a href='http://docs.google.com/uc?export=open&id=1CNONAQia2CWajZZ8_fA6-eTF_ryRxtoH'>The Unforgiven</a>",
"<a href='http://docs.google.com/uc?export=open&id=1LWBbF7oxJV7im8Cd48ghBCIOuA6WjyET'>The Unforgiven II</a>",
"<a href='http://docs.google.com/uc?export=open&id=1VUb18AXP79n7-WzJc2wY6L2hY1yaEhlZ'>The Unforgiven III</a>"
];

let text = "<ul>";

for (let i = 0; i < unforgiven.length; i++){
    
    text += "<li>" + unforgiven[i]  + "</li>";
}
text += "</ul>"
document.getElementById("Unforgiven").innerHTML=text;
}
