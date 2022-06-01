import { IBasicTable, IMatchValidate, IFilterMatchSimple } from '../../../index'

const verifyElem = (filter: IFilterMatchSimple[][], period: number, key: number) =>
  filter.some(order =>
    order.filter(loot => loot.period === period)
      .some(loot =>
        loot.orderPeriod.some(occurrences => occurrences.find(elem => elem.occurrence === key))
      )
  )

export const clearMatchs = async (table: IBasicTable[][], matchs: IMatchValidate) => {
  try {
    const { rows, columns, cross } = matchs
    let newTable = [...table]
    if (rows) {
      newTable = newTable.map((row, keyRow) =>
        row.map((column, keyColumn) => {
          if (verifyElem(rows, keyRow, keyColumn)) {
            return { id: 0, type: 'void', category: '' }
          } else {
            return column
          }
        })
      )
    }
    if (columns) {
      columns.forEach(row => {
        row.forEach(period => {
          period.orderPeriod.forEach(loots => {
            loots.forEach(occurrences => {
              newTable[occurrences.occurrence][period.period] = { id: 0, type: 'void', category: '' }
            })
          })
        })
      })
    }
    if (cross) {
      await cross.forEach(match => {
        match.occurrences.forEach(elem => {
          newTable[elem.periodRow][elem.periodColumn] = { id: 0, type: 'void', category: '' }
        })
      })
    }
    return newTable
  } catch (error) {
    console.log('clearMatchs_error:', error)
    return table
  }
}
