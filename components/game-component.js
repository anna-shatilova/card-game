import { gameField, getCardRank, getCardSuit } from '../index.js'

const compareCards = []

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
        .map((card, index) => {
            let suit = '',
                rank = ''

            const cardSuit = getCardSuit(card, suit)
            const cardRank = getCardRank(card, rank)

            return `<div class="card" id="card" data-index="${index}" data-id="${
                card.id
            }" data-suit="${cardSuit}" data-rank="${cardRank}">
            ${
                gameField.isActive
                    ? `<div class="card-front">
                <div class="card-top">
                    <div class="card-title">${cardRank}</div>
                    <img class="card-suites-small" src="./static/${cardSuit}.svg" alt="" />
                </div>
                <div class="card-suites">
                    <img src="./static/${cardSuit}.svg" alt="" />
                </div>
                <div class="card-top card-top-flipped">
                    <div class="card-title">${cardRank}</div>
                        <img class="card-suites-small" src="./static/${cardSuit}.svg" alt="" />
                </div>
            </div>`
                    : `
                    <img src="./static/card-back.svg" alt="карта" class="card-back"/>`
            }
              </div>`
        })
        .join('')

    appEl.innerHTML = `
      ${headerHtml}
      <section class="game-field">
      ${cardsHtml}
      </section>`

    const cards = document.querySelectorAll('.card')
    console.log(cards)

    for (const card of cards) {
        card.addEventListener('click', (event) => {
            const cardItem = gameField.cardDeck[card.dataset.index]

            event.stopPropagation()

            if (cardItem.isActive) {
                return
            }

            cardItem.isActive = !cardItem.isActive

            compareCards.push(cardItem.id)

            const suit = card.dataset.suit
            const rank = card.dataset.rank

            const renderCardFront = () => {
                card.innerHTML = `
                <div class="card-front">
                    <div class="card-top">
                        <div class="card-title">${rank}</div>
                        <img class="card-suites-small" src="./static/${suit}.svg" alt="" />
                    </div>
                    <div class="card-suites">
                        <img src="./static/${suit}.svg" alt="" />
                    </div>
                    <div class="card-top card-top-flipped">
                        <div class="card-title">${rank}</div>
                        <img class="card-suites-small" src="./static/${suit}.svg" alt="" />
                    </div>
                </div>`
                return
            }
            renderCardFront()

            if (compareCards.length === 2) {
                if (compareCards[0] === compareCards[1]) {
                    alert('Вы выиграли!')
                } else {
                    alert('Вы проиграли')
                }
                compareCards.length = 0
            }
        })
    }
}
