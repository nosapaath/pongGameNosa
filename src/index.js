import './styles/game.css';
import Game from './partials/Game'

// create a game instance
const game = new Game('game');

// game speed
const ms = 30;

function start() {
  // recursive function creates a loop
  (function gameLoop() {

    // render game here

    setTimeout(gameLoop, ms);
  }());
}

start();