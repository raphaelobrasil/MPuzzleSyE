import { IStoneDefinition, IBasicTable } from '../../../../src/engines'
import { IMaskBaseTable, iOccurrence } from '../../../../src/engines/Match3'

const categoryDefault = [
  'pattern_default', 'pattern_four', 'pattern_five'
]

const categoryCustom = [
  'A_default', 'A_four', 'A_five',
  'B_default', 'B_four', 'B_five'
]

const configDefault: IStoneDefinition<number, string, string> = [
  { id: 0, type: 'void', category: [] },
  { id: 1, type: 'dark', category: categoryDefault },
  { id: 2, type: 'light', category: categoryDefault },
  { id: 3, type: 'red', category: categoryDefault },
  { id: 4, type: 'blue', category: categoryDefault },
  { id: 5, type: 'green', category: categoryDefault }
]

const configCustom: IStoneDefinition<number, string, string> = [
  { id: 0, type: 'void', category: [] },
  { id: 1, type: 'ONE', category: categoryCustom },
  { id: 2, type: 'TWO', category: categoryCustom },
  { id: 3, type: 'THREE', category: categoryCustom },
  { id: 4, type: 'FOUR', category: categoryCustom },
  { id: 5, type: 'FIVE', category: categoryCustom }
]

const callStone = {
  void: { id: 0, type: 'void', category: '' },
  dark: { id: 1, type: 'dark', category: '' },
  light: { id: 2, type: 'light', category: '' },
  red: { id: 3, type: 'red', category: '' },
  blue: { id: 4, type: 'blue', category: '' },
  green: { id: 5, type: 'green', category: '' }
}

const table: IBasicTable[][] = [
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.light, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.green, callStone.green, callStone.green],
  [callStone.red, callStone.light, callStone.red, callStone.blue, callStone.blue, callStone.light, callStone.red],
  [callStone.green, callStone.green, callStone.green, callStone.green, callStone.light, callStone.light, callStone.light]
]

const clearTable: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.void, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.void, callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red],
  [callStone.void, callStone.light, callStone.red, callStone.blue, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const tableRow: IMaskBaseTable = {
  table: [
    [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
    [callStone.light, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
    [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.green, callStone.green, callStone.green],
    [callStone.red, callStone.light, callStone.red, callStone.blue, callStone.blue, callStone.light, callStone.red],
    [callStone.green, callStone.green, callStone.green, callStone.green, callStone.light, callStone.light, callStone.light]
  ],
  countRow: 5,
  countColumn: 7
}

const tableColumn: IMaskBaseTable = {
  table: [
    [callStone.light, callStone.light, callStone.light, callStone.red, callStone.green],
    [callStone.blue, callStone.blue, callStone.red, callStone.light, callStone.green],
    [callStone.red, callStone.red, callStone.blue, callStone.red, callStone.green],
    [callStone.blue, callStone.light, callStone.red, callStone.blue, callStone.green],
    [callStone.light, callStone.blue, callStone.green, callStone.blue, callStone.light],
    [callStone.light, callStone.red, callStone.green, callStone.light, callStone.light],
    [callStone.red, callStone.light, callStone.green, callStone.red, callStone.light]
  ],
  countRow: 7,
  countColumn: 5
}

const callStoneOcorrence = {
  dark (occurrence: number): iOccurrence { return { id: 1, type: 'dark', category: '', occurrence: occurrence } },
  light (occurrence: number): iOccurrence { return { id: 2, type: 'light', category: '', occurrence: occurrence } },
  red (occurrence: number): iOccurrence { return { id: 3, type: 'red', category: '', occurrence: occurrence } },
  blue (occurrence: number): iOccurrence { return { id: 4, type: 'blue', category: '', occurrence: occurrence } },
  green (occurrence: number): iOccurrence { return { id: 5, type: 'green', category: '', occurrence: occurrence } }
}

export const base = {
  table,
  tableRow,
  tableColumn,
  configDefault,
  configCustom,
  callStoneOcorrence,
  clearTable
}
