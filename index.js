import './style.css'
import { renderStartPage } from './components/start-page-component.js'
import { renderGame } from './components/game-component.js'

export let gameField = {
    gameTime: 0,
    cardSuits: ['diamonds', 'hearts', 'clubs', 'spades'],
    cardRanks: ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    gameFieldSize: 36,
    cardDeck: [],
    isActive: true,
}
renderStartPage()

for (let i = 0; i < gameField.gameFieldSize; i++) {
    gameField.cardDeck[i] = i + 1
}

export const getCardSuit = (card, suit) => {
    if (card > 0 && card <= 9) {
        suit = gameField.cardSuits[3]
    } else if (card > 9 && card <= 18) {
        suit = gameField.cardSuits[1]
    } else if (card > 18 && card <= 27) {
        suit = gameField.cardSuits[0]
    } else {
        suit = gameField.cardSuits[2]
    }

    return suit
}

export const getCardRank = (card, rank) => {
    if (card === 1 || card === 10 || card === 19 || card === 28) {
        rank = gameField.cardRanks[8]
    } else if (card === 2 || card === 11 || card === 20 || card === 29) {
        rank = gameField.cardRanks[7]
    } else if (card === 3 || card === 12 || card === 21 || card === 30) {
        rank = gameField.cardRanks[6]
    } else if (card === 4 || card === 13 || card === 22 || card === 31) {
        rank = gameField.cardRanks[5]
    } else if (card === 5 || card === 14 || card === 23 || card === 32) {
        rank = gameField.cardRanks[4]
    } else if (card === 6 || card === 15 || card === 24 || card === 33) {
        rank = gameField.cardRanks[3]
    } else if (card === 7 || card === 16 || card === 25 || card === 34) {
        rank = gameField.cardRanks[2]
    } else if (card === 8 || card === 17 || card === 26 || card === 35) {
        rank = gameField.cardRanks[1]
    } else {
        rank = gameField.cardRanks[0]
    }

    return rank
}

export function getShufflePairs(count) {
    renderGame()
    let pairs = []

    for (let i = 0; i < count; i++) {
        let cardIndex = Math.floor(Math.random() * gameField.cardDeck.length)
        let card = gameField.cardDeck[cardIndex]

        pairs.push(card)
        pairs.push(card)

        gameField.cardDeck.splice(cardIndex, 1)
    }
    gameField.cardDeck = pairs.sort(() => Math.random() - 0.5)
    renderGame()

    return setTimeout(() => {
        const cardsArray = gameField.cardDeck.map((card) => {
            return {
                id: card,
                isActive: false,
            }
        })
        gameField.cardDeck = cardsArray
        gameField.isActive = false
        renderGame()
    }, 5000)
}
