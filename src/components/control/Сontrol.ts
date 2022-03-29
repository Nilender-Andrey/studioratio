import Keyboard from './Keyboard';
import Swipe from './Swipe';
import Game from '../gaming-logic/Game';
import Result from '../result/Result';
import State from '../../state/State';

import { DirectionType } from '../../types/type';
import Options from '../options/Options';
import Utils from '../gaming-logic/Utils';

class Control {
  private parentElement: HTMLElement;
  private options: Options | null = null;
  private playGame: Game | null = null;
  private game: HTMLElement | null = null;
  private score: HTMLElement | null = null;
  private moves: HTMLElement | null = null;
  private gameBody: HTMLElement | null = null;

  static btnNewGame: HTMLButtonElement | null = null;
  static btnOptions: HTMLButtonElement | null = null;

  constructor(parentElement: HTMLElement) {
    this.parentElement = parentElement;
    this.activeParts();
    this.addListeners();

    if (this.gameBody) {
      new Swipe(this.gameBody, this.move);
      new Keyboard(this.move);
    }
  }

  private move = (direction: DirectionType) => {
    if (this.playGame) {
      this.playGame.step(direction);
    }
  };

  private activeParts = () => {
    this.game = this.parentElement.querySelector('.game');
    if (this.game) {
      this.score = this.game.querySelector('.info-game__score');
      this.moves = this.game.querySelector('.info-game__time');
      Control.btnNewGame = this.game.querySelector('.game__new-game-btn');
      Control.btnOptions = this.game.querySelector('.game__options-btn');
      this.gameBody = this.game.querySelector('.game__body');
    }
  };

  private addListeners = () => {
    if (Control.btnNewGame) {
      Control.btnNewGame.addEventListener('click', this.newGame);
    }
    if (Control.btnOptions) {
      Control.btnOptions.addEventListener('click', this.openOptions);
    }
  };

  private newGame = () => {
    if (this.game && this.score && this.moves && this.gameBody) {
      this.playGame = null;
      State.gameStarts();
      Utils.removeAllElements(this.gameBody, 'game-cell');

      const renderResult = new Result(this.game).render;

      this.playGame = new Game(
        this.score,
        this.moves,
        this.gameBody,
        renderResult,
      );
    }
  };

  private openOptions = () => {
    if (this.game && Control.btnOptions && Control.btnNewGame) {
      if (!this.options) {
        State.isGameStop = true;
        this.options = new Options({
          parentElem: this.game,
          playGame: this.playGame,
          newGame: this.newGame,
        });
        Control.btnNewGame.disabled = true;
        Control.btnOptions.innerHTML = '✖';
      } else {
        this.options.remove();
        this.options = null;
        Control.btnOptions.innerHTML = '⚙️';
        Control.btnNewGame.disabled = false;
        State.isGameStop = false;
      }
    }
  };
}

export default Control;
