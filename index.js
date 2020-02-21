var randomnumber1= Math.floor(Math.random()*6 +1);
document.querySelector(".img1").setAttribute("src","images/dice"+randomnumber1+".png");

var randomnumber2= Math.floor(Math.random()*6 +1);
document.querySelector(".img2").setAttribute("src","images/dice"+randomnumber2+".png");

if(randomnumber1===randomnumber2){
  document.querySelector("h1").innerHTML="DRAW";
}
else if(randomnumber1 > randomnumber2){
  document.querySelector("h1").innerHTML="PLAYER 1 WINS!";
}
else if(randomnumber1 < randomnumber2){
  document.querySelector("h1").innerHTML="PLAYER 2 WINS!";
}
