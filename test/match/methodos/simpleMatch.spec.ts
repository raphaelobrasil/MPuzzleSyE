/* eslint-disable no-undef */
import {
  occurrenceRanger,
  filterMatchSimple,
  extractRow,
  extractColumn,
  base,
  row,
  column,
  stoneConfig,
  config,
  IMatchValidate,
  simpleMatchValitador
} from './conf'

describe('Validating stones and categories configuration', () => {
  it('Validating default configuration', () => {
    expect(config).toStrictEqual(base.configDefault)
  })
  it('Validating custom configuration', () => {
    expect(stoneConfig({
      stones: ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'],
      categorys: ['A', 'B']
    })).toStrictEqual(base.configCustom)
  })
})

describe('Dice extraction per row on the board', () => {
  const rows = extractRow(base.table)
  it('Extract row', () => {
    expect(rows).toStrictEqual(base.tableRow)
  })

  const rowsOcurrence = occurrenceRanger({ table: rows, stoneList: config })
  it('Detect every occurrence of match in the line', () => {
    expect(rowsOcurrence).toMatchObject(row.occurrentRow)
  })

  it('Filter matches from each table row', async () => {
    const filterOcurrenceRows = await filterMatchSimple({ table: row.simulateRowOcurrence, direction: 'row' })
    expect(filterOcurrenceRows).toMatchObject(row.rangerMatchRow)
  })

  it('Checks if it correctly filters and clears the simple match in the table row', async () => {
    const simpleFilterComplete = await filterMatchSimple({ table: rowsOcurrence, direction: 'row' })
    expect(simpleFilterComplete).toMatchObject(row.rowMatchTestOne)
  })
})

describe('Extraction of data by column on the board', () => {
  const columns = extractColumn(base.table)
  it('Extract column', () => {
    expect(columns).toStrictEqual(base.tableColumn)
  })

  const columnsOcurrence = occurrenceRanger({ table: columns, stoneList: config })
  it('Detect each occurrence of match in the column', () => {
    expect(columnsOcurrence).toMatchObject(column.occurrentColumn)
  })

  it('Checks if it correctly filters and clears the simple match on the table columns', async () => {
    const filterCompleteColumns = await filterMatchSimple({ table: columnsOcurrence, direction: 'column' })
    expect(filterCompleteColumns).toMatchObject(column.rangerMatchColumn)
  })
})

describe('Validating matchs rows and columns with fHelps', () => {
  const endTable: IMatchValidate = {
    rows: row.rowMatchTestOne,
    columns: column.rangerMatchColumn
  }
  it('Validation simple match', async () => {
    const simpleMatchAwait = await simpleMatchValitador({ table: base.table, config: config })
    expect(simpleMatchAwait).toStrictEqual(endTable)
  })
})
