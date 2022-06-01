/* eslint-disable no-undef */
import {
  base,
  config,
  crossMatchValitador,
  clearMatchs,
  organizeStructure,
  crossTableModelOne,
  crossTableModelTwo,
  crossTableModelThree,
  crossTableModelFour,
  crossTableModelFive,
  crossTableModelSix,
  clearTableModelOne,
  clearTableModelTwo,
  clearTableModelThree,
  clearTableModelFour,
  clearTableModelFive,
  clearTableModelSix,
  crossTableModelSeven,
  clearTableModelSeven
} from './conf'

describe('Validating table cleanups according to match', () => {
  it('Basic table cleanup validation base', async () => {
    expect(
      await organizeStructure(await clearMatchs(base.table, await crossMatchValitador({ table: base.table, config: config })))
    ).toStrictEqual(base.clearTable)
  })
  it('Table model one cleanup validation one', async () => {
    expect(
      await organizeStructure(await clearMatchs(crossTableModelOne, await crossMatchValitador({ table: crossTableModelOne, config: config })))
    ).toStrictEqual(clearTableModelOne)
  })
  it('Table model two cleanup validation two', async () => {
    expect(
      await organizeStructure(await clearMatchs(crossTableModelTwo, await crossMatchValitador({ table: crossTableModelTwo, config: config })))
    ).toStrictEqual(clearTableModelTwo)
  })
  it('Table model three cleanup validation three', async () => {
    expect(
      await organizeStructure(await clearMatchs(crossTableModelThree, await crossMatchValitador({ table: crossTableModelThree, config: config })))
    ).toStrictEqual(clearTableModelThree)
  })
  it('Table model four cleanup validation four', async () => {
    expect(
      await organizeStructure(await clearMatchs(crossTableModelFour, await crossMatchValitador({ table: crossTableModelFour, config: config })))
    ).toStrictEqual(clearTableModelFour)
  })
  it('Table model five cleanup validation five', async () => {
    expect(
      await organizeStructure(await clearMatchs(crossTableModelFive, await crossMatchValitador({ table: crossTableModelFive, config: config })))
    ).toStrictEqual(clearTableModelFive)
  })
  it('Table model six cleanup validation six', async () => {
    expect(
      await organizeStructure(await clearMatchs(crossTableModelSix, await crossMatchValitador({ table: crossTableModelSix, config: config })))
    ).toStrictEqual(clearTableModelSix)
  })
  it('Table model six cleanup validation seven', async () => {
    expect(
      await organizeStructure(await clearMatchs(crossTableModelSeven, await crossMatchValitador({ table: crossTableModelSeven, config: config })))
    ).toStrictEqual(clearTableModelSeven)
  })
})
