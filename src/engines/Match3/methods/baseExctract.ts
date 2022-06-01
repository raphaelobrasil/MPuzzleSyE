import { IMaskBaseTable } from './interface'
import { IBasicTable } from '../../index'

const extractRow = (table:IBasicTable[][]):IMaskBaseTable => ({
  table: table,
  countColumn: table[0].length,
  countRow: table.length
})

const extractColumn = (table:IBasicTable[][]):IMaskBaseTable => ({
  table: table[0].map((x, columnKey) => table.map(row => row[columnKey])),
  countColumn: table.length,
  countRow: table[0].length
})

export {
  extractRow,
  extractColumn
}
