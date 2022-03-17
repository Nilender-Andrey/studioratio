class Result {
  private parentElem: HTMLElement;
  private gameResult: HTMLElement;

  constructor(parentElem: HTMLElement) {
    this.parentElem = parentElem;

    this.gameResult = document.createElement('div');
  }

  render = (isWin = true, pointsScored = 80000) => {
    const view = `
    <form class="result-form">
    <div class="result-form__wrap">
      ${
        isWin
          ? '<p class="result-form__text"><span>Victory</span></p>'
          : '<p class="result-form__text"><span>Losing</span></p>'
      }  
      </div>
      <div class="result-form__wrap">
      ${
        isWin
          ? '<img class="result-form__img" src="./src/assets/win.jpg" alt="win">'
          : ' <img class="result-form__img" src="./src/assets/lose.jpg" alt="lose">'
      }
      </div>
      <div class="result-form__wrap">
         <p class="result-form__text">Your result: <span>${pointsScored}</span></p>
      </div>
      <div class="result-form__wrap input-wrap">
       <input class="result-form__input-name" type="text" placeholder="Enter your name" />
      </div>
      <div class="result-form__wrap btn-wrap">
        <button class="btn" type="submit">Ok</button>
        <button class="btn">Cancel</button>
      </div>
    </form>
  `;

    this.gameResult.className = 'game__result';
    this.gameResult.innerHTML = view;
    this.parentElem.appendChild(this.gameResult);
  };
}

export default Result;
