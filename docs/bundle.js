(()=>{"use strict";var t={d:(a,e)=>{for(var c in e)t.o(e,c)&&!t.o(a,c)&&Object.defineProperty(a,c,{enumerable:!0,get:e[c]})},o:(t,a)=>Object.prototype.hasOwnProperty.call(t,a)};t.d({},{Op:()=>l,Vv:()=>v,_X:()=>u});var a,e=function(){var t=document.getElementById("module");t.style.display="flex",t.innerHTML='\n      <dialog>\n        <img class="info-img" src="./static/'.concat("won"===l.status?"celebration":"dead",'.svg" alt="" />\n        <p class="title result-title">').concat("won"===l.status?"Вы выиграли!":"Вы проиграли!",'</p>\n        <p class="result-title-time">Затраченное время:</p>\n        <div class="timer">\n          <div class="timer-count result-count">').concat(l.gameTime,'</div>\n        </div>\n        <div>\n          <button type="submit" class="result-go-button button" id="button-go">\n          Играть снова\n          </button>\n        </div>\n      </dialog>');var a=document.querySelector("dialog");a.showModal(),document.querySelector(".result-go-button").addEventListener("click",(function(){t.style.display="none",a.close(),u()}))},c=[],n=0,i=0,s=function(){console.log(l);var t='\n    <header class="header">\n        <div class="timer">\n            <div class="timer-text">\n                <div class="timer-min">min</div>\n                <div class="timer-sec">sek</div>\n            </div>\n            <div class="timer-count" >'.concat(l.gameTime,'</div>\n        </div>\n        <button id="new-game-button" class="header-button button">Начать заново</button>\n    </header>'),s=l.cardDeck.map((function(t,a){return console.log("current card is ",t),'<div class="card" id="card" data-index="'.concat(a,'" data-id="').concat(t.id,'" data-suit="').concat(t.suit,'" data-rank="').concat(t.rank,'">\n            ').concat(l.isActive?'<div class="card-front">\n                <div class="card-top">\n                    <div class="card-title">'.concat(t.rank,'</div>\n                    <img class="card-suites-small" src="./static/').concat(t.suit,'.svg" alt="" />\n                </div>\n                <div class="card-suites">\n                    <img src="./static/').concat(t.suit,'.svg" alt="" />\n                </div>\n                <div class="card-top card-top-flipped">\n                    <div class="card-title">').concat(t.rank,'</div>\n                        <img class="card-suites-small" src="./static/').concat(t.suit,'.svg" alt="" />\n                </div>\n            </div>'):'\n                    <img src="./static/card-back.svg" alt="карта" class="card-back"/>',"\n              </div>")})).join(""),d=document.getElementById("app");d&&(d.innerHTML="\n      ".concat(t,'\n      <section class="game-field">\n      ').concat(s,"\n      </section>")),l.isActive||(a=setInterval((function(){i++;var t=Math.floor(i/60).toString().padStart(2,"0"),a=(i%60).toString().padStart(2,"0"),e=document.querySelector(".timer-count");l.gameTime="".concat(t,".").concat(a),e.textContent=l.gameTime}),1e3),i=0);for(var r=function(t){t.addEventListener("click",(function(i){console.log(t.dataset.index);var s=l.cardDeck[t.dataset.index];if(i.stopPropagation(),s.isActive)console.log("Карта уже перевернута");else{s.isActive=!s.isActive,c.push(s.id);var d=t.dataset.suit,r=t.dataset.rank;console.log("rank: ".concat(r,", suit: ").concat(d)),t.innerHTML='\n                <div class="card-front">\n                    <div class="card-top">\n                        <div class="card-title">'.concat(r,'</div>\n                        <img class="card-suites-small" src="./static/').concat(d,'.svg" alt="" />\n                    </div>\n                    <div class="card-suites">\n                        <img src="./static/').concat(d,'.svg" alt="" />\n                    </div>\n                    <div class="card-top card-top-flipped">\n                        <div class="card-title">').concat(r,'</div>\n                        <img class="card-suites-small" src="./static/').concat(d,'.svg" alt="" />\n                    </div>\n                </div>'),2===c.length&&(c[0]===c[1]?++n===l.difficultLevel&&(clearInterval(a),l.status="won",e()):(clearInterval(a),l.status="lost",e()),c.length=0)}}))},o=0,v=document.querySelectorAll(".card");o<v.length;o++)r(v[o]);var m=document.getElementById("new-game-button");m&&m.addEventListener("click",(function(){clearInterval(a),u()}))};function d(t){l.difficultLevel=t;for(var a=[],e=0;e<t;e++){var c=Math.floor(Math.random()*l.cardDeck.length),n=l.cardDeck[c];a.push(n),a.push(n),l.cardDeck.splice(c,1)}var i=a.sort((function(){return Math.random()-.5})).map((function(t){var a=function(t){return t>0&&t<=9?l.cardSuits[3]:t>9&&t<=18?l.cardSuits[1]:t>18&&t<=27?l.cardSuits[0]:l.cardSuits[2]}(t);return{id:t,rank:v(t),suit:a,isActive:!1}}));return l.cardDeck=i,console.log("gameField.cardDeck",l.cardDeck),s(),setTimeout((function(){l.isActive=!1,s()}),5e3)}var r=function(){var t=document.getElementById("app");t&&(t.innerHTML='\n      <div class="container">\n      <div class="info">\n          <p class="title">Выбери<br>сложность</p>\n          <form id="form" class="form" >\n                <div class="form-level">\n                    <input type="radio" name="level" value="easy" id="easy-level">\n                    <label for="easy-level" class="form-level-choice">1</label>\n                    <input type="radio" name="level" value="average" id="average-level">\n                    <label for="average-level" class="form-level-choice">2</label>\n                    <input type="radio" name="level" value="difficult" id="difficult-level">\n                    <label for="difficult-level" class="form-level-choice">3</label>\n                </div>\n                <div>\n                    <button type="submit" class="button">Старт</button>\n                </div>\n            </form>\n  </div>\n    ');var a=document.getElementById("form");a&&a.addEventListener("submit",(function(t){return t.preventDefault(),a[0].checked?d(3):a[1].checked?d(6):a[2].checked?d(9):void 0}))},l={gameTime:"00.00",cardSuits:["diamonds","hearts","clubs","spades"],cardRanks:["6","7","8","9","10","J","Q","K","A"],gameFieldSize:36,cardDeck:[],isActive:!0,difficultLevel:0,status:""};r();for(var o=0;o<l.gameFieldSize;o++)l.cardDeck[o]=o+1;var v=function(t){return 1===t||10===t||19===t||28===t?l.cardRanks[8]:2===t||11===t||20===t||29===t?l.cardRanks[7]:3===t||12===t||21===t||30===t?l.cardRanks[6]:4===t||13===t||22===t||31===t?l.cardRanks[5]:5===t||14===t||23===t||32===t?l.cardRanks[4]:6===t||15===t||24===t||33===t?l.cardRanks[3]:7===t||16===t||25===t||34===t?l.cardRanks[2]:8===t||17===t||26===t||35===t?l.cardRanks[1]:l.cardRanks[0]};function u(){l={gameTime:"00.00",cardSuits:["diamonds","hearts","clubs","spades"],cardRanks:["6","7","8","9","10","J","Q","K","A"],gameFieldSize:36,cardDeck:[],isActive:!0,difficultLevel:0,status:""},r();for(var t=0;t<l.gameFieldSize;t++)l.cardDeck[t]=t+1}})();