import {
  config,
  isMatch,
  categoryApplication,
  clearMatchs,
  organizeStructure,
  fEventsProcess,
  tableModelEight,
  tableModelEleven,
  clearTableModelEight,
  clearTableModelEleven,
  clearTableModelBaseCategory,
  clearTableModelOneCategory,
  clearTableModelTwoCategory,
  clearTableModelThreeCategory,
  clearTableModelFourCategory,
  clearTableModelFiveCategory,
  clearTableModelSixCategory,
  crossTableModelOne,
  crossTableModelTwo,
  crossTableModelThree,
  crossTableModelFour,
  crossTableModelFive,
  crossTableModelSix,
  tableModelNineMoveOne,
  tableModelNineMoveTwo,
  tableModelTenMoveOne,
  tableModelTenMoveTwo,
  tableModelTenMoveThree,
  tableModelTenMoveFour,
  tableModelTenMoveFive,
  clearTableModelNineMoveOne,
  clearTableModelNineMoveTwo,
  clearTableModelTenMoveOne,
  clearTableModelTenMoveTwo,
  clearTableModelTenMoveThree,
  clearTableModelTenMoveFour,
  clearTableModelTenMoveFive,
  table,
  activeCategorys,
  testInsertionNewStones
} from '../config'

describe('Check that the categories have been applied correctly', () => {
  it('Applying categories to eligible combos in model eight', async () => {
    const reportMatch = await isMatch({ table: tableModelEight, config })
    const reportClear = await clearMatchs(tableModelEight, reportMatch.match)
    const next = await organizeStructure(await categoryApplication({ table: reportClear, activeCategorys, config, matchs: reportMatch.match }))
    expect(next).toStrictEqual(clearTableModelEight)
  })
  it('Applying categories to eligible combos and fills gaps in model eight', async () => {
    const table = await fEventsProcess({ table: tableModelEight, config, activeCategorys })
    clearTableModelEight.forEach((e, row) => e.forEach((cell, column) => {
      if (cell.type === 'void') {
        expect(table.newTable[row][column]).not.toStrictEqual(cell)
      } else {
        expect(table.newTable[row][column]).toStrictEqual(cell)
      }
    }))
  })
  it('Applying categories to eligible combos complex in model eleven', async () => {
    const reportMatch = await isMatch({ table: tableModelEleven, config })
    const reportClear = await clearMatchs(tableModelEleven, reportMatch.match)
    const next = await organizeStructure(await categoryApplication({ table: reportClear, activeCategorys, config, matchs: reportMatch.match }))
    expect(next).toStrictEqual(clearTableModelEleven)
  })
  it('Applying categories to eligible combos complex and fills gaps in model eleven', async () => {
    const table = await fEventsProcess({ table: tableModelEleven, config, activeCategorys })
    testInsertionNewStones(clearTableModelEleven, table.newTable)
  })
})

