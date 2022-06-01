import { IFilterMatchCross, IFilterMatchSimple } from '../../../../..'
import { IChain } from '../../../crossMatch.interface'
import { valide, newFormatRange } from './utils'
import { chainCross } from './chainCross'

export const chainDetect = (range: IFilterMatchSimple[]): IFilterMatchCross[] => {
  const getRows = range.filter(rows => rows.direction === 'row')
  const getColumns = range.filter(columns => columns.direction === 'column')

  return chainCross(
    getRows.reduce((newLootRows: IChain[], periodRows, keyRows) => {
      return [
        ...newLootRows,
        ...getColumns.reduce((newLootColumns: IChain[], periodColumns, keyColumns) => {
          if (valide({ rows: periodRows, columns: periodColumns })) {
            const key = keyRows + keyColumns
            return [...newLootColumns,
              newFormatRange({ orderPeriod: periodRows, period: periodColumns.period, key }),
              newFormatRange({ orderPeriod: periodColumns, period: periodRows.period, key })
            ]
          } else {
            return newLootColumns
          }
        },
        [])
      ]
    },
    [])
  )
}
