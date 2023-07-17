import { gameField, getCardRank, getCardSuit } from '../index.js'

let isGameStart = true

export const renderGame = () => {
    const appEl = document.getElementById('app')

    const headerHtml = `
    <header class="header">
        <div class="timer">
            <div class="timer-text">
                <div class="timer-min">min</div>
                <div class="timer-sec">sek</div>
            </div>
            <div class="timer-count">00.00</div>
        </div>
        <button class="header-button button">Начать заново</button>
    </header>`

    const cardsHtml = gameField.cardDeck
        .map((card) => {
            let suit = '',
                rank = ''

            return isGameStart
                ? `<div class="card">
                <div class="card-front">
                    <div class="card-top">
                        <div class="card-title">${getCardRank(card, rank)}</div>
                        <img class="card-suites-small" src="./static/${getCardSuit(
                            card,
                            suit,
                        )}.svg" alt="" />
                    </div>
                    <div class="card-suites">
                        <img src="./static/${getCardSuit(
                            card,
                            suit,
                        )}.svg" alt="" />
                    </div>
                    <div class="card-top card-top-flipped">
                        <div class="card-title">${getCardRank(card, rank)}</div>
                            <img class="card-suites-small" src="./static/${getCardSuit(
                                card,
                                suit,
                            )}.svg" alt="" />
                    </div>
                </div>
            </div>`
                : `<div class="card">
                    <img src="./static/card-back.svg" alt="карта" />
                </div>`
        })
        .join('')

    appEl.innerHTML = `
      ${headerHtml}
      <section class="game-field">
      ${cardsHtml}
      </section>`
}
