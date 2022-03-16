class Game {
  private result: number;
  private scoreForWin: number;
  private moves: number;
  private resolveMove: boolean;
  private field: number[][];
  private elemShowingScore: HTMLElement;
  private elemShowingMoves: HTMLElement;
  private gameBody: HTMLElement;

  constructor(
    scoreElem: HTMLElement,
    movesElem: HTMLElement,
    gameBody: HTMLElement,
  ) {
    this.result = 0;
    this.scoreForWin = 2048;
    this.moves = 0;
    this.resolveMove = false;
    this.field = [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ];

    this.elemShowingScore = scoreElem;
    this.elemShowingMoves = movesElem;
    this.gameBody = gameBody;

    this.step();
  }

  moveLeft() {
    if (!this.resolveMove) return;
    this.resolveMove = false;

    for (let j = 0; j <= 4; j++) {
      let l = 0;
      for (let i = 0; i <= 4; i++) {
        if (this.field[j][i]) {
          for (let k = i; k > l; k--) {
            if (
              this.field[j][k] != this.field[j][k - 1] &&
              this.field[j][k - 1] != 0
            ) {
              l++;
            } else {
              if (this.field[j][k] === this.field[j][k - 1]) {
                this.field[j][k - 1] = this.field[j][k] + this.field[j][k - 1];
                this.field[j][k] = 0;
                l++;

                this.updateScore(this.field[j][k - 1]);
                this.changeElem(j, k, this.field[j][k - 1], j, k - 1);
                this.removeElem(j, k - 1);
              } else if (this.field[j][k - 1] === 0) {
                this.field[j][k - 1] = this.field[j][k];
                this.field[j][k] = 0;

                this.changeElem(j, k, this.field[j][k - 1], j, k - 1);
              }
            }
          }
        }
      }
    }

    this.step();
    this.updateMoves();
  }

  moveRight() {
    if (!this.resolveMove) return;
    this.resolveMove = false;

    for (let j = 0; j <= 4; j++) {
      let l = 3;
      for (let i = 4; i >= 0; i--) {
        if (this.field[j][i]) {
          for (let k = i; k <= l; k++) {
            if (
              this.field[j][k] !== this.field[j][k + 1] &&
              this.field[j][k + 1] !== 0
            ) {
              l--;
            } else {
              if (this.field[j][k] === this.field[j][k + 1]) {
                this.field[j][k + 1] = this.field[j][k] + this.field[j][k + 1];
                this.field[j][k] = 0;
                l--;

                this.updateScore(this.field[j][k + 1]);
                this.removeElem(j, k + 1);
                this.changeElem(j, k, this.field[j][k + 1], j, k + 1);
              } else if (this.field[j][k + 1] === 0) {
                this.field[j][k + 1] = this.field[j][k];
                this.field[j][k] = 0;

                this.changeElem(j, k, this.field[j][k + 1], j, k + 1);
              }
            }
          }
        }
      }
    }

    this.updateMoves();
    this.step();
  }

  moveUp() {
    for (let i = 0; i <= 4; i++) {
      let l = 0;
      for (let j = 0; j <= 4; j++) {
        if (this.field[j][i]) {
          for (let k = j; k > l; k--) {
            if (
              this.field[k][i] != this.field[k - 1][i] &&
              this.field[k - 1][i] != 0
            ) {
              l++;
            } else {
              if (this.field[k][i] === this.field[k - 1][i]) {
                this.field[k - 1][i] = this.field[k][i] + this.field[k - 1][i];
                this.field[k][i] = 0;
                l++;

                this.updateScore(this.field[k - 1][i]);
                this.removeElem(k - 1, i);
                this.changeElem(k, i, this.field[k - 1][i], k - 1, i);
              } else if (this.field[k - 1][i] === 0) {
                this.field[k - 1][i] = this.field[k][i];
                this.field[k][i] = 0;

                this.changeElem(k, i, this.field[k - 1][i], k - 1, i);
              }
            }
          }
        }
      }
    }

    this.step();

    this.updateMoves();
  }

  moveDown() {
    for (let i = 0; i <= 4; i++) {
      let l = 4;
      for (let j = 4; j >= 0; j--) {
        if (this.field[j][i]) {
          for (let k = j; k < l; k++) {
            if (
              this.field[k][i] != this.field[k + 1][i] &&
              this.field[k + 1][i] != 0
            ) {
              l--;
            } else {
              if (this.field[k][i] === this.field[k + 1][i]) {
                this.field[k + 1][i] = this.field[k][i] + this.field[k + 1][i];
                this.field[k][i] = 0;
                l--;

                this.updateScore(this.field[k + 1][i]);
                this.removeElem(k + 1, i);
                this.changeElem(k, i, this.field[k + 1][i], k + 1, i);
              } else if (this.field[k + 1][i] === 0) {
                this.field[k + 1][i] = this.field[k][i];
                this.field[k][i] = 0;

                this.changeElem(k, i, this.field[k + 1][i], k + 1, i);
              }

              this.step();
              this.updateMoves();
            }
          }
        }
      }
    }
  }

  private changeElem = (
    oldY: number,
    oldX: number,
    sum: number,
    newY: number,
    newX: number,
  ) => {
    const elem = document.querySelector<HTMLElement>(
      `.game-cell[data-coordinates="${oldY},${oldX}"]`,
    );

    elem.style.cssText = `top: ${newY * 20}%; left: ${newX * 20}%;`;
    elem.dataset.coordinates = `${newY},${newX}`;

    elem.textContent = '' + sum;
    elem.className = `game-cell game-cell_color-color_${sum}`;
    /*   setTimeout(() => {}, 150); */
  };

  private removeElem = (y: number, x: number) => {
    const elemDel = document.querySelector<HTMLElement>(
      `.game-cell[data-coordinates="${y},${x}"]`,
    );

    elemDel.remove();
    /*  setTimeout(() => {}, 150); */
  };

  private randomValue = () => {
    const random = Math.floor(Math.random() * 101);
    return random >= 90 ? 4 : 2;
  };
  private randomNum = (num: number) => {
    const random = Math.floor(Math.random() * num);
    return random;
  };

  private updateScore = (num: number) => {
    this.result += num;
    this.elemShowingScore.textContent = this.result.toString();
  };

  private updateMoves = () => {
    this.moves++;
    this.elemShowingMoves.textContent = this.moves.toString();
  };

  private randomCoordinates = (variantsArray: number[], randomNum: number) => {
    const index = variantsArray[randomNum];
    const y = Math.floor(Math.abs(index / 5));
    const x = index - y * 5;

    return [x, y];
  };

  private createRandomCell = (value: number, x: number, y: number) => {
    const cell = document.createElement('div');
    cell.classList.add(
      'game-cell',
      `game-cell_color-color_${value}`,
      'game-cell_animate-add',
    );

    cell.textContent = value.toString();
    cell.dataset.coordinates = `${y},${x}`;

    cell.style.cssText = `left: ${x * 20}%; top: ${y * 20}%;`;

    setTimeout(() => {
      this.gameBody.append(cell);
      this.resolveMove = true;
    }, 200);

    this.field[y][x] = value;
  };

  private step = () => {
    const indexWithZero = this.field
      .flat()
      .reduce((arr: number[], item, index) => {
        if (item === 0) arr.push(index);
        return arr;
      }, []);

    if (indexWithZero.length) {
      const randomIndex = this.randomNum(indexWithZero.length);
      const [x, y] = this.randomCoordinates(indexWithZero, randomIndex);
      const randomValue = this.randomValue();

      this.createRandomCell(randomValue, x, y);
    } else {
      console.log('lose');
    }
  };
}

export default Game;
