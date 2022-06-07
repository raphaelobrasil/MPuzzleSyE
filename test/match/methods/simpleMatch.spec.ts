import {
  occurrenceRanger,
  filterMatchSimple,
  extractRow,
  extractColumn,
  configDefault,
  configCustom,
  table,
  tableRow,
  occurrentRow,
  simulateRowOcurrence,
  rangerMatchRow,
  rowMatchTestOne,
  tableColumn,
  occurrentColumn,
  rangerMatchColumn,
  stoneConfig,
  config,
  IMatchValidate,
  simpleMatchValitador
} from '../config'

describe('Validating stones and categories configuration', () => {
  it('Validating default configuration', () => {
    expect(config).toStrictEqual(configDefault)
  })
  it('Validating custom configuration', () => {
    expect(stoneConfig({
      stones: ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE'],
      categorys: ['A', 'B']
    })).toStrictEqual(configCustom)
  })
})

describe('Dice extraction per row on the board', () => {
  const rows = extractRow(table)
  it('Extract row', () => {
    expect(rows).toStrictEqual(tableRow)
  })

  const rowsOcurrence = occurrenceRanger({ table: rows, stoneList: config })
  it('Detect every occurrence of match in the line', () => {
    expect(rowsOcurrence).toMatchObject(occurrentRow)
  })

  it('Filter matches from each table row', async () => {
    const filterOcurrenceRows = await filterMatchSimple({ table: simulateRowOcurrence, direction: 'row' })
    expect(filterOcurrenceRows).toMatchObject(rangerMatchRow)
  })

  it('Checks if it correctly filters and clears the simple match in the table row', async () => {
    const simpleFilterComplete = await filterMatchSimple({ table: rowsOcurrence, direction: 'row' })
    expect(simpleFilterComplete).toMatchObject(rowMatchTestOne)
  })
})

describe('Extraction of data by column on the board', () => {
  const columns = extractColumn(table)
  it('Extract column', () => {
    expect(columns).toStrictEqual(tableColumn)
  })

  const columnsOcurrence = occurrenceRanger({ table: columns, stoneList: config })
  it('Detect each occurrence of match in the column', () => {
    expect(columnsOcurrence).toMatchObject(occurrentColumn)
  })

  it('Checks if it correctly filters and clears the simple match on the table columns', async () => {
    const filterCompleteColumns = await filterMatchSimple({ table: columnsOcurrence, direction: 'column' })
    expect(filterCompleteColumns).toMatchObject(rangerMatchColumn)
  })
})

describe('Validating matchs rows and columns with fHelps', () => {
  const endTable: IMatchValidate = {
    rows: rowMatchTestOne,
    columns: rangerMatchColumn
  }
  it('Validation simple match', async () => {
    const simpleMatchAwait = await simpleMatchValitador({ table: table, config: config })
    expect(simpleMatchAwait).toStrictEqual(endTable)
  })
})
