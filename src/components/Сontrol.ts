import Keyboard from './Keyboard';
import Swipe from './Swipe';
import Game from './Game';

class Control {
  parentElement: HTMLElement;

  game: HTMLElement | null = null;
  score: HTMLElement | null = null;
  moves: HTMLElement | null = null;
  btnNewGame: HTMLElement | null = null;
  gameBody: HTMLElement | null = null;

  static playGame: Game | null = null;

  constructor(parentElement: HTMLElement) {
    this.parentElement = parentElement;

    this.activeParts();
    this.addListenerNewGame();

    if (this.gameBody) {
      new Swipe(this.gameBody, {
        minDistance: 100,
      });
      new Keyboard();
    }
  }

  static moveLeft() {
    if (Control.playGame) Control.playGame.moveLeft();
  }

  static moveRight() {
    if (Control.playGame) Control.playGame.moveRight();
  }

  static moveUp() {
    if (Control.playGame) Control.playGame.moveUp();
  }

  static moveDown() {
    if (Control.playGame) Control.playGame.moveDown();
  }

  private activeParts = () => {
    this.game = this.parentElement.querySelector('.game');
    if (this.game) {
      this.score = this.game.querySelector('.info-game__score');
      this.moves = this.game.querySelector('.info-game__time');
      this.btnNewGame = this.game.querySelector('.game__new-game-btn');
      this.gameBody = this.game.querySelector('.game__body');
    }
  };

  private addListenerNewGame = () => {
    if (this.btnNewGame) {
      this.btnNewGame.addEventListener('click', this.newGame);
    }
  };

  private newGame = () => {
    if (this.score && this.moves && this.gameBody) {
      Control.playGame = null;

      this.gameBody
        .querySelectorAll('.game-cell')
        .forEach((item) => item.remove());

      Control.playGame = new Game(this.score, this.moves, this.gameBody);
    }
  };
}

export default Control;
