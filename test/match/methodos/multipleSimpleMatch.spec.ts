/* eslint-disable no-undef */
import {
  config,
  crossMatchValitador,
  gameProcess,
  multipleSimpleMatchOne,
  multipleSimpleMatchTwo,
  multipleSimpleMatchThree,
  multipleSimpleMatchFour,
  valideMultipleSimpleMatchOne,
  valideMultipleSimpleMatchTwo,
  valideMultipleSimpleMatchThree,
  valideMultipleSimpleMatchFour,
  clearMultipleSimpleMatchOne,
  clearMultipleSimpleMatchTwo,
  clearMultipleSimpleMatchThree,
  clearMultipleSimpleMatchFour,
  activeCategorys,
  testInsertionNewStones
} from './conf'

describe('Validating multiple simple match ', () => {
  it('validating multiple simple match model one', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: multipleSimpleMatchOne, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(valideMultipleSimpleMatchOne)
  })
  it('validating multiple simple match model two', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: multipleSimpleMatchTwo, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(valideMultipleSimpleMatchTwo)
  })
  it('validating multiple simple match model Three', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: multipleSimpleMatchThree, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(valideMultipleSimpleMatchThree)
  })
  it('validating multiple simple match model Four', async () => {
    const baseSimpleMatchSevenDerivs = await crossMatchValitador({ table: multipleSimpleMatchFour, config: config })
    expect(baseSimpleMatchSevenDerivs).toStrictEqual(valideMultipleSimpleMatchFour)
  })
})

describe('Validating clear with fHelps in multiple simple match', () => {
  it('Validation clear cross match in  multiple simple match one', async () => {
    const table = await gameProcess({ table: multipleSimpleMatchOne, effects: activeCategorys, config })
    testInsertionNewStones(clearMultipleSimpleMatchOne, table)
  })
  it('Validation clear cross match in  multiple simple match two', async () => {
    const table = await gameProcess({ table: multipleSimpleMatchTwo, effects: activeCategorys, config })
    testInsertionNewStones(clearMultipleSimpleMatchTwo, table)
  })
  it('Validation clear cross match in  multiple simple match three', async () => {
    const table = await gameProcess({ table: multipleSimpleMatchThree, effects: activeCategorys, config })
    testInsertionNewStones(clearMultipleSimpleMatchThree, table)
  })
  it('Validation clear cross match in  multiple simple match four', async () => {
    const table = await gameProcess({ table: multipleSimpleMatchFour, effects: activeCategorys, config })
    testInsertionNewStones(clearMultipleSimpleMatchFour, table)
  })
})
