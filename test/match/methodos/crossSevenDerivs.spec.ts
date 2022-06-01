/* eslint-disable no-undef */
import {
  config,
  crossMatchValitador,
  gameProcess,
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
} from './conf'

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
    const table = await gameProcess({ table: crossTableModelSevenDerivOne, effects: activeCategorys, config })
    testInsertionNewStones(clearCrossTableModelSevenDerivOne, table)
  })
  it('Validation clear cross match in seven derivs two', async () => {
    const table = await gameProcess({ table: crossTableModelSevenDerivTwo, effects: activeCategorys, config })
    testInsertionNewStones(clearCrossTableModelSevenDerivTwo, table)
  })
  it('Validation clear cross match in seven derivs three', async () => {
    const table = await gameProcess({ table: crossTableModelSevenDerivThree, effects: activeCategorys, config })
    testInsertionNewStones(clearCrossTableModelSevenDerivThree, table)
  })
  it('Validation clear cross match in seven derivs four', async () => {
    const table = await gameProcess({ table: crossTableModelSevenDerivFour, effects: activeCategorys, config })
    testInsertionNewStones(clearCrossTableModelSevenDerivFour, table)
  })
  it('Validation clear cross match in seven derivs five', async () => {
    const table = await gameProcess({ table: crossTableModelSevenDerivFive, effects: activeCategorys, config })
    testInsertionNewStones(clearCrossTableModelSevenDerivFive, table)
  })
  it('Validation clear cross match in seven derivs Six', async () => {
    const table = await gameProcess({ table: crossTableModelSevenDerivSix, effects: activeCategorys, config })
    testInsertionNewStones(clearCrossTableModelSevenDerivSix, table)
  })
  it('Validation clear cross match in seven derivs Seven', async () => {
    const table = await gameProcess({ table: crossTableModelSevenDerivSeven, effects: activeCategorys, config })
    testInsertionNewStones(clearCrossTableModelSevenDerivSeven, table)
  })
  it('Validation clear cross match in seven derivs Eight', async () => {
    const table = await gameProcess({ table: crossTableModelSevenDerivEight, effects: activeCategorys, config })
    testInsertionNewStones(clearCrossTableModelSevenDerivEight, table)
  })
})
