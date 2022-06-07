import { IEffects } from '../interface'
import { ICrossOccurrence } from '../../../'

export const patternFive = async ({ table, stone }: IEffects) => {
  let sequence: ICrossOccurrence[] = []
  table.forEach((listRow, row) => listRow.forEach((cell, column) => {
    if (stone.id === cell.id) {
      if (sequence[0] !== undefined) {
        sequence = [...sequence, { periodRow: row, periodColumn: column }]
      } else {
        sequence = [{ periodRow: row, periodColumn: column }]
      }
    }
  }))
  return sequence
}
