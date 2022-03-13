const Start = document.getElementById("start");
const GameBord = document.getElementById("GameBord");
const p1Status = document.getElementById("player1Status");
const p2Status = document.getElementById("player2Status");
const WonStatus = document.getElementById("WonStatus");
const showp1h = document.getElementById("player1h");
const showp2h = document.getElementById("player2h");
const bullet1 = document.getElementById("bullet");
const bullet2 = document.getElementById("bullet1");

let p1Health;       //Player 1 health
let p2Health;       //Player 2 health
let p1Won = 0;      //player 1 won count
let p2Won = 0;      //player 2 won count
let GameState = "not_started";

let StartGame = () =>{
 // console.log("button-clicked");
 Start.classList.toggle("dactive");
 GameBord.classList.toggle("dactive");
 WonStatus.innerHTML = "";

 p1Health=100;
 p2Health=100;

 showp2h.innerHTML = " Player 2 health : " +p2Health;
 showp1h.innerHTML = " Player 1 health : " +p1Health;
 GameState = "Started";

 // Get key by keypress

 document.onkeypress = (e) =>{
  if (GameState === "Started") {
   if(e.which == 107 || e.which == 75){
    player2Fire(Math.floor(Math.random() * 6));
   }else if(e.which == 115 || e.which == 83){
    player1Fire(Math.floor(Math.random() * 6));
   }
  }
 }
}

player1Fire=(powr)=>{
  p2Health -= powr;
 showp2h.innerHTML = " Player 2 health : " +p2Health;
  bullet1.classList.toggle("bullet");

  setTimeout( () => {
    bullet1.classList.toggle("bullet");
  }, 310);
 if (p2Health<=0) {
  gameOver("p1");
 }
}
player2Fire = (powr)=>{
 p1Health -= powr;
 showp1h.innerHTML = " Player 1 health : " +p1Health;
 bullet2.classList.toggle("bullet1");

 setTimeout(() => {
  bullet2.classList.toggle("bullet1");
}, 310);
 if (p1Health<=0) {
  gameOver("p2");
 }
}

gameOver=(won)=>{
 Start.classList.toggle("dactive");
 // GameBord.className += "dactive";
 GameBord.classList.toggle("dactive");

 if(won == "p1"){

   // player1 Won
  p1Won ++;
  p1Status.innerHTML = "Player 1 - Won : " + p1Won;
  p2Status.innerHTML = "Player 2 - Won : " + p2Won;
 }else if (won == "p2") {

   // player1 Won
  p2Won ++;
  p1Status.innerHTML = "Player 1 - Won : " + p1Won;
  p2Status.innerHTML = "Player 2 - Won : " + p2Won;
 }
 if (p1Won == 3) {

  // Player1 Won the match
  WonStatus.innerHTML = "Player1 Won the match!";
  p1Won = 0;
  p2Won = 0;
 }else if (p2Won == 3) {

  // Player2 Won the match
  WonStatus.innerHTML = "Player2 Won the match!";
  p1Won = 0;
  p2Won = 0;
 }
 GameState = "GameOver";
}
