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
  private game: HTMLElement | null = null;
  private score: HTMLElement | null = null;
  private moves: HTMLElement | null = null;
  private btnNewGame: HTMLElement | null = null;
  private btnOptions: HTMLElement | null = null;
  private gameBody: HTMLElement | null = null;
  private options: Options | null = null;
  private playGame: Game | null = null;

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
      this.btnNewGame = this.game.querySelector('.game__new-game-btn');
      this.btnOptions = this.game.querySelector('.game__options-btn');
      this.gameBody = this.game.querySelector('.game__body');
    }
  };

  private addListeners = () => {
    if (this.btnNewGame) {
      this.btnNewGame.addEventListener('click', this.newGame);
    }
    if (this.btnOptions) {
      this.btnOptions.addEventListener('click', this.openOptions);
    }
  };

  private newGame = () => {
    if (
      this.game &&
      this.score &&
      this.moves &&
      this.gameBody &&
      !State.isGameStop
    ) {
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
    if (this.game && this.btnOptions) {
      if (!this.options) {
        this.options = new Options({
          parentElem: this.game,
          playGame: this.playGame,
        });
        this.btnOptions.innerHTML = '✖';
      } else {
        this.options.remove();
        this.options = null;
        this.btnOptions.innerHTML = '⚙️';
      }
    }
  };
}

export default Control;
