var v=Object.defineProperty;var y=(r,e,s)=>e in r?v(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s;var i=(r,e,s)=>(y(r,typeof e!="symbol"?e+"":e,s),s);import{v as b}from"./vendor.e5975509.js";const w=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&a(h)}).observe(document,{childList:!0,subtree:!0});function s(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=s(t);fetch(t.href,o)}};w();class S{constructor(e){i(this,"parentElement");i(this,"game");i(this,"gameBody");i(this,"gameHeader");i(this,"addGame",()=>{this.game.className="game",this.game.append(this.gameHeader,this.gameBody)});i(this,"addHeader",()=>{const e=`
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
    `;this.gameHeader.className="game__header",this.gameHeader.innerHTML=e});i(this,"addGameBody",()=>{const e=new Array(25).fill("0").map(()=>'<div class="cell"></div>').join("");this.gameBody.className="game__body",this.gameBody.innerHTML=e});this.parentElement=e,this.game=document.createElement("div"),this.gameHeader=document.createElement("div"),this.gameBody=document.createElement("div"),this.addHeader(),this.addGameBody(),this.addGame(),this.parentElement.append(this.game)}}class E{constructor(e){i(this,"move");i(this,"handler",e=>{let s="moveLeft";switch(e.code){case"ArrowLeft":s="moveLeft";break;case"ArrowRight":s="moveRight";break;case"ArrowUp":s="moveUp";break;case"ArrowDown":s="moveDown";break}this.move(s)});i(this,"addListeners",()=>{document.addEventListener("keydown",this.handler)});this.addListeners(),this.move=e}}const m=class{constructor(e,s,a){i(this,"elem");i(this,"minDistance");i(this,"maxTime");i(this,"startTime",0);i(this,"didDown",!1);i(this,"startPos",{x:0,y:0});i(this,"endPos",{x:0,y:0});i(this,"move");i(this,"down",e=>{e.preventDefault(),this.startTime=Date.now(),this.startPos=this.endPos=m.position(e)});i(this,"up",e=>{e.preventDefault();const s=Date.now()-this.startTime;if(this.endPos=m.position(e),s<=this.maxTime){const a=m.getOffsets(this.endPos,this.startPos);if(m.getDistance(a)>this.minDistance){const o=m.getDirections(a);this.move(o)}}this.startPos={x:0,y:0},this.endPos={x:0,y:0}});i(this,"addListeners",()=>{this.elem.addEventListener("touchstart",this.down),document.addEventListener("touchend",this.up),this.elem.addEventListener("mousedown",this.down),document.addEventListener("mouseup",this.up)});this.elem=e,this.minDistance=(a==null?void 0:a.minDistance)||100,this.maxTime=(a==null?void 0:a.maxTime)||500,this.move=s,this.addListeners()}};let u=m;i(u,"position",e=>"touches"in e?{x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY}:{x:e.clientX,y:e.clientY}),i(u,"getOffsets",(e,s)=>({x:e.x-s.x,y:e.y-s.y})),i(u,"getDistance",e=>Math.sqrt(Math.pow(e.x,2)+Math.pow(e.y,2))),i(u,"getDirections",({x:e,y:s})=>Math.abs(e)>Math.abs(s)?e>0?"moveRight":"moveLeft":s<0?"moveUp":"moveDown");const g=class{};let n=g;i(n,"isGameStop",!1),i(n,"idGame",null),i(n,"gameMoves",[]),i(n,"gameStartTime",Date.now()),i(n,"ratingStandard",[{name:"test_4",isWin:!1,steps:20,score:20,time:10},{name:"test_3",isWin:!0,steps:30,score:20,time:20},{name:"test_2",isWin:!1,steps:20,score:20,time:30},{name:"test_1",isWin:!0,steps:30,score:20,time:40}]),i(n,"ratingEndless",[{name:"test_4",isWin:!1,steps:20,score:20,time:10},{name:"test_3",isWin:!0,steps:30,score:20,time:20},{name:"test_2",isWin:!1,steps:20,score:20,time:30},{name:"test_1",isWin:!0,steps:30,score:20,time:40}]),i(n,"gameStarts",()=>{g.idGame=b(),g.gameStartTime=Date.now()}),i(n,"getGameTime",()=>Math.ceil((Date.now()-g.gameStartTime)/1e3));class d{}i(d,"sound",!0),i(d,"difficulty",1),i(d,"gameVariant","2048");const f=class{};let c=f;i(c,"checkToLeft",e=>{for(let s=0;s<=4;s++)for(let a=0;a<=4;a++)if(e[s][a]&&(e[s][a]===e[s][a-1]||e[s][a-1]===0))return!0;return!1}),i(c,"checkToRight",e=>{for(let s=0;s<=4;s++)for(let a=4;a>=0;a--)if(e[s][a]&&(e[s][a]===e[s][a+1]||e[s][a+1]===0))return!0;return!1}),i(c,"checkToUp",e=>{for(let s=0;s<=4;s++)for(let a=1;a<=4;a++)if(e[a][s]&&(e[a-1][s]===0||e[a][s]===e[a-1][s]))return!0;return!1}),i(c,"checkToDown",e=>{for(let s=0;s<=4;s++)for(let a=3;a>=0;a--)if(e[a][s]&&(e[a][s]===e[a+1][s]||e[a+1][s]===0))return!0;return!1}),i(c,"checkAll",e=>[f.checkToLeft(e),f.checkToRight(e),f.checkToUp(e),f.checkToDown(e)]);const p=class{static playSound(e){d.sound&&new Audio(`../../src/assets/audio/${e}.mp3`).play()}};let l=p;i(l,"randomNum",e=>Math.floor(Math.random()*e)),i(l,"randomValue",()=>Math.floor(Math.random()*101)>=90?4:2),i(l,"randomCoordinates",(e,s)=>{const a=e[s],t=Math.floor(Math.abs(a/5));return[a-t*5,t]}),i(l,"identifyBlankCells",e=>e.flat().reduce((s,a,t)=>(a===0&&s.push(t),s),[])),i(l,"dataForRandomCell",e=>{const s=p.randomNum(e.length),[a,t]=p.randomCoordinates(e,s);return{randomValue:p.randomValue(),x:a,y:t}}),i(l,"calculateFontSize",(e,s)=>{const a=s.toString().length;return a===1?e:e-a*5}),i(l,"removeAllElements",(e,s)=>{e.querySelectorAll(`.${s}`).forEach(a=>a.remove())});class T{constructor(e,s,a,t){i(this,"result");i(this,"scoreForWin");i(this,"moves");i(this,"field");i(this,"elemShowingScore");i(this,"elemShowingMoves");i(this,"gameBody");i(this,"baseFontSize");i(this,"isAllowedToLeft");i(this,"isAllowedToRight");i(this,"isAllowedToUp");i(this,"isAllowedToDown");i(this,"isWin");i(this,"renderResult");i(this,"step",e=>{n.isGameStop||this[e]()});i(this,"end",()=>{this.getCells(),l.playSound("step")});i(this,"changeElem",(e,s,a,t,o)=>{const h=document.querySelector(`.game-cell[data-coordinates="${e},${s}"]`);if(h){const _=l.calculateFontSize(this.baseFontSize,a);h.style.cssText=`top: ${t*20}%; 
      left: ${o*20}%; 
      font-size: ${_}px`,h.dataset.coordinates=`${t},${o}`,h.textContent=""+a,h.className=`game-cell game-cell_color-color_${a}`,this.checkToWin(a)}});i(this,"removeElem",(e,s)=>{const a=document.querySelector(`.game-cell[data-coordinates="${e},${s}"]`);a&&a.remove()});i(this,"updateScore",e=>{this.result+=e,this.elemShowingScore.textContent=this.result.toString()});i(this,"updateMoves",()=>{this.moves++,this.elemShowingMoves.textContent=this.moves.toString()});i(this,"createRandomCell",(e,s,a)=>{const t=document.createElement("div");t.classList.add("game-cell",`game-cell_color-color_${e}`,"game-cell_animate-add"),t.textContent=e.toString(),t.dataset.coordinates=`${a},${s}`,t.style.cssText=`left: ${s*20}%; top: ${a*20}%;`,this.field[a][s]=e,this.gameBody.append(t)});i(this,"checkToLose",()=>{[this.isAllowedToLeft,this.isAllowedToRight,this.isAllowedToUp,this.isAllowedToDown]=c.checkAll(this.field),!this.isAllowedToLeft&&!this.isAllowedToRight&&!this.isAllowedToUp&&!this.isAllowedToDown&&(l.playSound("lose"),this.renderResult({isWin:!1,score:this.result,steps:this.moves}))});i(this,"checkToWin",e=>{e>=this.scoreForWin&&(l.playSound("win"),this.isWin=!0,this.renderResult({isWin:!0,score:this.result,steps:this.moves}))});i(this,"getCells",()=>{new Array(d.difficulty).fill(this.tact).forEach(e=>{e()})});i(this,"tact",()=>{const e=l.identifyBlankCells(this.field);if(e.length){const{randomValue:s,x:a,y:t}=l.dataForRandomCell(e);this.createRandomCell(s,a,t)}this.checkToLose()});i(this,"saveStep",()=>{const e=JSON.parse(JSON.stringify(this.field));n.gameMoves.push({result:this.result,moves:this.moves,field:e})});i(this,"stepBack",()=>{if(n.gameMoves.length){const e=n.gameMoves.pop();if(e){l.removeAllElements(this.gameBody,"game-cell"),this.result=e.result,this.moves=e.moves,this.field=e.field,this.elemShowingScore.textContent=this.result.toString(),this.elemShowingMoves.textContent=this.moves.toString();for(let s=0;s<=4;s++)for(let a=0;a<=4;a++)this.field[s][a]&&this.createRandomCell(this.field[s][a],a,s)}}});n.gameMoves=[],this.result=0,this.scoreForWin=d.gameVariant==="2048"?2048:1/0,this.moves=0,this.field=[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0]],this.elemShowingScore=e,this.elemShowingScore.textContent="0",this.elemShowingMoves=s,this.elemShowingMoves.textContent="0",this.gameBody=a,this.renderResult=t,this.baseFontSize=parseInt(getComputedStyle(document.documentElement).getPropertyValue("--font-size-cell")),this.isAllowedToLeft=!0,this.isAllowedToRight=!0,this.isAllowedToUp=!0,this.isAllowedToDown=!0,this.isWin=!1,this.getCells()}moveLeft(){if(!(!this.isAllowedToLeft||this.isWin)){this.saveStep(),this.updateMoves();for(let e=0;e<=4;e++){let s=0;for(let a=0;a<=4;a++)if(this.field[e][a])for(let t=a;t>s;t--)this.field[e][t]!=this.field[e][t-1]&&this.field[e][t-1]!=0?s++:this.field[e][t]===this.field[e][t-1]?(this.field[e][t-1]=this.field[e][t]+this.field[e][t-1],this.field[e][t]=0,s++,this.removeElem(e,t-1),this.updateScore(this.field[e][t-1]),this.changeElem(e,t,this.field[e][t-1],e,t-1)):this.field[e][t-1]===0&&(this.field[e][t-1]=this.field[e][t],this.field[e][t]=0,this.changeElem(e,t,this.field[e][t-1],e,t-1))}this.end()}}moveRight(){if(!(!this.isAllowedToRight||this.isWin)){this.saveStep(),this.updateMoves();for(let e=0;e<=4;e++){let s=3;for(let a=4;a>=0;a--)if(this.field[e][a])for(let t=a;t<=s;t++)this.field[e][t]!==this.field[e][t+1]&&this.field[e][t+1]!==0?s--:this.field[e][t]===this.field[e][t+1]?(this.field[e][t+1]=this.field[e][t]+this.field[e][t+1],this.field[e][t]=0,s--,this.removeElem(e,t+1),this.updateScore(this.field[e][t+1]),this.changeElem(e,t,this.field[e][t+1],e,t+1)):this.field[e][t+1]===0&&(this.field[e][t+1]=this.field[e][t],this.field[e][t]=0,this.changeElem(e,t,this.field[e][t+1],e,t+1))}this.end()}}moveUp(){if(!(!this.isAllowedToUp||this.isWin)){this.saveStep(),this.updateMoves();for(let e=0;e<=4;e++){let s=0;for(let a=0;a<=4;a++)if(this.field[a][e])for(let t=a;t>s;t--)this.field[t][e]!=this.field[t-1][e]&&this.field[t-1][e]!=0?s++:this.field[t][e]===this.field[t-1][e]?(this.field[t-1][e]=this.field[t][e]+this.field[t-1][e],this.field[t][e]=0,s++,this.removeElem(t-1,e),this.updateScore(this.field[t-1][e]),this.changeElem(t,e,this.field[t-1][e],t-1,e)):this.field[t-1][e]===0&&(this.field[t-1][e]=this.field[t][e],this.field[t][e]=0,this.changeElem(t,e,this.field[t-1][e],t-1,e))}this.end()}}moveDown(){if(!(!this.isAllowedToDown||this.isWin)){this.saveStep(),this.updateMoves();for(let e=0;e<=4;e++){let s=4;for(let a=4;a>=0;a--)if(this.field[a][e])for(let t=a;t<s;t++)this.field[t][e]!=this.field[t+1][e]&&this.field[t+1][e]!=0?s--:this.field[t][e]===this.field[t+1][e]?(this.field[t+1][e]=this.field[t][e]+this.field[t+1][e],this.field[t][e]=0,s--,this.removeElem(t+1,e),this.updateScore(this.field[t+1][e]),this.changeElem(t,e,this.field[t+1][e],t+1,e)):this.field[t+1][e]===0&&(this.field[t+1][e]=this.field[t][e],this.field[t][e]=0,this.changeElem(t,e,this.field[t+1][e],t+1,e))}this.end()}}}class L{constructor(e){i(this,"parentElem");i(this,"gameResult");i(this,"inputName",null);i(this,"isWin",!0);i(this,"score",0);i(this,"steps",0);i(this,"time",0);i(this,"render",({isWin:e,score:s,steps:a})=>{n.isGameStop=!0,this.isWin=e,this.score=s,this.steps=a,this.time=n.getGameTime();const t=`
    <div class="result" >
    <div class="result__wrap">
      ${e?'<p class="result__text"><span>Victory</span></p>':'<p class="result__text"><span>Losing</span></p>'}  
      </div>
      <div class="result__wrap">
      ${e?'<img class="result__img" src="./src/assets/win.jpg" alt="win">':' <img class="result__img" src="./src/assets/lose.jpg" alt="lose">'}
      </div>
      <div class="result__wrap">
         <p class="result__text">Your result: <span>${a}steps</span>,
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
  `;this.gameResult.className="game__result",this.gameResult.innerHTML=t,this.parentElem.appendChild(this.gameResult),this.listener()});i(this,"listener",()=>{if(this.gameResult){const e=this.gameResult.querySelector(".result__btn_submit"),s=this.gameResult.querySelector(".result__btn_cancel");this.inputName=this.gameResult.querySelector(".result__input-name"),e&&s&&(e.addEventListener("click",this.submit),s.addEventListener("click",this.cancel))}});i(this,"cancel",()=>{this.inputName&&(n.isGameStop=!1,this.inputName.value="",this.gameResult.remove())});i(this,"submit",()=>{this.inputName&&this.inputName.value&&(d.gameVariant==="2048"?n.ratingStandard.push({name:this.inputName.value,isWin:this.isWin,steps:this.steps,score:this.score,time:this.time}):n.ratingEndless.push({name:this.inputName.value,isWin:this.isWin,steps:this.steps,score:this.score,time:this.time})),this.cancel()});this.parentElem=e,this.gameResult=document.createElement("div")}}class R{constructor(e,s="standard"){i(this,"parentElem");i(this,"gameRating");i(this,"isData");i(this,"data");i(this,"variant");i(this,"getStandardRating",()=>n.ratingStandard.sort((e,s)=>e.time-s.time));i(this,"getEndlessRating",()=>n.ratingEndless.sort((e,s)=>e.steps-s.steps));i(this,"render",()=>{let e=`
    <div class="rating">
      <div class="spinner-wrap">
        <img src="./../src/assets/spinner.svg" alt="spinner">
        <p>Loading...</p>
      </div>
    </div>
   `;if(this.isData){const s=this.data.map(({name:a,isWin:t,steps:o,score:h,time:_})=>`<tr>
            <td>${t?"win":"lose"}</td>
            <td>${a}</td>
            <td>${o}</td>
            <td>${h}</td>
            <td>${_}</td>
          </tr>`).join(" ");e=`<div class="rating">
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
    `}this.gameRating.className="game__rating game__rating_animate-add",this.gameRating.innerHTML=e,this.parentElem.appendChild(this.gameRating)});i(this,"listener",()=>{var e;this.gameRating&&((e=this.gameRating.querySelector(".rating__btn_rating_close"))==null||e.addEventListener("click",this.remove))});i(this,"remove",()=>{n.isGameStop=!1,this.gameRating.classList.remove("game__rating_animate-add"),this.gameRating.classList.add("game__rating_animate-remove"),setTimeout(()=>{this.gameRating.remove(),this.remove()},250)});this.parentElem=e,this.gameRating=document.createElement("div"),this.isData=!0,this.variant=s,this.data=this.variant==="standard"?this.getStandardRating():this.getEndlessRating(),n.isGameStop=!0,this.render(),this.listener()}}class k{constructor({parentElem:e,playGame:s}){i(this,"gameOptions");i(this,"parentElem");i(this,"playGame",null);i(this,"render",()=>{const{sound:e,gameVariant:s,difficulty:a}=d,t=`
    <div  class="options">
      <div class="options__wrap">
        <button class="btn options__btn options__btn_step_back">Step back</button>
      </div>
     
      <h2 class="options__title title">Options</h2>
      <div class="options__wrap">
        <button class="btn options__btn options__btn_sound">${e?"\u{1F50A}":"\u{1F508}"}</button>
        <button class="btn options__btn options__btn_duration">${s}</button>
      </div>
      
      <h2 class="options__title title">Game difficulty</h2>
      <div class="options__wrap">
          <label class="options__label-difficulty btn" for="easy">1
          <input class="options__input-difficulty" type="radio" name="difficulty" id="easy" value="1" 
          ${a===1&&"checked"}>
        </label>
        <label class="options__label-difficulty btn" for="medium">2
          <input class="options__input-difficulty" type="radio" name="difficulty" id="medium" value="2" 
          ${a===2&&"checked"}>
        </label>
        <label class="options__label-difficulty btn" for="hard">3
         <input class="options__input-difficulty" type="radio" name="difficulty" id="hard" value="3" 
         ${a===3&&"checked"}>
        </label>
      </div>
      
      <h2 class="options__title title">Ratings</h2>
      <div class="options__wrap">
        <button class="btn options__btn options__btn_rating_2048">2048</button>
        <button class="btn options__btn options__btn_rating_endless">Endless</button>
      </div>
    </div>
  `;this.gameOptions.className="game__options",this.gameOptions.innerHTML=t,this.parentElem.appendChild(this.gameOptions)});i(this,"listener",()=>{this.gameOptions.addEventListener("click",this.clickHandler),this.gameOptions.addEventListener("change",this.changeHandler)});i(this,"remove",()=>{this.gameOptions.classList.remove("game__options_animate-add"),this.gameOptions.classList.add("game__options_animate-remove"),setTimeout(()=>{this.gameOptions.remove(),this.remove()},250)});i(this,"clickHandler",e=>{const s=e.target;s&&(s.classList.contains("options__btn_sound")&&this.changeSound(s),s.classList.contains("options__btn_rating_2048")&&this.openStandardRating("standard"),s.classList.contains("options__btn_rating_endless")&&this.openStandardRating("endless"),s.classList.contains("options__btn_duration")&&this.changeTypeGame(s),s.classList.contains("options__btn_step_back")&&this.stepBack())});i(this,"changeSound",e=>{d.sound?(e.innerHTML="\u{1F508}",d.sound=!1):(e.innerHTML="\u{1F50A}",d.sound=!0)});i(this,"changeTypeGame",e=>{d.gameVariant==="2048"?(e.innerHTML="Endless",d.gameVariant="Endless"):(e.innerHTML="2048",d.gameVariant="2048")});i(this,"openStandardRating",e=>{this.gameOptions&&new R(this.gameOptions,e)});i(this,"changeHandler",e=>{const s=e.target;d.difficulty=+s.value});i(this,"stepBack",()=>{this.playGame&&this.playGame.stepBack()});this.parentElem=e,this.gameOptions=document.createElement("div"),this.playGame=s,this.render(),this.listener()}}class G{constructor(e){i(this,"parentElement");i(this,"game",null);i(this,"score",null);i(this,"moves",null);i(this,"btnNewGame",null);i(this,"btnOptions",null);i(this,"gameBody",null);i(this,"options",null);i(this,"playGame",null);i(this,"move",e=>{this.playGame&&this.playGame.step(e)});i(this,"activeParts",()=>{this.game=this.parentElement.querySelector(".game"),this.game&&(this.score=this.game.querySelector(".info-game__score"),this.moves=this.game.querySelector(".info-game__time"),this.btnNewGame=this.game.querySelector(".game__new-game-btn"),this.btnOptions=this.game.querySelector(".game__options-btn"),this.gameBody=this.game.querySelector(".game__body"))});i(this,"addListeners",()=>{this.btnNewGame&&this.btnNewGame.addEventListener("click",this.newGame),this.btnOptions&&this.btnOptions.addEventListener("click",this.openOptions)});i(this,"newGame",()=>{if(this.game&&this.score&&this.moves&&this.gameBody&&!n.isGameStop){this.playGame=null,n.gameStarts(),l.removeAllElements(this.gameBody,"game-cell");const e=new L(this.game).render;this.playGame=new T(this.score,this.moves,this.gameBody,e)}});i(this,"openOptions",()=>{this.game&&this.btnOptions&&(this.options?(this.options.remove(),this.options=null,this.btnOptions.innerHTML="\u2699\uFE0F",n.isGameStop=!1):(this.options=new k({parentElem:this.game,playGame:this.playGame}),n.isGameStop=!0,this.btnOptions.innerHTML="\u2716"))});this.parentElement=e,this.activeParts(),this.addListeners(),this.gameBody&&(new u(this.gameBody,this.move),new E(this.move))}}class A{constructor(){new S(document.body),new G(document.body)}}new A;
