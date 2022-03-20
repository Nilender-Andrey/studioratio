import State from '../../state/State';
import { IRatingData } from '../../types/type';

class Rating {
  private parentElem: HTMLElement;
  private gameRating: HTMLElement;
  private isData: boolean;
  private data: IRatingData[] | [];

  constructor(parentElem: HTMLElement) {
    this.parentElem = parentElem;
    this.gameRating = document.createElement('div');
    this.isData = true;
    this.data = State.getRating();

    this.render();
  }

  render = () => {
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
      <h2 class="rating__title">Rating</h2>
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
    </div>`;
    }

    this.gameRating.className = 'game__rating';
    this.gameRating.innerHTML = view;
    this.parentElem.appendChild(this.gameRating);
  };
}

export default Rating;
