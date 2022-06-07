import {
  IBasicTable,
  activeEffectsInMatchs,
  config,
  activeCategorys,
  clearMatchs,
  isMatch,
  sequenceHistory,
  tableModelEffectOneModelOne,
  tableModelEffectOneModelOneResultOne,
  tableModelEffectOneModelTwo,
  tableModelEffectTwoModelOneResultOne,
  tableModelEffectOneModelThree,
  tableModelEffectThreeModelOneResultOne,
  tableModelEffectOneModelFour,
  tableModelEffectTwoModelOne,
  tableTwoModelEffectModelOneResultOne,
  tableTwoModelEffectModelOneResultTwo,
  tableThreeModelEffectModelOneResultOne,
  tableModelEffectTwoModelTwo,
  tableThreeModelEffectModelOneResultTwo,
  tableModelEffectTwoModelThree,
  tableThreeModelEffectModelThreeResultOne,
  tableThreeModelEffectModelThreeResultTwo,
  tableModelEffectOneModelOneResult,
  tableModelEffectOneModelTwoResult,
  tableModelEffectOneModelThreeResult,
  tableModelEffectTwoModelOneResult,
  tableModelEffectTwoModelTwoResult,
  tableModelEffectTwoModelThreeResult,
  clearInitEffect,
  clearSequentialEffects,
  categoryApplication,
  organizeStructure
} from '../config'

const resultOne = async (table: IBasicTable[][]) => {
  const { effects } = await isMatch({ table, config })
  if (effects[0] !== undefined) {
    const result = await activeEffectsInMatchs({ table, activeCategorys, occurrences: effects })
    return result
  } else {
    return null
  }
}

const resultTwo = async (table: IBasicTable[][]) => {
  const { effects } = await isMatch({ table, config })
  if (effects[0] !== undefined) {
    const explodeStones = await activeEffectsInMatchs({ table, activeCategorys, occurrences: effects })
    const result = await sequenceHistory({ sequenceInitial: explodeStones, table, effects: activeCategorys })
    return result
  } else {
    return null
  }
}

const resultCleanup = async (table: IBasicTable[][]) => {
  const { effects, match } = await isMatch({ table, config })
  if (effects[0] !== undefined) {
    const explodeStones = await activeEffectsInMatchs({ table, activeCategorys, occurrences: effects })
    const result = await sequenceHistory({ sequenceInitial: explodeStones, table, effects: activeCategorys })
    let newTable = await clearMatchs(table, match)
    if (explodeStones !== undefined) {
      newTable = await clearInitEffect({ table: newTable, effect: explodeStones })
      if (result !== undefined && result !== undefined) {
        newTable = await clearSequentialEffects({ table: newTable, effect: result })
      }
    }
    newTable = await categoryApplication({ table: newTable, activeCategorys, matchs: match, config })
    newTable = await organizeStructure(newTable)
    return newTable
  } else {
    return null
  }
}

describe('Validating the activation of effects in MOVE of the stones from table 1', () => {
  it('Model 1 stone effect activation result one', async () => {
    const validMove = await resultOne(tableModelEffectOneModelOne)
    expect(validMove).toStrictEqual(tableModelEffectOneModelOneResultOne)
  })
  it('Model 1 stone effect activation result two', async () => {
    const validMove = await resultTwo(tableModelEffectOneModelOne)
    expect(validMove).toStrictEqual([])
  })
  it('Model 2 stone effect activation result one', async () => {
    const validMove = await resultOne(tableModelEffectOneModelTwo)
    expect(validMove).toStrictEqual(tableModelEffectTwoModelOneResultOne)
  })
  it('Model 2 stone effect activation result two', async () => {
    const validMove = await resultTwo(tableModelEffectOneModelTwo)
    expect(validMove).toStrictEqual([])
  })
  it('Model 3 stone effect activation result one', async () => {
    const validMove = await resultOne(tableModelEffectOneModelThree)
    expect(validMove).toStrictEqual(tableModelEffectThreeModelOneResultOne)
  })
  it('Model 3 stone effect activation result two', async () => {
    const validMove = await resultTwo(tableModelEffectOneModelThree)
    expect(validMove).toStrictEqual([])
  })
  it('Model 4 stone effect activation result one', async () => {
    const validMove = await resultOne(tableModelEffectOneModelFour)
    expect(validMove).toStrictEqual(null)
  })
  it('Model 4 stone effect activation result two', async () => {
    const validMove = await resultTwo(tableModelEffectOneModelFour)
    expect(validMove).toStrictEqual(null)
  })
})

describe('Validating the activation of effects in MOVE of the stones from table 2', () => {
  it('Model 1 stone effect activation result one', async () => {
    const validMove = await resultOne(tableModelEffectTwoModelOne)
    expect(validMove).toStrictEqual(tableTwoModelEffectModelOneResultOne)
  })
  it('Model 1 stone effect activation result two', async () => {
    const validMove = await resultTwo(tableModelEffectTwoModelOne)
    expect(validMove).toStrictEqual(tableTwoModelEffectModelOneResultTwo)
  })
  it('Model 2 stone effect activation result one', async () => {
    const validMove = await resultOne(tableModelEffectTwoModelTwo)
    expect(validMove).toStrictEqual(tableThreeModelEffectModelOneResultOne)
  })
  it('Model 2 stone effect activation result two', async () => {
    const validMove = await resultTwo(tableModelEffectTwoModelTwo)
    expect(validMove).toStrictEqual(tableThreeModelEffectModelOneResultTwo)
  })
  it('Model 3 stone effect activation result one', async () => {
    const validMove = await resultOne(tableModelEffectTwoModelThree)
    expect(validMove).toStrictEqual(tableThreeModelEffectModelThreeResultOne)
  })
  it('Model 3 stone effect activation result two', async () => {
    const validMove = await resultTwo(tableModelEffectTwoModelThree)
    expect(validMove).toStrictEqual(tableThreeModelEffectModelThreeResultTwo)
  })
})

describe('Full flow validation from movement to table cleanup', () => {
  it('Table 1 model 1, result', async () => {
    const validMove = await resultCleanup(tableModelEffectOneModelOne)
    expect(validMove).toStrictEqual(tableModelEffectOneModelOneResult)
  })
  it('Table 1 model 2, result', async () => {
    const validMove = await resultCleanup(tableModelEffectOneModelTwo)
    expect(validMove).toStrictEqual(tableModelEffectOneModelTwoResult)
  })
  it('Table 1 model 3, result', async () => {
    const validMove = await resultCleanup(tableModelEffectOneModelThree)
    expect(validMove).toStrictEqual(tableModelEffectOneModelThreeResult)
  })
  it('Table 1 model 4, result', async () => {
    const validMove = await resultCleanup(tableModelEffectOneModelFour)
    expect(validMove).toStrictEqual(null)
  })
  it('Table 2 model 1, result', async () => {
    const validMove = await resultCleanup(tableModelEffectTwoModelOne)
    expect(validMove).toStrictEqual(tableModelEffectTwoModelOneResult)
  })
  it('Table 2 model 2, result', async () => {
    const validMove = await resultCleanup(tableModelEffectTwoModelTwo)
    expect(validMove).toStrictEqual(tableModelEffectTwoModelTwoResult)
  })
  it('Table 2 model 3, result', async () => {
    const validMove = await resultCleanup(tableModelEffectTwoModelThree)
    expect(validMove).toStrictEqual(tableModelEffectTwoModelThreeResult)
  })
})
