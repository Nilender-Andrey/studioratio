import Swipe from './Swipe';

class Control {
  parentElement: HTMLElement;

  game: HTMLElement | null = null;
  score: HTMLElement | null = null;
  moves: HTMLElement | null = null;
  btnNewGame: HTMLElement | null = null;
  gameBody: HTMLButtonElement | null = null;

  constructor(parentElement: HTMLElement) {
    this.parentElement = parentElement;

    this.activeParts();
    this.newGame();
    this.keyboard();

    if (this.gameBody)
      new Swipe(this.gameBody, {
        minDistance: 100,
      });
  }

  activeParts = () => {
    this.game = this.parentElement.querySelector('.game');
    if (this.game) {
      this.score = this.game.querySelector('.info-game__score');
      this.moves = this.game.querySelector('.info-game__time');
      this.btnNewGame = this.game.querySelector('.game__new-game-btn');
      this.gameBody = this.game.querySelector('.game__body');
    }
  };

  newGame = () => {
    if (this.btnNewGame)
      this.btnNewGame.addEventListener('click', () => console.log('111'));
  };

  keyboard = () => {
    if (this.gameBody)
      document.addEventListener('keydown', (e: KeyboardEvent) => {
        switch (e.code) {
          case 'ArrowLeft':
            console.log('ArrowLeft');
            break;
          case 'ArrowRight':
            console.log('ArrowRight');
            break;
          case 'ArrowUp':
            console.log('ArrowUp');
            break;
          case 'ArrowDown':
            console.log('ArrowDown');
            break;
        }
      });
  };

  swipeStart = () => {
    if (this.gameBody) {
      this.gameBody.addEventListener('mousedown', (e: Event) => {
        console.log(e.target);
      });
    }
  };
}

export default Control;
