import $ from 'jquery';
import { Game } from './game.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

//function startRound;

let clicked="none";
function clickListeners(){
  $("#start").on("click", function(){
    let game = new Game();
    //startRound();
    let newPattern = game.getPattern();
    for(let i=0;i<newPattern.length;i++){
      $(this).delay(1500).queue(function() {
        $("#game-blinker-box").css("background-color",newPattern[i]);
        $(this).dequeue();
     });
    } 
    $(this).delay(1000).queue(function() {
      $("#game-blinker-box").css("background-color","grey");
      $(this).dequeue();
   });
     for(let i=0;i<newPattern.length;i++){
      $(this).delay(3000).queue(function() {
        if(clicked===newPattern[i]){
          alert("correct");
          
        }else{alert("wrong")}
        $(this).dequeue(); 
     });clicked="none";
    }
    
  
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
