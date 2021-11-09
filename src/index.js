import $ from 'jquery';
import { Game } from './game.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let game;
let clicked="none";
function startRound(){
  let newPattern = game.getPattern();
  for(let i=0;i<newPattern.length;i++){
    setTimeout(function() {
      $("#game-blinker-box").css("background-color", newPattern[i]);
  }, 800);

  } setTimeout(function() {
    $("#game-blinker-box").css("background-color", "grey");
  }, 1700);

   for(let i=0;i<newPattern.length;i++){
   setTimeout(function() {
      if(clicked===newPattern[i]){
        alert("correct");
        
      }else{alert("wrong")}
   }, 3000);clicked="none";
  }
  
}

function clickListeners(){
  $("#start").on("click", function(){
    game = new Game();
    startRound();
  });
  $("#red").on("click", function(){
    clicked=this.id;
  });
  $("#yellow").on("click", function(){
    clicked=this.id;
  });
  $("#blue").on("click", function(){
    clicked=this.id;
  });

}



clickListeners();
