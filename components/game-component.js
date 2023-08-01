import { gameField, resetGame } from '../index.js'
import { renderResultModule } from './result-component.js'

const compareCards = []

let cardPairsCompele = 0
let counter = 0
let timer = null

export const renderGame = () => {
    console.log(gameField)

    const headerHtml = `
    <header class="header">
        <div class="timer">
            <div class="timer-text">
                <div class="timer-min">min</div>
                <div class="timer-sec">sek</div>
            </div>
            <div class="timer-count" >${gameField.gameTime}</div>
        </div>
        <button id="new-game-button" class="header-button button">Начать заново</button>
    </header>`

    const cardsHtml = gameField.cardDeck
        .map((card, index) => {
            console.log('current card is ', card)

            return `<div class="card" id="card" data-index="${index}" data-id="${
                card.id
            }" data-suit="${card.suit}" data-rank="${card.rank}">
            ${
                gameField.isActive
                    ? `<div class="card-front">
                <div class="card-top">
                    <div class="card-title">${card.rank}</div>
                    <img class="card-suites-small" src="./static/${card.suit}.svg" alt="" />
                </div>
                <div class="card-suites">
                    <img src="./static/${card.suit}.svg" alt="" />
                </div>
                <div class="card-top card-top-flipped">
                    <div class="card-title">${card.rank}</div>
                        <img class="card-suites-small" src="./static/${card.suit}.svg" alt="" />
                </div>
            </div>`
                    : `
                    <img src="./static/card-back.svg" alt="карта" class="card-back"/>`
            }
              </div>`
        })
        .join('')

    const appEl = document.getElementById('app')

    appEl.innerHTML = `
      ${headerHtml}
      <section class="game-field">
      ${cardsHtml}
      </section>`

    if (!gameField.isActive) {
        timer = setInterval(() => {
            counter++
            const minutes = Math.floor(counter / 60)
                .toString()
                .padStart(2, '0')
            const seconds = (counter % 60).toString().padStart(2, '0')
            const timeCount = document.querySelector('.timer-count')

            gameField.gameTime = `${minutes}.${seconds}`
            timeCount.textContent = gameField.gameTime
        }, 1000)
        counter = 0
    }

    const cards = document.querySelectorAll('.card')

    for (const card of cards) {
        card.addEventListener('click', (event) => {
            console.log(card.dataset.index)

            const cardItem = gameField.cardDeck[card.dataset.index]

            event.stopPropagation()

            if (cardItem.isActive) {
                console.log('Карта уже перевернута')
                return
            }

            cardItem.isActive = !cardItem.isActive

            compareCards.push(cardItem.id)

            const suit = card.dataset.suit
            const rank = card.dataset.rank

            console.log(`rank: ${rank}, suit: ${suit}`)

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
                    cardPairsCompele++

                    if (cardPairsCompele === gameField.difficultLevel) {
                        clearInterval(timer)
                        gameField.status = 'won'
                        renderResultModule()
                    }
                } else {
                    clearInterval(timer)
                    gameField.status = 'lost'
                    renderResultModule()
                }
                compareCards.length = 0
            }
        })
    }

    const newGameButtonEl = document.getElementById('new-game-button')

    newGameButtonEl.addEventListener('click', () => {
        clearInterval(timer)
        resetGame()
    })
}
