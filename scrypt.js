var marche = false;
var color = ["red","yellow","black","green","blue","white"];
var timer;

function changecouleur(){
  marche =! marche;
  if(marche == true){
    timer = setInterval(changement,100);
  }
  else {
    clearInterval(timer);
  }
}

function changement(){
    document.getElementById('fond').style.backgroundColor =  color[Math.round(Math.random()*color.length)];
}
