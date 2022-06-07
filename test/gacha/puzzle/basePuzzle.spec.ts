/* eslint-disable no-undef */
import { stoneGacha, tablePuzzle, stoneConfig } from '../../../src/engines'
const config = stoneConfig({})

describe('Gacha Puzzle - Stone GamePlay Puzzle', () => {
  const stonesId = [1, 2, 3, 4, 5]
  const unityStone = stoneGacha.stonesRng.unitStone()
  const table = tablePuzzle.tablePuzzle({ row: 5, column: 7, stoneConfig: config })
  it('Check if it randomly returns a unit of stone', () => {
    expect(stonesId).toContain(unityStone)
  })
  it('Building a 5x7 puzzle table', () => {
    expect(table.length).toEqual(Array(5).length)
    expect(table[0].length).toEqual(Array(7).length)
  })
  it('Checking if all the cells were filled with the names of the stones', () => {
    const compare = table.filter(r => r.filter(c => config.filter(x => x.id === c.id)[0] === undefined)[0] !== undefined)
    expect(compare.length).toEqual(0)
  })
})