describe('Validating match move detection', () => {
  it('Move detection model table nine, type one example one', async () => {
    const move = { drag: { row: 1, column: 3 }, drop: { row: 0, column: 3 } }
    const table = await fEventsProcess({ table: tableModelNineMoveOne, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelNineMoveOne, table.newTable)
  })
  it('Move detection model table nine, type one example two', async () => {
    const move = { drop: { row: 1, column: 3 }, drag: { row: 0, column: 3 } }
    const table = await fEventsProcess({ table: tableModelNineMoveOne, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelNineMoveOne, table.newTable)
  })
  it('Move detection model table nine, type two example one', async () => {
    const move = { drag: { row: 3, column: 2 }, drop: { row: 2, column: 2 } }
    const table = await fEventsProcess({ table: tableModelNineMoveTwo, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelNineMoveTwo, table.newTable)
  })
  it('Move detection model table nine, type two example two', async () => {
    const move = { drop: { row: 3, column: 2 }, drag: { row: 2, column: 2 } }
    const table = await fEventsProcess({ table: tableModelNineMoveTwo, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelNineMoveTwo, table.newTable)
  })
  it('Move detection model table teen, type one example one', async () => { // 3-0 for 3-1
    const move = { drag: { row: 3, column: 0 }, drop: { row: 3, column: 1 } }
    const table = await fEventsProcess({ table: tableModelTenMoveOne, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelTenMoveOne, table.newTable)
  })
  it('Move detection model table teen, type one example two', async () => { // 3-0 for 3-1
    const move = { drop: { row: 3, column: 0 }, drag: { row: 3, column: 1 } }
    const table = await fEventsProcess({ table: tableModelTenMoveOne, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelTenMoveOne, table.newTable)
  })
  it('Move detection model table teen, type two example one', async () => { // 3-5 for 3-4
    const move = { drag: { row: 3, column: 4 }, drop: { row: 3, column: 5 } }
    const table = await fEventsProcess({ table: tableModelTenMoveTwo, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelTenMoveTwo, table.newTable)
  })
  it('Move detection model table teen, type two example two', async () => { // 3-5 for 3-4
    const move = { drop: { row: 3, column: 4 }, drag: { row: 3, column: 5 } }
    const table = await fEventsProcess({ table: tableModelTenMoveTwo, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelTenMoveTwo, table.newTable)
  })
  it('Move detection model table teen, type three example one', async () => { // 1-4 for 2-4
    const move = { drag: { row: 1, column: 4 }, drop: { row: 2, column: 4 } }
    const table = await fEventsProcess({ table: tableModelTenMoveThree, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelTenMoveThree, table.newTable)
  })
  it('Move detection model table teen, type three example two', async () => { // 1-4 for 2-4
    const move = { drop: { row: 1, column: 4 }, drag: { row: 2, column: 4 } }
    const table = await fEventsProcess({ table: tableModelTenMoveThree, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelTenMoveThree, table.newTable)
  })
  it('Move detection model table teen, type four example one', async () => { // 1-4 for 0-4
    const move = { drag: { row: 1, column: 4 }, drop: { row: 0, column: 4 } }
    const table = await fEventsProcess({ table: tableModelTenMoveFour, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelTenMoveFour, table.newTable)
  })
  it('Move detection model table teen, type four example two', async () => { // 1-4 for 0-4
    const move = { drop: { row: 1, column: 4 }, drag: { row: 0, column: 4 } }
    const table = await fEventsProcess({ table: tableModelTenMoveFour, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelTenMoveFour, table.newTable)
  })
  it('Move detection model table teen, type five example one', async () => { // 1-4 for 1-3 -> 0-4 five!
    const move = { drag: { row: 1, column: 4 }, drop: { row: 1, column: 3 } }
    const table = await fEventsProcess({ table: tableModelTenMoveFive, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelTenMoveFive, table.newTable)
  })
  it('Move detection model table teen, type five example two', async () => { // 1-4 for 1-3 -> 0-4 five!
    const move = { drop: { row: 1, column: 4 }, drag: { row: 1, column: 3 } }
    const table = await fEventsProcess({ table: tableModelTenMoveFive, config, activeCategorys, move })
    testInsertionNewStones(clearTableModelTenMoveFive, table.newTable)
  })
})

describe('Check that the categories have been applied correctly in models base, one, two, three, four, five, six and seven', () => {
  it('Applying categories to eligible combos model base', async () => {
    const reportMatch = await isMatch({ table: table, config })
    const reportClear = await clearMatchs(table, reportMatch.match)
    const next = await organizeStructure(await categoryApplication({ table: reportClear, activeCategorys, config, matchs: reportMatch.match }))
    expect(next).toStrictEqual(clearTableModelBaseCategory)
  })
  it('Applying categories to eligible combos model one', async () => {
    const reportMatch = await isMatch({ table: crossTableModelOne, config })
    const reportClear = await clearMatchs(crossTableModelOne, reportMatch.match)
    const next = await organizeStructure(await categoryApplication({ table: reportClear, activeCategorys, config, matchs: reportMatch.match }))
    expect(next).toStrictEqual(clearTableModelOneCategory)
  })
  it('Applying categories to eligible combos model two', async () => {
    const reportMatch = await isMatch({ table: crossTableModelTwo, config })
    const reportClear = await clearMatchs(crossTableModelTwo, reportMatch.match)
    const next = await organizeStructure(await categoryApplication({ table: reportClear, activeCategorys, config, matchs: reportMatch.match }))
    expect(next).toStrictEqual(clearTableModelTwoCategory)
  })
  it('Applying categories to eligible combos model three', async () => {
    const reportMatch = await isMatch({ table: crossTableModelThree, config })
    const reportClear = await clearMatchs(crossTableModelThree, reportMatch.match)
    const next = await organizeStructure(await categoryApplication({ table: reportClear, activeCategorys, config, matchs: reportMatch.match }))
    expect(next).toStrictEqual(clearTableModelThreeCategory)
  })
  it('Applying categories to eligible combos model four', async () => {
    const reportMatch = await isMatch({ table: crossTableModelFour, config })
    const reportClear = await clearMatchs(crossTableModelFour, reportMatch.match)
    const next = await organizeStructure(await categoryApplication({ table: reportClear, activeCategorys, config, matchs: reportMatch.match }))
    expect(next).toStrictEqual(clearTableModelFourCategory)
  })
  it('Applying categories to eligible combos model five', async () => {
    const reportMatch = await isMatch({ table: crossTableModelFive, config })
    const reportClear = await clearMatchs(crossTableModelFive, reportMatch.match)
    const next = await organizeStructure(await categoryApplication({ table: reportClear, activeCategorys, config, matchs: reportMatch.match }))
    expect(next).toStrictEqual(clearTableModelFiveCategory)
  })
  it('Applying categories to eligible combos model six', async () => {
    const reportMatch = await isMatch({ table: crossTableModelSix, config })
    const reportClear = await clearMatchs(crossTableModelSix, reportMatch.match)
    const next = await organizeStructure(await categoryApplication({ table: reportClear, activeCategorys, config, matchs: reportMatch.match }))
    expect(next).toStrictEqual(clearTableModelSixCategory)
  })
})
