
# Simon Game

By Morgan Waites

Simon game -- classic memory game.

## Technologies Used
* HTML
* CSS
* Javascript/JQuery
* Webpack

## Setup/Installation Instructions
* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* npm install
* npm run start

## Known Bugs
Don't click too fast it'll trip it up. Missing green color.

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2021 Morgan Waites.

## Tests
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