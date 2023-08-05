const { it, expect, describe } = require('@jest/globals')
import { getCardSuit } from './index'

describe('cardGame', () => {
    it('should add suit to card', () => {
        expect(getCardSuit(3)).toBe('spades')
    })
})
