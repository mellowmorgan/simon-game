import $ from 'jquery';
import { Game } from './game.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let game;
let clicked="none";

let round= 1;

function startRound(){
  let newPattern = game.getPattern();
  function addGrayToArray(array){
    let newArray = [];
    array.forEach(function(color){
      newArray.push(color);
      newArray.push("grey");
    }
    );
    return newArray;
  }

  $("#round-status").hide();
  let clickPassed=false;
  
  let newPatternWithGray = addGrayToArray(newPattern);
  //alert(newPatternWithGray)

  let index = 0;
function flashSimon() {
  $("#game-blinker-box").css("background-color", newPatternWithGray[index]);
	if (index < newPatternWithGray.length) {
		setTimeout(flashSimon, 500);
	}
  index += 1;
}
setTimeout(flashSimon, 500);

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
   }, (3000));
   clicked="none";
  }
  
  setTimeout(function() {
  if(clickPassed){
    $("#round-number").html(game.round-1);
    $("#round-status").show();
    setTimeout(function() {
        round++;
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
