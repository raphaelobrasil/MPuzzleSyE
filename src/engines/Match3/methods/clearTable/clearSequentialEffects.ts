import { IBasicTable, IClearSequentialEffects } from '../../../index'

export const clearSequentialEffects = async ({ table, effect }: IClearSequentialEffects): Promise<IBasicTable[][]> => {
  for await (const { sequence } of effect) {
    for await (const { occurrences } of sequence) {
      for await (const { periodColumn, periodRow } of occurrences) {
        table[periodRow][periodColumn] = { id: 0, type: 'void', category: '' }
      }
    }
  }
  return table
}
