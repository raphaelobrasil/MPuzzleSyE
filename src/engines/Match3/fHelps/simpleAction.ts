import { IMatchValidate, ISimpleMatch } from './interface'
import { occurrenceRanger, filterMatchSimple } from '../methods/simpleMatch/simpleMatch'
import { extractRow, extractColumn } from '../methods/baseExtract/baseExctract'

export const simpleMatchValitador = async ({
  table,
  config
}:ISimpleMatch): Promise<IMatchValidate> => {
  const rowMatch = filterMatchSimple({
    table: occurrenceRanger(
      { table: extractRow(table), stoneList: config }
    ),
    direction: 'row'
  })
  const columnMatch = filterMatchSimple({
    table: occurrenceRanger(
      { table: extractColumn(table), stoneList: config }
    ),
    direction: 'column'
  })

  return {
    rows: await rowMatch,
    columns: await columnMatch
  }
}
