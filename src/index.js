import $ from 'jquery';
import { Game } from './game.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let game;
let clicked="none";



function startRound(){
  let newPattern = game.getPattern();
  function colorize(i){
    $("#game-blinker-box").css("background-color", newPattern[i]);
  }
  function greyify(){
    $("#game-blinker-box").css("background-color", "grey");
  }
  
  $("#round-status").hide();
  let clickPassed=false;
  
  
  for(let i=0;i<newPattern.length;i++){
    setTimeout(function() {
     colorize(i);
  }, 1000);
  setTimeout(function() {
    greyify();
  }, 2000);

  } 
   for(let i=0;i<newPattern.length;i++){
   setTimeout(function() {
      if(clicked===newPattern[i]){
        //alert("correct");
        clickPassed=true;
      }else{
        clickPassed=false;
        $("#gameover").show();
        $("#start").text("Try again");
        
      }
   }, 3000);
   clicked="none";
  }
  setTimeout(function() {
  if(clickPassed){
    $("#round-number").html(game.round-1);
    $("#round-status").show();
    setTimeout(function() {
        startRound();
      }, 2000);
  }}, 3000);
  
}

function clickListeners(){
  $("#start").on("click", function(){
    $("#gameover").hide();
    $("#round-status").hide();
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
