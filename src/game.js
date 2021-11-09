export function Game(){
  this.colors = ["red","yellow","blue"];
  this.currentPattern = [];
  this.round = 1;
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
Game.prototype.getPattern =function(){
  this.currentPattern = [];
  for (let i=0;i<this.round;i++){
    this.currentPattern.push(this.colors[getRandomInt(3)]);
  }
  this.round=this.round+1;
  return this.currentPattern;
}

