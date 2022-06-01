/* eslint-disable no-undef */
import { gameStart, filterCrossMatch, simpleMatchValitador, config } from '../methodos/conf'

describe('Checking standard game methods', () => {
  it('Creating initial table without matches', async () => {
    const newTablePuzzle = await filterCrossMatch(
      await simpleMatchValitador({ table: await gameStart({ rowCount: 5, columnCount: 7, config }), config: config })
    )
    expect(newTablePuzzle).toStrictEqual({ columns: [], rows: [] })
  })
})
