import { IBasicTable } from '../../../engines'

const checkingEmptySpaces = (count: number, column: IBasicTable[]) => column.length < count
  ? [...column, ...Array(count - column.length).fill({ id: 0, type: 'void', category: '' }).map(voidStone => voidStone)]
  : [...column]

const convertTable = (table: IBasicTable[][]) => table[0].map((_x, column) => table.map(row => row[column]))

export const organizeStructure = async (table: IBasicTable[][]) => {
  const convertColumnToRow = convertTable(table)
  const countColumns = convertColumnToRow[0].length
  const organizateStonesColumn = convertColumnToRow.map(column => column.filter(stones => stones.id !== 0))
  const includeNewVoids = await organizateStonesColumn.map(column => checkingEmptySpaces(countColumns, column))
  return convertTable(includeNewVoids)
}
