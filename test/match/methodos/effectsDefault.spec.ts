/* eslint-disable no-undef */
import {
  activeEffects,
  sequenceHistory,
  activeCategorys,
  callStoneFour,
  callStoneFive,
  tableModelEffectOne,
  activateEffectTableOneModelOne,
  activateEffectTableOneModelTwo,
  activateEffectTableOneModelThree,
  activateEffectTableOneModelFour,
  activateEffectTableOneModelThreeSequence,
  activateEffectTableOneModelFourSequence,
  tableModelEffectTwo,
  activateEffectTableTwoModelOne,
  activateEffectTableTwoModelOneSequence,
  activateEffectTableTwoModelTwo,
  activateEffectTableTwoModelTwoSequence,
  activateEffectTableTwoModelThree,
  activateEffectTableTwoModelThreeSequence,
  activateEffectTableTwoModelFour,
  activateEffectTableTwoModelFourSequence,
  activateEffectTableTwoModelFive,
  activateEffectTableTwoModelFiveSequence,
  tableModelEffectThree,
  activateEffectTableThreeModelOne,
  activateEffectTableThreeModelOneSequence,
  activateEffectTableThreeModelTwo,
  activateEffectTableThreeModelTwoSequence
} from './conf'

describe('Validating the activation of effects of the stones from table 1', () => {
  it('Model 1 stone effect activation', async () => {
    const tableState = { table: tableModelEffectOne, activeCategorys }
    const moveAction = { row: 0, column: 0, stone: callStoneFour.light }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableOneModelOne)
  })
  it('Model 2 stone effect activation', async () => {
    const tableState = { table: tableModelEffectOne, activeCategorys }
    const moveAction = { row: 2, column: 2, stone: callStoneFour.blue }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableOneModelTwo)
  })
  it('Model 3 stone effect activation', async () => {
    const tableState = { table: tableModelEffectOne, activeCategorys }
    const moveAction = { row: 3, column: 5, stone: callStoneFour.light }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableOneModelThree)
  })
  it('Model 4 stone effect activation', async () => {
    const tableState = { table: tableModelEffectOne, activeCategorys }
    const moveAction = { row: 4, column: 5, stone: callStoneFour.blue }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableOneModelFour)
  })
  it('Activation of consecutive stone model 3 effect', async () => {
    const tableState = { table: tableModelEffectOne, activeCategorys }
    const moveAction = { row: 3, column: 5, stone: callStoneFour.light }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    const sequence = await sequenceHistory({ sequenceInitial: effectReact, table: tableModelEffectOne, effects: activeCategorys })
    expect(sequence).toStrictEqual(activateEffectTableOneModelThreeSequence)
  })
  it('Activation of consecutive stone model 4 effect', async () => {
    const tableState = { table: tableModelEffectOne, activeCategorys }
    const moveAction = { row: 4, column: 5, stone: callStoneFour.blue }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    const sequence = await sequenceHistory({ sequenceInitial: effectReact, table: tableModelEffectOne, effects: activeCategorys })
    expect(sequence).toStrictEqual(activateEffectTableOneModelFourSequence)
  })
})

describe('Validating the activation of effects of the stones from table 2', () => {
  it('Model 1 stone effect activation', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 0, column: 0, stone: callStoneFour.light }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableTwoModelOne)
  })
  it('Activation of consecutive stone model 1 effect', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 0, column: 0, stone: callStoneFour.light }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    const sequence = await sequenceHistory({ sequenceInitial: effectReact, table: tableModelEffectTwo, effects: activeCategorys })
    expect(sequence).toStrictEqual(activateEffectTableTwoModelOneSequence)
  })
  it('Model 2 stone effect activation', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 1, column: 0, stone: callStoneFour.light }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableTwoModelTwo)
  })
  it('Activation of consecutive stone model 2 effect', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 1, column: 0, stone: callStoneFour.light }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    const sequence = await sequenceHistory({ sequenceInitial: effectReact, table: tableModelEffectTwo, effects: activeCategorys })
    expect(sequence).toStrictEqual(activateEffectTableTwoModelTwoSequence)
  })
  it('Model 3 stone effect activation', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 1, column: 1, stone: callStoneFour.blue }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableTwoModelThree)
  })
  it('Activation of consecutive stone model 3 effect', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 1, column: 1, stone: callStoneFour.blue }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    const sequence = await sequenceHistory({ sequenceInitial: effectReact, table: tableModelEffectTwo, effects: activeCategorys })
    expect(sequence).toStrictEqual(activateEffectTableTwoModelThreeSequence)
  })
  it('Model 4 stone effect activation', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 3, column: 1, stone: callStoneFour.light }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableTwoModelFour)
  })
  it('Activation of consecutive stone model 4 effect', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 3, column: 1, stone: callStoneFour.light }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    const sequence = await sequenceHistory({ sequenceInitial: effectReact, table: tableModelEffectTwo, effects: activeCategorys })
    expect(sequence).toStrictEqual(activateEffectTableTwoModelFourSequence)
  })
  it('Model 5 stone effect activation', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 3, column: 3, stone: callStoneFive.blue }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableTwoModelFive)
  })
  it('Activation of consecutive stone model 5 effect', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 3, column: 3, stone: callStoneFive.blue }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    const sequence = await sequenceHistory({ sequenceInitial: effectReact, table: tableModelEffectTwo, effects: activeCategorys })
    expect(sequence).toStrictEqual(activateEffectTableTwoModelFiveSequence)
  })
})

describe('Validating the activation of effects of the stones from table 3', () => {
  it('Model 1 stone effect activation', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 2, column: 3, stone: callStoneFour.red }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableThreeModelOne)
  })
  it('Activation of consecutive stone model 1 effect', async () => {
    const tableState = { table: tableModelEffectThree, activeCategorys }
    const moveAction = { row: 2, column: 3, stone: callStoneFour.red }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    const sequence = await sequenceHistory({ sequenceInitial: effectReact, table: tableModelEffectThree, effects: activeCategorys })
    expect(sequence).toStrictEqual(activateEffectTableThreeModelOneSequence)
  })
  it('Model 2 stone effect activation', async () => {
    const tableState = { table: tableModelEffectTwo, activeCategorys }
    const moveAction = { row: 2, column: 2, stone: callStoneFive.blue }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    expect(effectReact).toStrictEqual(activateEffectTableThreeModelTwo)
  })
  it('Activation of consecutive stone model 2 effect', async () => {
    const tableState = { table: tableModelEffectThree, activeCategorys }
    const moveAction = { row: 2, column: 2, stone: callStoneFive.blue }
    const effectReact = await activeEffects({ ...tableState, ...moveAction })
    const sequence = await sequenceHistory({ sequenceInitial: effectReact, table: tableModelEffectThree, effects: activeCategorys })
    expect(sequence).toStrictEqual(activateEffectTableThreeModelTwoSequence)
  })
})
