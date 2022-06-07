import { stoneConfig, category } from './methods'
import { IBasicTable } from './interfaces'

export const config = stoneConfig({})
export const { categoryApplication, defaultfive, defaultfour } = category

export const activeCategorys = [
  {
    effect: defaultfour.patternFour,
    category: 'pattern_four',
    stoneIds: [1, 2, 3, 4, 5],
    rule: 4
  },
  {
    effect: defaultfive.patternFive,
    category: 'pattern_five',
    stoneIds: [1, 2, 3, 4, 5],
    rule: 5
  }
]

export const testInsertionNewStones = (tableMock: IBasicTable[][], tableTest: IBasicTable[][]) =>
  tableMock.forEach((e, row) =>
    e.forEach((cell, column) => {
      if (cell.type === 'void') {
        expect(tableTest[row][column]).not.toStrictEqual(cell)
      } else {
        expect(tableTest[row][column]).toStrictEqual(cell)
      }
  })
)

export const callStone = {
  dark: { id: 1, type: 'dark', category: '' },
  light: { id: 2, type: 'light', category: '' },
  red: { id: 3, type: 'red', category: '' },
  blue: { id: 4, type: 'blue', category: '' },
  green: { id: 5, type: 'green', category: '' }
}

export const callStoneFour = {
  dark: { id: 1, type: 'dark', category: 'pattern_four' },
  light: { id: 2, type: 'light', category: 'pattern_four' },
  red: { id: 3, type: 'red', category: 'pattern_four' },
  blue: { id: 4, type: 'blue', category: 'pattern_four' },
  green: { id: 5, type: 'green', category: 'pattern_four' }
}

export const callStoneFive = {
  dark: { id: 1, type: 'dark', category: 'pattern_five' },
  light: { id: 2, type: 'light', category: 'pattern_five' },
  red: { id: 3, type: 'red', category: 'pattern_five' },
  blue: { id: 4, type: 'blue', category: 'pattern_five' },
  green: { id: 5, type: 'green', category: 'pattern_five' }
}