import { it, expect, describe } from '@jest/globals'
import { getCardSuit, getShufflePairs } from './components/function-for-test'

describe('cardGame', () => {
    it('should add suit to card', () => {
        expect(getCardSuit(3)).toBe('spades')
    })

    it('should create different arrays', () => {
        const count = 3

        const array1 = getShufflePairs(count)
        const array2 = getShufflePairs(count)

        expect(array1).not.toEqual(array2)
    })

    it('should return the correct number of cards on the table ', () => {
        const count = 6

        const cardsOnTable = getShufflePairs(count)
        const expectedArrayLengthCards = count * 2

        expect(cardsOnTable).toHaveLength(expectedArrayLengthCards)
    })
})
