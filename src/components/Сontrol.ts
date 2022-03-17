import Keyboard from './Keyboard';
import Swipe from './Swipe';
import Game from './gaming-logic/Game';
import Result from './result/Result';

class Control {
  parentElement: HTMLElement;

  game: HTMLElement | null = null;
  score: HTMLElement | null = null;
  moves: HTMLElement | null = null;
  btnNewGame: HTMLElement | null = null;
  btnOptions: HTMLElement | null = null;
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

  static move(direction: 'moveLeft' | 'moveRight' | 'moveUp' | 'moveDown') {
    if (Control.playGame) {
      Control.playGame.step(direction);
    }
  }

  private activeParts = () => {
    this.game = this.parentElement.querySelector('.game');
    if (this.game) {
      this.score = this.game.querySelector('.info-game__score');
      this.moves = this.game.querySelector('.info-game__time');
      this.btnNewGame = this.game.querySelector('.game__new-game-btn');
      this.btnOptions = this.game.querySelector('.game__options-btn');
      this.gameBody = this.game.querySelector('.game__body');
    }
  };

  private addListenerNewGame = () => {
    if (this.btnNewGame) {
      this.btnNewGame.addEventListener('click', this.newGame);
    }
  };

  private newGame = () => {
    if (this.game && this.score && this.moves && this.gameBody) {
      Control.playGame = null;

      this.gameBody
        .querySelectorAll('.game-cell')
        .forEach((item) => item.remove());

      const renderResult = new Result(this.game).render;
      Control.playGame = new Game(
        this.score,
        this.moves,
        this.gameBody,
        renderResult,
      );
    }
  };
}

export default Control;
