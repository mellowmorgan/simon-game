Describe: Game()<br>
Test: new game generates array of colors.<br>
Code: let game = new Game();<br>
Output: Game {colors: ["red","yellow","blue"]}<br>

Test: new game generates array of colors and initiates round number to 0.<br>
Code: let game = new Game();<br>
Output: Game {colors: ["red","yellow","blue"], round: 0}<br>

Test: new game generates array of colors and initiates round number to 0 AND initiates current pattern to empty array.<br>
Code: let game = new Game();<br>
Output: Game {colors: ["red","yellow","blue"], round: 0, currentPattern: []}<br>

Describe: Game.prototype.getNewPattern()<br>
Test: return new pattern with 2 colors random in current array to start. Incread round to 1.<br>
Code:<br>
game.getNewPattern();<br>
Output: [color, color];<br>
