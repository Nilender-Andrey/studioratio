var v=Object.defineProperty;var b=(r,t,s)=>t in r?v(r,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[t]=s;var i=(r,t,s)=>(b(r,typeof t!="symbol"?t+"":t,s),s);import{v as y}from"./vendor.e5975509.js";const w=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&n(h)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};w();class T{constructor(t){i(this,"parentElement");i(this,"game");i(this,"gameBody");i(this,"gameHeader");i(this,"addGame",()=>{this.game.className="game",this.game.append(this.gameHeader,this.gameBody)});i(this,"addHeader",()=>{const t=`
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
        <button class="game__new-game-btn btn">New Game</button>
        <button class="game__options-btn btn">\u2699\uFE0F</button>
      </div>
    `;this.gameHeader.className="game__header",this.gameHeader.innerHTML=t});i(this,"addGameBody",()=>{const t=new Array(25).fill("0").map(()=>'<div class="cell"></div>').join("");this.gameBody.className="game__body",this.gameBody.innerHTML=t});this.parentElement=t,this.game=document.createElement("div"),this.gameHeader=document.createElement("div"),this.gameBody=document.createElement("div"),this.addHeader(),this.addGameBody(),this.addGame(),this.parentElement.append(this.game)}}class E{constructor(t){i(this,"move");i(this,"handler",t=>{let s="moveLeft";switch(t.code){case"ArrowLeft":s="moveLeft";break;case"ArrowRight":s="moveRight";break;case"ArrowUp":s="moveUp";break;case"ArrowDown":s="moveDown";break}this.move(s)});i(this,"addListeners",()=>{document.addEventListener("keydown",this.handler)});this.addListeners(),this.move=t}}const m=class{constructor(t,s,n){i(this,"elem");i(this,"minDistance");i(this,"maxTime");i(this,"startTime",0);i(this,"didDown",!1);i(this,"startPos",{x:0,y:0});i(this,"endPos",{x:0,y:0});i(this,"move");i(this,"down",t=>{t.preventDefault(),this.startTime=Date.now(),this.startPos=this.endPos=m.position(t)});i(this,"up",t=>{t.preventDefault();const s=Date.now()-this.startTime;if(this.endPos=m.position(t),s<=this.maxTime){const n=m.getOffsets(this.endPos,this.startPos);if(m.getDistance(n)>this.minDistance){const o=m.getDirections(n);this.move(o)}}this.startPos={x:0,y:0},this.endPos={x:0,y:0}});i(this,"addListeners",()=>{this.elem.addEventListener("touchstart",this.down),document.addEventListener("touchend",this.up),this.elem.addEventListener("mousedown",this.down),document.addEventListener("mouseup",this.up)});this.elem=t,this.minDistance=(n==null?void 0:n.minDistance)||100,this.maxTime=(n==null?void 0:n.maxTime)||500,this.move=s,this.addListeners()}};let u=m;i(u,"position",t=>"touches"in t?{x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}:{x:t.clientX,y:t.clientY}),i(u,"getOffsets",(t,s)=>({x:t.x-s.x,y:t.y-s.y})),i(u,"getDistance",t=>Math.sqrt(Math.pow(t.x,2)+Math.pow(t.y,2))),i(u,"getDirections",({x:t,y:s})=>Math.abs(t)>Math.abs(s)?t>0?"moveRight":"moveLeft":s<0?"moveUp":"moveDown");const g=class{};let a=g;i(a,"isGameStop",!1),i(a,"idGame",null),i(a,"gameStartTime",Date.now()),i(a,"ratingStandard",[{name:"test_4",isWin:!1,steps:20,score:20,time:10},{name:"test_3",isWin:!0,steps:30,score:20,time:20},{name:"test_2",isWin:!1,steps:20,score:20,time:30},{name:"test_1",isWin:!0,steps:30,score:20,time:40}]),i(a,"ratingEndless",[{name:"test_4",isWin:!1,steps:20,score:20,time:10},{name:"test_3",isWin:!0,steps:30,score:20,time:20},{name:"test_2",isWin:!1,steps:20,score:20,time:30},{name:"test_1",isWin:!0,steps:30,score:20,time:40}]),i(a,"gameStarts",()=>{g.idGame=y(),g.gameStartTime=Date.now()}),i(a,"getGameTime",()=>Math.ceil((Date.now()-g.gameStartTime)/1e3));class l{}i(l,"sound",!0),i(l,"difficulty",1),i(l,"gameVariant","2048");const f=class{};let c=f;i(c,"checkToLeft",t=>{for(let s=0;s<=4;s++)for(let n=0;n<=4;n++)if(t[s][n]&&(t[s][n]===t[s][n-1]||t[s][n-1]===0))return!0;return!1}),i(c,"checkToRight",t=>{for(let s=0;s<=4;s++)for(let n=4;n>=0;n--)if(t[s][n]&&(t[s][n]===t[s][n+1]||t[s][n+1]===0))return!0;return!1}),i(c,"checkToUp",t=>{for(let s=0;s<=4;s++)for(let n=1;n<=4;n++)if(t[n][s]&&(t[n-1][s]===0||t[n][s]===t[n-1][s]))return!0;return!1}),i(c,"checkToDown",t=>{for(let s=0;s<=4;s++)for(let n=3;n>=0;n--)if(t[n][s]&&(console.log(t[n+1][s]),t[n][s]===t[n+1][s]||t[n+1][s]===0))return!0;return!1}),i(c,"checkAll",t=>[f.checkToLeft(t),f.checkToRight(t),f.checkToUp(t),f.checkToDown(t)]);const p=class{static playSound(t){l.sound&&new Audio(`./../src/assets/audio/${t}.mp3`).play()}};let d=p;i(d,"randomNum",t=>Math.floor(Math.random()*t)),i(d,"randomValue",()=>Math.floor(Math.random()*101)>=90?4:2),i(d,"randomCoordinates",(t,s)=>{const n=t[s],e=Math.floor(Math.abs(n/5));return[n-e*5,e]}),i(d,"identifyBlankCells",t=>t.flat().reduce((s,n,e)=>(n===0&&s.push(e),s),[])),i(d,"dataForRandomCell",t=>{const s=p.randomNum(t.length),[n,e]=p.randomCoordinates(t,s);return{randomValue:p.randomValue(),x:n,y:e}}),i(d,"calculateFontSize",(t,s)=>{const n=s.toString().length;return n===1?t:t-n*5});class L{constructor(t,s,n,e){i(this,"result");i(this,"scoreForWin");i(this,"moves");i(this,"field");i(this,"elemShowingScore");i(this,"elemShowingMoves");i(this,"gameBody");i(this,"baseFontSize");i(this,"isAllowedToLeft");i(this,"isAllowedToRight");i(this,"isAllowedToUp");i(this,"isAllowedToDown");i(this,"isWin");i(this,"renderResult");i(this,"step",t=>{a.isGameStop||this[t]()});i(this,"end",()=>{this.getCells(),d.playSound("step")});i(this,"changeElem",(t,s,n,e,o)=>{const h=document.querySelector(`.game-cell[data-coordinates="${t},${s}"]`);if(h){const _=d.calculateFontSize(this.baseFontSize,n);h.style.cssText=`top: ${e*20}%; 
      left: ${o*20}%; 
      font-size: ${_}px`,h.dataset.coordinates=`${e},${o}`,h.textContent=""+n,h.className=`game-cell game-cell_color-color_${n}`,this.checkToWin(n)}});i(this,"removeElem",(t,s)=>{const n=document.querySelector(`.game-cell[data-coordinates="${t},${s}"]`);n&&n.remove()});i(this,"updateScore",t=>{this.result+=t,this.elemShowingScore.textContent=this.result.toString()});i(this,"updateMoves",()=>{this.moves++,console.log(this.moves),this.elemShowingMoves.textContent=this.moves.toString()});i(this,"createRandomCell",(t,s,n)=>{const e=document.createElement("div");e.classList.add("game-cell",`game-cell_color-color_${t}`,"game-cell_animate-add"),e.textContent=t.toString(),e.dataset.coordinates=`${n},${s}`,e.style.cssText=`left: ${s*20}%; top: ${n*20}%;`,this.field[n][s]=t,this.gameBody.append(e)});i(this,"checkToLose",()=>{[this.isAllowedToLeft,this.isAllowedToRight,this.isAllowedToUp,this.isAllowedToDown]=c.checkAll(this.field),!this.isAllowedToLeft&&!this.isAllowedToRight&&!this.isAllowedToUp&&!this.isAllowedToDown&&(d.playSound("lose"),this.renderResult({isWin:!1,score:this.result,steps:this.moves}))});i(this,"checkToWin",t=>{t>=this.scoreForWin&&(d.playSound("win"),this.isWin=!0,this.renderResult({isWin:!0,score:this.result,steps:this.moves}))});i(this,"getCells",()=>{new Array(l.difficulty).fill(this.tact).forEach(t=>{t()})});i(this,"tact",()=>{const t=d.identifyBlankCells(this.field);if(t.length){const{randomValue:s,x:n,y:e}=d.dataForRandomCell(t);this.createRandomCell(s,n,e)}this.checkToLose()});this.result=0,this.scoreForWin=l.gameVariant==="2048"?2048:1/0,this.moves=0,this.field=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],this.elemShowingScore=t,this.elemShowingScore.textContent="0",this.elemShowingMoves=s,this.elemShowingMoves.textContent="0",this.gameBody=n,this.renderResult=e,this.baseFontSize=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--font-size-cell")),this.isAllowedToLeft=!0,this.isAllowedToRight=!0,this.isAllowedToUp=!0,this.isAllowedToDown=!0,this.isWin=!1,this.getCells()}moveLeft(){if(!(!this.isAllowedToLeft||this.isWin)){this.updateMoves();for(let t=0;t<=4;t++){let s=0;for(let n=0;n<=4;n++)if(this.field[t][n])for(let e=n;e>s;e--)this.field[t][e]!=this.field[t][e-1]&&this.field[t][e-1]!=0?s++:this.field[t][e]===this.field[t][e-1]?(this.field[t][e-1]=this.field[t][e]+this.field[t][e-1],this.field[t][e]=0,s++,this.removeElem(t,e-1),this.updateScore(this.field[t][e-1]),this.changeElem(t,e,this.field[t][e-1],t,e-1)):this.field[t][e-1]===0&&(this.field[t][e-1]=this.field[t][e],this.field[t][e]=0,this.changeElem(t,e,this.field[t][e-1],t,e-1))}this.end()}}moveRight(){if(!(!this.isAllowedToRight||this.isWin)){this.updateMoves();for(let t=0;t<=4;t++){let s=3;for(let n=4;n>=0;n--)if(this.field[t][n])for(let e=n;e<=s;e++)this.field[t][e]!==this.field[t][e+1]&&this.field[t][e+1]!==0?s--:this.field[t][e]===this.field[t][e+1]?(this.field[t][e+1]=this.field[t][e]+this.field[t][e+1],this.field[t][e]=0,s--,this.removeElem(t,e+1),this.updateScore(this.field[t][e+1]),this.changeElem(t,e,this.field[t][e+1],t,e+1)):this.field[t][e+1]===0&&(this.field[t][e+1]=this.field[t][e],this.field[t][e]=0,this.changeElem(t,e,this.field[t][e+1],t,e+1))}this.end()}}moveUp(){if(!(!this.isAllowedToUp||this.isWin)){this.updateMoves();for(let t=0;t<=4;t++){let s=0;for(let n=0;n<=4;n++)if(this.field[n][t])for(let e=n;e>s;e--)this.field[e][t]!=this.field[e-1][t]&&this.field[e-1][t]!=0?s++:this.field[e][t]===this.field[e-1][t]?(this.field[e-1][t]=this.field[e][t]+this.field[e-1][t],this.field[e][t]=0,s++,this.removeElem(e-1,t),this.updateScore(this.field[e-1][t]),this.changeElem(e,t,this.field[e-1][t],e-1,t)):this.field[e-1][t]===0&&(this.field[e-1][t]=this.field[e][t],this.field[e][t]=0,this.changeElem(e,t,this.field[e-1][t],e-1,t))}this.end()}}moveDown(){if(!(!this.isAllowedToDown||this.isWin)){this.updateMoves();for(let t=0;t<=4;t++){let s=4;for(let n=4;n>=0;n--)if(this.field[n][t])for(let e=n;e<s;e++)this.field[e][t]!=this.field[e+1][t]&&this.field[e+1][t]!=0?s--:this.field[e][t]===this.field[e+1][t]?(this.field[e+1][t]=this.field[e][t]+this.field[e+1][t],this.field[e][t]=0,s--,this.removeElem(e+1,t),this.updateScore(this.field[e+1][t]),this.changeElem(e,t,this.field[e+1][t],e+1,t)):this.field[e+1][t]===0&&(this.field[e+1][t]=this.field[e][t],this.field[e][t]=0,this.changeElem(e,t,this.field[e+1][t],e+1,t))}this.end()}}}class S{constructor(t){i(this,"parentElem");i(this,"gameResult");i(this,"inputName",null);i(this,"isWin",!0);i(this,"score",0);i(this,"steps",0);i(this,"time",0);i(this,"render",({isWin:t,score:s,steps:n})=>{a.isGameStop=!0,this.isWin=t,this.score=s,this.steps=n,this.time=a.getGameTime();const e=`
    <div class="result" >
    <div class="result__wrap">
      ${t?'<p class="result__text"><span>Victory</span></p>':'<p class="result__text"><span>Losing</span></p>'}  
      </div>
      <div class="result__wrap">
      ${t?'<img class="result__img" src="./src/assets/win.jpg" alt="win">':' <img class="result__img" src="./src/assets/lose.jpg" alt="lose">'}
      </div>
      <div class="result__wrap">
         <p class="result__text">Your result: <span>${n}steps</span>,
          ${this.time}sec</p>
      </div>
      <div class="result__wrap input-wrap">
       <input class="result__input-name" type="text" placeholder="Enter your name" autocomplete="off"/>
      </div>
      <div class="result__wrap btn-wrap">
        <button class="btn result__btn_submit" >Ok</button>
        <button class="btn result__btn_cancel">Cancel</button>
      </div>
    </div>
  `;this.gameResult.className="game__result",this.gameResult.innerHTML=e,this.parentElem.appendChild(this.gameResult),this.listener()});i(this,"listener",()=>{if(this.gameResult){const t=this.gameResult.querySelector(".result__btn_submit"),s=this.gameResult.querySelector(".result__btn_cancel");this.inputName=this.gameResult.querySelector(".result__input-name"),t&&s&&(t.addEventListener("click",this.submit),s.addEventListener("click",this.cancel))}});i(this,"cancel",()=>{this.inputName&&(a.isGameStop=!1,this.inputName.value="",this.gameResult.remove())});i(this,"submit",()=>{this.inputName&&this.inputName.value&&(l.gameVariant==="2048"?a.ratingStandard.push({name:this.inputName.value,isWin:this.isWin,steps:this.steps,score:this.score,time:this.time}):a.ratingEndless.push({name:this.inputName.value,isWin:this.isWin,steps:this.steps,score:this.score,time:this.time})),this.cancel()});this.parentElem=t,this.gameResult=document.createElement("div")}}class R{constructor(t,s="standard"){i(this,"parentElem");i(this,"gameRating");i(this,"isData");i(this,"data");i(this,"variant");i(this,"getStandardRating",()=>a.ratingStandard.sort((t,s)=>t.time-s.time));i(this,"getEndlessRating",()=>a.ratingEndless.sort((t,s)=>t.steps-s.steps));i(this,"render",()=>{let t=`
    <div class="rating">
      <div class="spinner-wrap">
        <img src="./../src/assets/spinner.svg" alt="spinner">
        <p>Loading...</p>
      </div>
    </div>
   `;if(this.isData){const s=this.data.map(({name:n,isWin:e,steps:o,score:h,time:_})=>`<tr>
            <td>${e?"win":"lose"}</td>
            <td>${n}</td>
            <td>${o}</td>
            <td>${h}</td>
            <td>${_}</td>
          </tr>`).join(" ");t=`<div class="rating">
      <h2 class="rating__title title">Rating ${this.variant==="standard"?"2048":"Endless"}</h2>
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
          ${s}
        </tbody>
      </table>
    </div>
    <button class="btn rating__btn_rating_close">X</button>
    `}this.gameRating.className="game__rating game__rating_animate-add",this.gameRating.innerHTML=t,this.parentElem.appendChild(this.gameRating)});i(this,"listener",()=>{var t;this.gameRating&&((t=this.gameRating.querySelector(".rating__btn_rating_close"))==null||t.addEventListener("click",this.remove))});i(this,"remove",()=>{a.isGameStop=!1,this.gameRating.classList.remove("game__rating_animate-add"),this.gameRating.classList.add("game__rating_animate-remove"),setTimeout(()=>{this.gameRating.remove(),this.remove()},250)});this.parentElem=t,this.gameRating=document.createElement("div"),this.isData=!0,this.variant=s,this.data=this.variant==="standard"?this.getStandardRating():this.getEndlessRating(),a.isGameStop=!0,this.render(),this.listener()}}class k{constructor(t){i(this,"gameOptions");i(this,"parentElem");i(this,"render",()=>{const{sound:t,gameVariant:s,difficulty:n}=l,e=`
    <div  class="options">
      <div class="options__wrap">
        <button class="btn options__btn options__btn_step">Step back</button>
      </div>
     
      <h2 class="options__title title">Options</h2>
      <div class="options__wrap">
        <button class="btn options__btn options__btn_sound">${t?"\u{1F50A}":"\u{1F508}"}</button>
        <button class="btn options__btn options__btn_duration">${s}</button>
      </div>
      
      <h2 class="options__title title">Game difficulty</h2>
      <div class="options__wrap">
          <label class="options__label-difficulty btn" for="easy">1
          <input class="options__input-difficulty" type="radio" name="difficulty" id="easy" value="1" 
          ${n===1&&"checked"}>
        </label>
        <label class="options__label-difficulty btn" for="medium">2
          <input class="options__input-difficulty" type="radio" name="difficulty" id="medium" value="2" 
          ${n===2&&"checked"}>
        </label>
        <label class="options__label-difficulty btn" for="hard">3
         <input class="options__input-difficulty" type="radio" name="difficulty" id="hard" value="3" 
         ${n===3&&"checked"}>
        </label>
      </div>
      
      <h2 class="options__title title">Ratings</h2>
      <div class="options__wrap">
        <button class="btn options__btn options__btn_rating_2048">2048</button>
        <button class="btn options__btn options__btn_rating_endless">Endless</button>
      </div>
    </div>
  `;this.gameOptions.className="game__options",this.gameOptions.innerHTML=e,this.parentElem.appendChild(this.gameOptions)});i(this,"listener",()=>{this.gameOptions.addEventListener("click",this.clickHandler),this.gameOptions.addEventListener("change",this.changeHandler)});i(this,"remove",()=>{a.isGameStop=!1,this.gameOptions.classList.remove("game__options_animate-add"),this.gameOptions.classList.add("game__options_animate-remove"),setTimeout(()=>{this.gameOptions.remove(),this.remove()},250)});i(this,"clickHandler",t=>{const s=t.target;s&&(s.classList.contains("options__btn_sound")&&this.changeSound(s),s.classList.contains("options__btn_rating_2048")&&this.openStandardRating("standard"),s.classList.contains("options__btn_rating_endless")&&this.openStandardRating("endless"),s.classList.contains("options__btn_duration")&&this.changeTypeGame(s))});i(this,"changeSound",t=>{l.sound?(t.innerHTML="\u{1F508}",l.sound=!1):(t.innerHTML="\u{1F50A}",l.sound=!0)});i(this,"changeTypeGame",t=>{l.gameVariant==="2048"?(t.innerHTML="Endless",l.gameVariant="Endless"):(t.innerHTML="2048",l.gameVariant="2048"),console.log(l.gameVariant)});i(this,"openStandardRating",t=>{this.gameOptions&&new R(this.gameOptions,t)});i(this,"changeHandler",t=>{const s=t.target;l.difficulty=+s.value});this.parentElem=t,this.gameOptions=document.createElement("div"),this.render(),this.listener()}}class A{constructor(t){i(this,"parentElement");i(this,"game",null);i(this,"score",null);i(this,"moves",null);i(this,"btnNewGame",null);i(this,"btnOptions",null);i(this,"gameBody",null);i(this,"options",null);i(this,"playGame",null);i(this,"move",t=>{this.playGame&&this.playGame.step(t)});i(this,"activeParts",()=>{this.game=this.parentElement.querySelector(".game"),this.game&&(this.score=this.game.querySelector(".info-game__score"),this.moves=this.game.querySelector(".info-game__time"),this.btnNewGame=this.game.querySelector(".game__new-game-btn"),this.btnOptions=this.game.querySelector(".game__options-btn"),this.gameBody=this.game.querySelector(".game__body"))});i(this,"addListeners",()=>{this.btnNewGame&&this.btnNewGame.addEventListener("click",this.newGame),this.btnOptions&&this.btnOptions.addEventListener("click",this.openOptions)});i(this,"newGame",()=>{if(this.game&&this.score&&this.moves&&this.gameBody&&!a.isGameStop){this.playGame=null,a.gameStarts(),this.gameBody.querySelectorAll(".game-cell").forEach(s=>s.remove());const t=new S(this.game).render;this.playGame=new L(this.score,this.moves,this.gameBody,t)}});i(this,"openOptions",()=>{this.game&&this.btnOptions&&(this.options?(this.options.remove(),this.options=null,this.btnOptions.innerHTML="\u2699\uFE0F"):(this.options=new k(this.game),this.btnOptions.innerHTML="\u2716"))});this.parentElement=t,this.activeParts(),this.addListeners(),this.gameBody&&(new u(this.gameBody,this.move),new E(this.move))}}class D{constructor(){new T(document.body),new A(document.body)}}new D;
