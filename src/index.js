import $ from 'jquery';
import { Game } from './game.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

let game;
let clicked="none";
let clickedList;


function startRound(){
  clickedList =[];
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

  let index = -1;
function flashSimon() {
  index += 1;
  $("#game-blinker-box").css("background-color", newPatternWithGray[index]);
	if (index < newPatternWithGray.length) {
		setTimeout(flashSimon, 500);
	}
}
setTimeout(flashSimon, 500);

setTimeout(function() {
  
  game.currentPattern.forEach(function(colorTrue){
    clickedList.forEach(function(clickedColor){
      if(colorTrue===clickedColor){
        clickPassed=true;
      }
      else{clickPassed=false;}
    });
  });
  setTimeout(function() {
    if(clickPassed){
      $("#round-number").html(game.round-1);
      $("#round-status").show();
      setTimeout(function() {
          startRound();
        }, 2000);
    }
    else{
          $("#gameover").show();
          $("#start").text("Try again");
    }
  }, 50);
    
}, 2000*game.round);


  
}

function clickListeners(){
  $("#start").on("click", function(){
    $("#gameover").hide();
    $("#round-status").hide();
    game = new Game();
    startRound();
  });
  $("#red").on("click", function(){
    clickedList.push(this.id);
  });
  $("#yellow").on("click", function(){
    clickedList.push(this.id);
  });
  $("#blue").on("click", function(){
    clickedList.push(this.id);
  });

}



clickListeners();
