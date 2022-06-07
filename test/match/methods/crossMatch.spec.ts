import {
  simpleMatchValitador,
  config,
  table,
  crossTableModelOne,
  crossTableModelTwo,
  crossTableModelThree,
  IsCross,
  filterCrossMatch,
  crossValideModelOne,
  crossValideModelTwo,
  crossValideModelThree,
  crossTableModelFour,
  crossTableModelFive,
  crossValideModelFour,
  crossValideModelFive,
  crossTableModelSix,
  crossValideModelSix,
  crossMatchValitador,
  crossTableModelSeven,
  crossValideModelSeven
} from '../config'

describe('Check if there is cross matchs', () => {
  it('Returns false when there is no cross', async () => {
    const baseSimpleNoCross = await simpleMatchValitador({ table: table, config: config })
    expect(IsCross(await filterCrossMatch(baseSimpleNoCross))).toBe(false)
  })
  it('Returns true when there is cross model one', async () => {
    const baseSimpleMatchOne = await simpleMatchValitador({ table: crossTableModelOne, config: config })
    expect(IsCross(await filterCrossMatch(baseSimpleMatchOne))).toBe(true)
  })
  it('Returns true when there is cross model two', async () => {
    const baseSimpleMatchTwo = await simpleMatchValitador({ table: crossTableModelTwo, config: config })
    expect(IsCross(await filterCrossMatch(baseSimpleMatchTwo))).toBe(true)
  })
  it('Returns true when there is cross model three', async () => {
    const baseSimpleMatchThree = await simpleMatchValitador({ table: crossTableModelThree, config: config })
    expect(IsCross(await filterCrossMatch(baseSimpleMatchThree))).toBe(true)
  })
})

describe('Validating match cross', () => {
  it('Validating crucifix', async () => {
    const baseSimpleMatchOne = await simpleMatchValitador({ table: crossTableModelOne, config: config })
    expect(await filterCrossMatch(baseSimpleMatchOne)).toStrictEqual(crossValideModelOne)
  })
  it('Validating the small and L-shaped cross', async () => {
    const baseSimpleMatchTwo = await simpleMatchValitador({ table: crossTableModelTwo, config: config })
    expect(await filterCrossMatch(baseSimpleMatchTwo)).toStrictEqual(crossValideModelTwo)
  })
  it('Validating long cross', async () => {
    const baseSimpleMatchThree = await simpleMatchValitador({ table: crossTableModelThree, config: config })
    expect(await filterCrossMatch(baseSimpleMatchThree)).toStrictEqual(crossValideModelThree)
  })
  it('validating complex crossing', async () => {
    const baseSimpleMatchFour = await simpleMatchValitador({ table: crossTableModelFour, config: config })
    expect(await filterCrossMatch(baseSimpleMatchFour)).toStrictEqual(crossValideModelFour)
  })
  it('validating equal crosses', async () => {
    const baseSimpleMatchFive = await simpleMatchValitador({ table: crossTableModelFive, config: config })
    expect(await filterCrossMatch(baseSimpleMatchFive)).toStrictEqual(crossValideModelFive)
  })
  it('validating complex crossing second part', async () => {
    const baseSimpleMatchSix = await simpleMatchValitador({ table: crossTableModelSix, config: config })
    expect(await filterCrossMatch(baseSimpleMatchSix)).toStrictEqual(crossValideModelSix)
  })
  it('validating full complex crossing third part', async () => {
    const baseSimpleMatchSeven = await simpleMatchValitador({ table: crossTableModelSeven, config: config })
    expect(await filterCrossMatch(baseSimpleMatchSeven)).toStrictEqual(crossValideModelSeven)
  })
})

describe('Validating matchs rows, columns and cross with fHelps', () => {
  it('Validation cross match', async () => {
    expect(await crossMatchValitador({ table: crossTableModelSix, config: config })).toStrictEqual(crossValideModelSix)
  })
})

describe('Validating matchs rows, columns and cross with fHelps', () => {
  it('Validation cross match', async () => {
    expect(await crossMatchValitador({ table: crossTableModelSix, config: config })).toStrictEqual(crossValideModelSix)
  })
})
test('Exception and error testing', async () => {
  filterCrossMatch({}).catch((err) => expect(err).toStrictEqual({}))
})
