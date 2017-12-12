function changecouleur(){
  var color = ["red","yellow","black","green","blue"];
  document.getElementById('fond').style.backgroundColor =  color[Math.round(Math.random()*color.length)];
}
