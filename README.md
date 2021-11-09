Describe: Game()
Test: new game generates array of colors.
Code: let game = new Game();
Output: Game {colors: ["red","yellow","blue"]}

Test: new game generates array of colors and initiates round number to 0.
Code: let game = new Game();
Output: Game {colors: ["red","yellow","blue"], round: 0}

Test: new game generates array of colors and initiates round number to 0 AND initiates current pattern to empty array.
Code: let game = new Game();
Output: Game {colors: ["red","yellow","blue"], round: 0, currentPattern: []}

Describe: Game.prototype.getNewPattern()
Test: return new pattern with 2 colors random in current array to start. Incread round to 1.
Code:
game.getNewPattern();
Output: [color, color];
