import { gameField, getCardRank, getCardSuit } from '../index.js'

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

            return `<div class="card" id="card" data-id="${card}">
            ${
                gameField.isActive
                    ? `<div class="card-front">
                <div class="card-top">
                    <div class="card-title">${getCardRank(card, rank)}</div>
                    <img class="card-suites-small" src="./static/${getCardSuit(
                        card,
                        suit,
                    )}.svg" alt="" />
                </div>
                <div class="card-suites">
                    <img src="./static/${getCardSuit(card, suit)}.svg" alt="" />
                </div>
                <div class="card-top card-top-flipped">
                    <div class="card-title">${getCardRank(card, rank)}</div>
                        <img class="card-suites-small" src="./static/${getCardSuit(
                            card,
                            suit,
                        )}.svg" alt="" />
                </div>
            </div>`
                    : `<img src="./static/card-back.svg" alt="карта" class="card-back"/>`
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

    for (const card of cards) {
        card.addEventListener('click', (event) => {
            console.log(gameField)
            //  = false
            // let firstCard, secondCard

            event.stopPropagation()
            // console.log(card.dataset.id)
            // console.log(gameField.cardDeck[card])

            // card['isActive'] = true
            // renderGame()
            // const target = event.target.parentElement

            // if (!gameField.cardDeck[card.dataset.index]['isActive']) {
            //     gameField.cardDeck[card.dataset.index]['isActive'] = true
            //     firstCard = target
            // } else {
            //     gameField.cardDeck[card.dataset.index]['isActive'] = false
            //     secondCard = target
            // }

            // const checkForMatch = () => {
            // if ((firstCard.dataset.id = secondCard.dataset.id)) {
            //     alert('Вы выиграли!')
            // } else {
            //     alert('Вы проиграли')
            // }
            // }

            // cards[id].isActive = true
            // renderGame()
        })
    }
    // let flippedCard = false
    // let firstCard, secondCard
    // const flipCard = (e) => {
    //     const target = e.target.parentElement
    //     target.classList.add('flip')
    // }
    // cards.forEach((card) => {
    //     card.addEventListener('click', flipCard)
    // })
}
