import State from '../../state/State';
import { IRatingData } from '../../types/type';

class Rating {
  private parentElem: HTMLElement;
  private gameRating: HTMLElement;
  private isData: boolean;
  private data: IRatingData[] | [];
  private variant: string;

  constructor(parentElem: HTMLElement, variant = 'standard') {
    this.parentElem = parentElem;
    this.gameRating = document.createElement('div');
    this.isData = true;
    this.variant = variant;
    this.data =
      this.variant === 'standard'
        ? this.getStandardRating()
        : this.getEndlessRating();
    State.isGameStop = true;

    this.render();
    this.listener();
  }

  private getStandardRating = () => {
    return State.ratingStandard.sort((a, b) => a.time - b.time);
  };
  private getEndlessRating = () => {
    return State.ratingEndless.sort((a, b) => a.steps - b.steps);
  };

  private render = () => {
    let view = `
    <div class="rating">
      <div class="spinner-wrap">
        <img src="./../src/assets/spinner.svg" alt="spinner">
        <p>Loading...</p>
      </div>
    </div>
   `;

    if (this.isData) {
      const cells = this.data
        .map(
          ({ name, isWin, steps, score, time }) => `<tr>
            <td>${isWin ? 'win' : 'lose'}</td>
            <td>${name}</td>
            <td>${steps}</td>
            <td>${score}</td>
            <td>${time}</td>
          </tr>`,
        )
        .join(' ');

      view = `<div class="rating">
      <h2 class="rating__title title">Rating ${
        this.variant === 'standard' ? '2048' : 'Endless'
      }</h2>
      <table class="rating-table">
        <thead>
          <tr>
            <th>Result</th>
            <th>Name</th>
            <th>Steps</th>
            <th>Score</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          ${cells}
        </tbody>
      </table>
    </div>
    <button class="btn rating__btn_rating_close">X</button>
    `;
    }

    this.gameRating.className = 'game__rating game__rating_animate-add';
    this.gameRating.innerHTML = view;
    this.parentElem.appendChild(this.gameRating);
  };

  private listener = () => {
    if (this.gameRating) {
      this.gameRating
        .querySelector('.rating__btn_rating_close')
        ?.addEventListener('click', this.remove);
    }
  };

  remove = () => {
    State.isGameStop = false;
    this.gameRating.classList.remove('game__rating_animate-add');
    this.gameRating.classList.add('game__rating_animate-remove');

    setTimeout(() => {
      this.gameRating.remove();
      this.remove();
    }, 250);
  };
}

export default Rating;
