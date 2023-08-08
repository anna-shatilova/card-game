import './style.css'
import { renderStartPage } from './components/start-page-component'

type GameField = {
    gameTime: string
    cardSuits: string[]
    cardRanks: string[]
    gameFieldSize: number
    cardDeck: any[]
    isActive: boolean
    difficultLevel: number
    status: string
}

export let gameField: GameField = {
    gameTime: '00.00',
    cardSuits: ['diamonds', 'hearts', 'clubs', 'spades'],
    cardRanks: ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
    gameFieldSize: 36,
    cardDeck: [],
    isActive: true,
    difficultLevel: 0,
    status: '',
}

renderStartPage()

for (let i = 0; i < gameField.gameFieldSize; i++) {
    gameField.cardDeck[i] = i + 1
}


export const getCardRank = (card: number) => {
    if (card === 1 || card === 10 || card === 19 || card === 28) {
        const rank = gameField.cardRanks[8]
        return rank
    }

    if (card === 2 || card === 11 || card === 20 || card === 29) {
        const rank = gameField.cardRanks[7]
        return rank
    }
    if (card === 3 || card === 12 || card === 21 || card === 30) {
        const rank = gameField.cardRanks[6]
        return rank
    }
    if (card === 4 || card === 13 || card === 22 || card === 31) {
        const rank = gameField.cardRanks[5]
        return rank
    }
    if (card === 5 || card === 14 || card === 23 || card === 32) {
        const rank = gameField.cardRanks[4]
        return rank
    }
    if (card === 6 || card === 15 || card === 24 || card === 33) {
        const rank = gameField.cardRanks[3]
        return rank
    }
    if (card === 7 || card === 16 || card === 25 || card === 34) {
        const rank = gameField.cardRanks[2]
        return rank
    }
    if (card === 8 || card === 17 || card === 26 || card === 35) {
        const rank = gameField.cardRanks[1]
        return rank
    }

    const rank = gameField.cardRanks[0]
    return rank
}

export function resetGame() {
    gameField = {
        gameTime: '00.00',
        cardSuits: ['diamonds', 'hearts', 'clubs', 'spades'],
        cardRanks: ['6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'],
        gameFieldSize: 36,
        cardDeck: [],
        isActive: true,
        difficultLevel: 0,
        status: '',
    }

    renderStartPage()
    for (let i = 0; i < gameField.gameFieldSize; i++) {
        gameField.cardDeck[i] = i + 1
    }
}
