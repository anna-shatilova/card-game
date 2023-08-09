import { gameField, getCardRank } from "../index"
import { renderGame } from "./game-component"

export const getCardSuit = (card: number) => {
    if (card > 0 && card <= 9) {
        const suit = gameField.cardSuits[3]
        return suit
    }

    if (card > 9 && card <= 18) {
        const suit = gameField.cardSuits[1]
        return suit
    }

    if (card > 18 && card <= 27) {
        const suit = gameField.cardSuits[0]
        return suit
    }

    const suit = gameField.cardSuits[2]
    return suit
}

export function getShufflePairs(count: number) {
    gameField.difficultLevel = count

    let pairs = []

    for (let i = 0; i < count; i++) {
        let cardIndex = Math.floor(Math.random() * gameField.cardDeck.length)
        let card = gameField.cardDeck[cardIndex]

        pairs.push(card)
        pairs.push(card)

        gameField.cardDeck.splice(cardIndex, 1)
    }
    const shuffledIds = pairs.sort(() => Math.random() - 0.5)

    const cards = shuffledIds.map((item) => {
        const cardSuit = getCardSuit(item)
        const cardRank = getCardRank(item)

        return {
            id: item,
            rank: cardRank,
            suit: cardSuit,
            isActive: false,
        }
    })
    
    gameField.cardDeck = cards
    console.log('gameField.cardDeck', gameField.cardDeck)

    renderGame()

    return setTimeout(() => {
        gameField.isActive = false
        renderGame()
    }, 5000)
}
