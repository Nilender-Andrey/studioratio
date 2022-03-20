import State from '../../state/State';
import { IRenderResult } from '../../types/type';

class Result {
  private parentElem: HTMLElement;
  private gameResult: HTMLElement;
  private inputName: HTMLInputElement | null = null;
  private isWin = true;
  private score = 0;
  private steps = 0;
  private time = 0;

  constructor(parentElem: HTMLElement) {
    this.parentElem = parentElem;
    this.gameResult = document.createElement('div');
  }

  render = ({ isWin, score, steps }: IRenderResult) => {
    State.isGameStop = true;
    this.isWin = isWin;
    this.score = score;
    this.steps = steps;
    this.time = State.getGameTime();

    const view = `
    <div name="result" class="result" >
    <div class="result__wrap">
      ${
        isWin
          ? '<p class="result__text"><span>Victory</span></p>'
          : '<p class="result__text"><span>Losing</span></p>'
      }  
      </div>
      <div class="result__wrap">
      ${
        isWin
          ? '<img class="result__img" src="./src/assets/win.jpg" alt="win">'
          : ' <img class="result__img" src="./src/assets/lose.jpg" alt="lose">'
      }
      </div>
      <div class="result__wrap">
         <p class="result__text">Your result: <span>${steps}steps</span>,
          ${this.time}sec</p>
      </div>
      <div class="result__wrap input-wrap">
       <input class="result__input-name" type="text" placeholder="Enter your name" autocomplete="off"/>
      </div>
      <div class="result__wrap btn-wrap">
        <button class="btn result__btn-submit" >Ok</button>
        <button class="btn result__btn-cancel">Cancel</button>
      </div>
    </div>
  `;

    this.gameResult.className = 'game__result';
    this.gameResult.innerHTML = view;
    this.parentElem.appendChild(this.gameResult);
    this.listener();
  };

  private listener = () => {
    if (this.gameResult) {
      const submit = this.gameResult.querySelector('.result__btn-submit');
      const cancel = this.gameResult.querySelector('.result__btn-cancel');
      this.inputName = this.gameResult.querySelector<HTMLInputElement>(
        '.result__input-name',
      );

      if (submit && cancel) {
        submit.addEventListener('click', this.submit);
        cancel.addEventListener('click', this.cancel);
      }
    }
  };

  private cancel = () => {
    if (this.inputName) {
      State.isGameStop = false;
      this.inputName.value = '';
      this.gameResult.remove();
    }
  };
  private submit = () => {
    if (this.inputName && this.inputName.value) {
      State.rating.push({
        name: this.inputName.value,
        isWin: this.isWin,
        steps: this.steps,
        score: this.score,
        time: this.time,
      });
    }

    this.cancel();
  };
}

export default Result;
