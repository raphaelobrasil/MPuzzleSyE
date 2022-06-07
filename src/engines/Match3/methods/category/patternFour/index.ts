import { IEffects } from '../interface'
import { ICrossOccurrence } from '../../../'

export const patternFour = async ({ row, column, table }: IEffects) => {
  const limitRow = table[0].length - 1
  const limitColumn = table.length - 1
  const limitInit = 0
  const right = column + 1
  const left = column - 1
  const top = row - 1
  const down = row + 1
  let sequence: ICrossOccurrence[] = [{ periodRow: row, periodColumn: column }]
  if (left >= limitInit) {
    sequence = [...sequence, { periodRow: row, periodColumn: left }]
  }
  if (right <= limitRow) {
    sequence = [...sequence, { periodRow: row, periodColumn: right }]
  }
  if (top >= limitInit) {
    sequence = [...sequence, { periodRow: top, periodColumn: column }]
  }
  if (down <= limitColumn) {
    sequence = [...sequence, { periodRow: down, periodColumn: column }]
  }
  return sequence
}
