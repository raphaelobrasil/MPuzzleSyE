import {
  config,
  crossMatchValitador,
  fEventsProcess,
  crossTableModelSevenDerivOne,
  crossValideModelSevenDerivOne,
  crossTableModelSevenDerivTwo,
  crossValideModelSevenDerivTwo,
  crossTableModelSevenDerivThree,
  crossValideModelSevenDerivThree,
  crossTableModelSevenDerivFour,
  crossValideModelSevenDerivFour,
  crossTableModelSevenDerivFive,
  crossValideModelSevenDerivFive,
  crossTableModelSevenDerivSix,
  crossValideModelSevenDerivSix,
  crossTableModelSevenDerivSeven,
  crossValideModelSevenDerivSeven,
  crossTableModelSevenDerivEight,
  crossValideModelSevenDerivEight,
  clearCrossTableModelSevenDerivOne,
  clearCrossTableModelSevenDerivTwo,
  clearCrossTableModelSevenDerivThree,
  clearCrossTableModelSevenDerivFour,
  clearCrossTableModelSevenDerivFive,
  clearCrossTableModelSevenDerivSix,
  clearCrossTableModelSevenDerivSeven,
  clearCrossTableModelSevenDerivEight,
  activeCategorys,
  testInsertionNewStones
} from '../config'

describe('Validating match cross seven derivs', () => {
  it('validating full complex crossing model seven derivs One', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: crossTableModelSevenDerivOne, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(crossValideModelSevenDerivOne)
  })
  it('validating full complex crossing model seven derivs Two', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: crossTableModelSevenDerivTwo, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(crossValideModelSevenDerivTwo)
  })
  it('validating full complex crossing model seven derivs Three', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: crossTableModelSevenDerivThree, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(crossValideModelSevenDerivThree)
  })
  it('validating full complex crossing model seven derivs Four', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: crossTableModelSevenDerivFour, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(crossValideModelSevenDerivFour)
  })
  it('validating full complex crossing model seven derivs Five', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: crossTableModelSevenDerivFive, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(crossValideModelSevenDerivFive)
  })
  it('validating full complex crossing model seven derivs Six', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: crossTableModelSevenDerivSix, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(crossValideModelSevenDerivSix)
  })
  it('validating full complex crossing model seven derivs Seven', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: crossTableModelSevenDerivSeven, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(crossValideModelSevenDerivSeven)
  })
  it('validating full complex crossing model seven derivs Eight', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: crossTableModelSevenDerivEight, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(crossValideModelSevenDerivEight)
  })
})

describe('Validating clear with fHelps in seven derivs', () => {
  it('Validation clear cross match in seven derivs one', async () => {
    const table = await fEventsProcess({ table: crossTableModelSevenDerivOne, config, activeCategorys })
    testInsertionNewStones(clearCrossTableModelSevenDerivOne, table.newTable)
  })
  it('Validation clear cross match in seven derivs two', async () => {
    const table = await fEventsProcess({ table: crossTableModelSevenDerivTwo, config, activeCategorys })
    testInsertionNewStones(clearCrossTableModelSevenDerivTwo, table.newTable)
  })
  it('Validation clear cross match in seven derivs three', async () => {
    const table = await fEventsProcess({ table: crossTableModelSevenDerivThree, config, activeCategorys })
    testInsertionNewStones(clearCrossTableModelSevenDerivThree, table.newTable)
  })
  it('Validation clear cross match in seven derivs four', async () => {
    const table = await fEventsProcess({ table: crossTableModelSevenDerivFour, config, activeCategorys })
    testInsertionNewStones(clearCrossTableModelSevenDerivFour, table.newTable)
  })
  it('Validation clear cross match in seven derivs five', async () => {
    const table = await fEventsProcess({ table: crossTableModelSevenDerivFive, config, activeCategorys })
    testInsertionNewStones(clearCrossTableModelSevenDerivFive, table.newTable)
  })
  it('Validation clear cross match in seven derivs Six', async () => {
    const table = await fEventsProcess({ table: crossTableModelSevenDerivSix, config, activeCategorys })
    testInsertionNewStones(clearCrossTableModelSevenDerivSix, table.newTable)
  })
  it('Validation clear cross match in seven derivs Seven', async () => {
    const table = await fEventsProcess({ table: crossTableModelSevenDerivSeven, config, activeCategorys })
    testInsertionNewStones(clearCrossTableModelSevenDerivSeven, table.newTable)
  })
  it('Validation clear cross match in seven derivs Eight', async () => {
    const table = await fEventsProcess({ table: crossTableModelSevenDerivEight, config, activeCategorys })
    testInsertionNewStones(clearCrossTableModelSevenDerivEight, table.newTable)
  })
})
