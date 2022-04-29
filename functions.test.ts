const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    test('Does shuffleArray return the array',async () => {
        await expect(typeof shuffleArray()).toBe('return')
    })
})

