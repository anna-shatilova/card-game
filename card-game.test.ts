import { it, expect, describe } from '@jest/globals'
import { getCardSuit, getShufflePairs } from './components/function-for-test'
import { gameField } from './index'

describe('cardGame', () => {
    
    describe('getCardSuit', () => {
        it('should return the suit of the card', () => {
            const card = 3
            const expectedSuit = gameField.cardSuits[3]

            const result = getCardSuit(card)

            expect(result).toBe(expectedSuit)
        })
    })

    describe('getShufflePairs', () => {
        it('should create different arrays', () => {
            const count = 3
    
            const array1 = getShufflePairs(count)
            const array2 = getShufflePairs(count)
    
            expect(array1).not.toEqual(array2)
        })
    
        it('should update gameField.difficultLevel with the given count ', () => {
            const count = 6
    
            getShufflePairs(count)
    
            expect(gameField.difficultLevel).toBe(count)
        })    
    })
})
