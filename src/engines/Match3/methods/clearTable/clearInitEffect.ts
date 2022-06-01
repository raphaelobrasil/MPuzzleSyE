import { IBasicTable, IClearInitEffect } from '../../../index'

export const clearInitEffect = async ({ table, effect }: IClearInitEffect): Promise<IBasicTable[][]> => {
  for await (const { periodColumn, periodRow } of effect.sequence) {
    table[periodRow][periodColumn] = { id: 0, type: 'void', category: '' }
  }
  return table
}
