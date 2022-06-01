/* eslint-disable no-undef */
import {
  base,
  config,
  crossMatchValitador,
  clearMatchs,
  crossTableModelOne,
  crossTableModelTwo,
  crossTableModelThree,
  crossTableModelFour,
  crossTableModelFive,
  crossTableModelSix,
  insertNewStones
} from './conf'

describe('Validating insertion of new random stones', () => {
  it('New basic table with random stones', async () => {
    const tableValidator = await crossMatchValitador({ table: base.table, config: config })
    const tableValidatorClear = await clearMatchs(base.table, tableValidator)
    const newTableValidator = await insertNewStones(tableValidatorClear, config)

    tableValidatorClear.forEach((row, keyRow) => {
      row.forEach((column, keyColumn) => {
        if (Number(column.id) === Number(0)) {
          expect(newTableValidator[keyRow][keyColumn]).not.toStrictEqual(column)
        } else {
          expect(newTableValidator[keyRow][keyColumn]).toStrictEqual(column)
        }
      })
    })
  })

  it('New table model one with random stones', async () => {
    const tableValidator = await crossMatchValitador({ table: crossTableModelOne, config: config })
    const tableValidatorClear = await clearMatchs(crossTableModelOne, tableValidator)
    const newTableValidator = await insertNewStones(tableValidatorClear, config)

    tableValidatorClear.forEach((row, keyRow) => {
      row.forEach((column, keyColumn) => {
        if (Number(column.id) === Number(0)) {
          expect(newTableValidator[keyRow][keyColumn]).not.toStrictEqual(column)
        } else {
          expect(newTableValidator[keyRow][keyColumn]).toStrictEqual(column)
        }
      })
    })
  })

  it('New table model Two with random stones', async () => {
    const tableValidator = await crossMatchValitador({ table: crossTableModelTwo, config: config })
    const tableValidatorClear = await clearMatchs(crossTableModelTwo, tableValidator)
    const newTableValidator = await insertNewStones(tableValidatorClear, config)

    tableValidatorClear.forEach((row, keyRow) => {
      row.forEach((column, keyColumn) => {
        if (Number(column.id) === Number(0)) {
          expect(newTableValidator[keyRow][keyColumn]).not.toStrictEqual(column)
        } else {
          expect(newTableValidator[keyRow][keyColumn]).toStrictEqual(column)
        }
      })
    })
  })

  it('New table model Three with random stones', async () => {
    const tableValidator = await crossMatchValitador({ table: crossTableModelThree, config: config })
    const tableValidatorClear = await clearMatchs(crossTableModelThree, tableValidator)
    const newTableValidator = await insertNewStones(tableValidatorClear, config)

    tableValidatorClear.forEach((row, keyRow) => {
      row.forEach((column, keyColumn) => {
        if (Number(column.id) === Number(0)) {
          expect(newTableValidator[keyRow][keyColumn]).not.toStrictEqual(column)
        } else {
          expect(newTableValidator[keyRow][keyColumn]).toStrictEqual(column)
        }
      })
    })
  })

  it('New table model four with random stones', async () => {
    const tableValidator = await crossMatchValitador({ table: crossTableModelFour, config: config })
    const tableValidatorClear = await clearMatchs(crossTableModelFour, tableValidator)
    const newTableValidator = await insertNewStones(tableValidatorClear, config)

    tableValidatorClear.forEach((row, keyRow) => {
      row.forEach((column, keyColumn) => {
        if (Number(column.id) === Number(0)) {
          expect(newTableValidator[keyRow][keyColumn]).not.toStrictEqual(column)
        } else {
          expect(newTableValidator[keyRow][keyColumn]).toStrictEqual(column)
        }
      })
    })
  })

  it('New table model five with random stones', async () => {
    const tableValidator = await crossMatchValitador({ table: crossTableModelFive, config: config })
    const tableValidatorClear = await clearMatchs(crossTableModelFive, tableValidator)
    const newTableValidator = await insertNewStones(tableValidatorClear, config)

    tableValidatorClear.forEach((row, keyRow) => {
      row.forEach((column, keyColumn) => {
        if (Number(column.id) === Number(0)) {
          expect(newTableValidator[keyRow][keyColumn]).not.toStrictEqual(column)
        } else {
          expect(newTableValidator[keyRow][keyColumn]).toStrictEqual(column)
        }
      })
    })
  })

  it('New table model six with random stones', async () => {
    const tableValidator = await crossMatchValitador({ table: crossTableModelSix, config: config })
    const tableValidatorClear = await clearMatchs(crossTableModelSix, tableValidator)
    const newTableValidator = await insertNewStones(tableValidatorClear, config)

    tableValidatorClear.forEach((row, keyRow) => {
      row.forEach((column, keyColumn) => {
        if (Number(column.id) === Number(0)) {
          expect(newTableValidator[keyRow][keyColumn]).not.toStrictEqual(column)
        } else {
          expect(newTableValidator[keyRow][keyColumn]).toStrictEqual(column)
        }
      })
    })
  })
})
