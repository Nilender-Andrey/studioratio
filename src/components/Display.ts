class Display {
  parentElement: HTMLElement;
  game: HTMLElement;
  gameBody: HTMLElement;
  gameHeader: HTMLElement;

  constructor(parentElement: HTMLElement) {
    this.parentElement = parentElement;

    this.game = document.createElement('div');
    this.gameHeader = document.createElement('div');
    this.gameBody = document.createElement('div');

    this.addHeader();
    this.addGameBody();
    this.addGame();

    this.parentElement.append(this.game);
  }

  private addGame = () => {
    this.game.className = 'game';

    this.game.append(this.gameHeader, this.gameBody);
  };

  private addHeader = () => {
    const view = `
      <div class="game__info">
        <div class="game__logo">2048</div>

        <div class="game__score info-game">
          <div class="info-game__name">Score </div>
          <div class="info-game__score">0</div>
        </div>

        <div class="game__time info-game">
          <div class="info-game__name">Moves </div>
          <div class="info-game__time">0</div>
        </div>

      </div>

      <div class="game__info">
        <div class="game__rules">Join the numbers and get to the <span>2048 tile!</span></div>
        <button class="game__new-game-btn">New Game</button>
      </div>
    `;

    this.gameHeader.className = 'game__header';
    this.gameHeader.innerHTML = view;
  };

  private addGameBody = () => {
    const view = new Array(25)
      .fill('0')
      .map(() => '<div class="cell"></div>')
      .join('');

    this.gameBody.className = 'game__body';
    this.gameBody.innerHTML = view;
  };
}

export default Display;
