import ResultApi from '../../api/Api';
import State from '../../state/State';
import { IRatingData } from '../../types/type';
import errorComponent from '../error/error';
import { spinnerComponent } from '../spinner/spinner';

class Rating {
  private parentElem: HTMLElement;
  private gameRating: HTMLElement;
  private data: IRatingData[] | [];
  private error: boolean;
  private variant: string;

  constructor(parentElem: HTMLElement, variant: string) {
    State.isGameStop = true;
    this.parentElem = parentElem;
    this.gameRating = document.createElement('div');
    this.data = [];
    this.error = false;
    this.render();
    this.variant = variant;

    this.getRating();
  }

  private getRating = async () => {
    try {
      const isEndless = this.variant === 'Endless';
      const data: IRatingData[] = await ResultApi.getRecords(isEndless);

      this.data = data.sort((a, b) =>
        isEndless ? b.score - a.score : a.time - b.time,
      );

      this.gameRating.innerHTML = '';
    } catch (e) {
      this.error = true;
    }

    this.render();
  };

  private render = () => {
    const spinner = !this.data.length && !this.error ? spinnerComponent() : '';
    const error = true ? errorComponent() : '';
    const isEndless = this.variant === 'Endless';

    const cells = this.data
      .map(({ name, isWin, steps, score, time, difficulty }) => {
        const result = isWin ? 'win' : 'lose';
        const firstTableСolumn = isEndless ? difficulty : result;

        return `<tr>
            <td>${firstTableСolumn}</td>
            <td>${name}</td>
            <td>${steps}</td>
            <td>${score}</td>
            <td>${time}</td>
          </tr>`;
      })
      .join(' ');

    const firstTableHeader = isEndless ? 'Difficulty' : 'Result';

    const data = this.data.length
      ? `<div class="rating">
      <h2 class="rating__title title">Rating ${this.variant}</h2>
      <table class="rating-table">
        <thead>
          <tr>
            <th>${firstTableHeader}</th>
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
    <button class="btn rating__btn_rating_close">✖</button>
    `
      : '';

    this.gameRating.className = 'game__rating game__rating_animate-add';
    this.gameRating.innerHTML = spinner || data || error;
    this.parentElem.appendChild(this.gameRating);
    this.listener();
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
