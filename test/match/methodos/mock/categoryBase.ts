import { IBasicTable } from '../../../../src/engines'

const callStone = {
  void: { id: 0, type: 'void', category: '' },
  dark: { id: 1, type: 'dark', category: '' },
  light: { id: 2, type: 'light', category: '' },
  red: { id: 3, type: 'red', category: '' },
  blue: { id: 4, type: 'blue', category: '' },
  green: { id: 5, type: 'green', category: '' }
}

const callStoneFour = {
  dark: { id: 1, type: 'dark', category: 'pattern_four' },
  light: { id: 2, type: 'light', category: 'pattern_four' },
  red: { id: 3, type: 'red', category: 'pattern_four' },
  blue: { id: 4, type: 'blue', category: 'pattern_four' },
  green: { id: 5, type: 'green', category: 'pattern_four' }
}

const callStoneFive = {
  dark: { id: 1, type: 'dark', category: 'pattern_five' },
  light: { id: 2, type: 'light', category: 'pattern_five' },
  red: { id: 3, type: 'red', category: 'pattern_five' },
  blue: { id: 4, type: 'blue', category: 'pattern_five' },
  green: { id: 5, type: 'green', category: 'pattern_five' }
}


const tableModelEight: IBasicTable[][] = [
  [callStone.red, callStone.red, callStone.light, callStone.light, callStone.light, callStone.light, callStone.red],
  [callStone.red, callStone.red, callStone.light, callStone.dark, callStone.light, callStone.light, callStone.red],
  [callStone.red, callStone.red, callStone.dark, callStone.blue, callStone.dark, callStone.red, callStone.red],
  [callStone.red, callStone.red, callStone.light, callStone.light, callStone.light, callStone.dark, callStone.dark],
  [callStone.red, callStone.dark, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light]
]

const tableModelNineMoveOne: IBasicTable[][] = [
  [callStone.light, callStone.blue, callStone.light, callStone.light, callStone.light, callStone.light, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.blue, callStone.blue, callStone.blue, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.red, callStone.dark, callStone.light],
  [callStone.light, callStone.light, callStone.red, callStone.blue, callStone.blue, callStone.light, callStone.red],
  [callStone.green, callStone.dark, callStone.green, callStone.green, callStone.light, callStone.dark, callStone.light]
]

const tableModelNineMoveTwo: IBasicTable[][] = [
  [callStone.light, callStone.blue, callStone.light, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.light, callStone.blue, callStone.blue, callStone.light],
  [callStone.light, callStone.red, callStone.red, callStone.red, callStone.red, callStone.dark, callStone.light],
  [callStone.light, callStone.light, callStone.blue, callStone.blue, callStone.blue, callStone.light, callStone.red],
  [callStone.green, callStone.dark, callStone.green, callStone.green, callStone.light, callStone.dark, callStone.light]
]

const tableModelTenMoveOne: IBasicTable[][] = [ // 3-0 for 3-1
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.light, callStone.blue, callStone.light, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.light, callStone.dark, callStone.light],
  [callStone.red, callStone.light, callStone.light, callStone.light, callStone.blue, callStone.light, callStone.red],
  [callStone.green, callStone.dark, callStone.green, callStone.green, callStone.blue, callStone.dark, callStone.light]
]

const tableModelTenMoveTwo: IBasicTable[][] = [ // 3-5 for 3-4
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.light, callStone.blue, callStone.light, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.light, callStone.dark, callStone.light],
  [callStone.light, callStone.red, callStone.light, callStone.light, callStone.light, callStone.blue, callStone.red],
  [callStone.green, callStone.dark, callStone.green, callStone.green, callStone.blue, callStone.dark, callStone.light]
]

const tableModelTenMoveThree: IBasicTable[][] = [ // 1-4 for 2-4
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.light, callStone.light, callStone.light, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.dark, callStone.light],
  [callStone.light, callStone.red, callStone.light, callStone.light, callStone.blue, callStone.light, callStone.red],
  [callStone.green, callStone.dark, callStone.green, callStone.green, callStone.blue, callStone.dark, callStone.light]
]

const tableModelTenMoveFour: IBasicTable[][] = [ // 1-4 for 0-4
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.blue, callStone.red, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.light, callStone.light, callStone.light, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.light, callStone.dark, callStone.light],
  [callStone.light, callStone.red, callStone.light, callStone.light, callStone.blue, callStone.light, callStone.red],
  [callStone.green, callStone.dark, callStone.green, callStone.green, callStone.blue, callStone.dark, callStone.light]
]

const tableModelTenMoveFive: IBasicTable[][] = [ // 1-4 for 1-3 -> 0-4 five!
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.blue, callStone.light, callStone.light, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.light, callStone.dark, callStone.light],
  [callStone.light, callStone.red, callStone.light, callStone.light, callStone.blue, callStone.light, callStone.red],
  [callStone.green, callStone.dark, callStone.green, callStone.green, callStone.blue, callStone.dark, callStone.light]
]

const tableModelEleven: IBasicTable[][] = [
  [callStone.light, callStone.blue, callStone.blue, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.dark, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.red, callStone.red, callStone.red, callStone.green, callStone.dark, callStone.light],
  [callStone.red, callStone.light, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.light],
  [callStone.green, callStone.dark, callStone.green, callStone.green, callStone.blue, callStone.dark, callStone.red]
]

const clearTableModelEight: IBasicTable[][] = [
  [callStoneFive.red, callStoneFour.red, callStoneFour.light, callStone.dark, callStone.light, callStone.light, callStone.dark],
  [callStone.void, callStone.dark, callStone.light, callStone.blue, callStone.dark, callStone.red, callStone.void],
  [callStone.void, callStone.void, callStone.dark, callStone.void, callStone.void, callStone.dark, callStone.void],
  [callStone.void, callStone.void, callStoneFive.light, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelEleven: IBasicTable[][] = [
  [callStone.light, callStone.blue, callStoneFive.red, callStone.light, callStone.light, callStone.light, callStone.red],
  [callStone.dark, callStone.light, callStone.green, callStone.blue, callStone.blue, callStone.red, callStoneFive.light],
  [callStone.light, callStone.dark, callStone.void, callStone.green, callStone.green, callStone.dark, callStone.red],
  [callStone.red, callStone.void, callStone.void, callStone.void, callStone.blue, callStone.dark, callStone.void],
  [callStone.green, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelBaseCategory: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStoneFour.green, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.void, callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red],
  [callStone.void, callStone.light, callStone.red, callStone.blue, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelOneCategory: IBasicTable[][] = [
  [callStone.light, callStoneFive.red, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.blue, callStone.void, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.void, callStone.blue, callStone.red, callStone.green, callStone.light, callStone.green],
  [callStone.void, callStone.void, callStone.void, callStone.blue, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.blue, callStone.void, callStone.void, callStone.void]
]

const clearTableModelTwoCategory: IBasicTable[][] = [
  [callStoneFive.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.red, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.blue, callStone.blue, callStone.red, callStone.red, callStone.green, callStoneFive.dark, callStone.green],
  [callStone.void, callStone.green, callStone.red, callStone.blue, callStone.red, callStone.void, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.green, callStone.void, callStone.void, callStone.void]
]

const clearTableModelThreeCategory: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStoneFive.light, callStone.light, callStone.red, callStone.red],
  [callStone.red, callStone.blue, callStone.red, callStone.void, callStone.blue, callStone.red, callStone.light],
  [callStone.red, callStone.blue, callStone.red, callStone.void, callStone.dark, callStone.red, callStone.dark],
  [callStone.blue, callStone.green, callStone.red, callStone.void, callStone.red, callStone.dark, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelFourCategory: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStoneFive.blue, callStone.light, callStone.red, callStone.red],
  [callStone.void, callStone.blue, callStone.red, callStone.light, callStone.red, callStone.dark, callStone.light],
  [callStone.void, callStone.light, callStone.dark, callStone.void, callStone.void, callStone.void, callStone.dark],
  [callStone.void, callStone.green, callStone.red, callStone.void, callStone.void, callStone.void, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelFiveCategory: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.dark, callStone.light, callStone.red, callStone.red],
  [callStoneFive.blue, callStone.blue, callStone.red, callStone.light, callStoneFive.blue, callStone.red, callStone.light],
  [callStone.green, callStone.light, callStone.dark, callStone.void, callStone.red, callStone.light, callStone.light],
  [callStone.void, callStone.green, callStone.red, callStone.void, callStone.void, callStone.dark, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelSixCategory: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.blue, callStone.red, callStone.red],
  [callStoneFive.dark, callStone.blue, callStone.void, callStone.light, callStone.void, callStone.light, callStone.void],
  [callStone.green, callStone.light, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.green, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelSevenCategory: IBasicTable[][] = [
  [callStoneFive.red, callStone.void, callStone.void, callStone.light, callStone.void, callStone.void, callStone.void],
  [callStoneFive.dark, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelNineMoveOne: IBasicTable[][] = [
  [callStone.light, callStone.blue, callStone.blue, callStoneFour.light, callStone.red, callStone.dark, callStone.red],
  [callStone.dark, callStone.red, callStone.red, callStoneFive.blue, callStone.blue, callStone.light, callStone.light],
  [callStone.light, callStone.light, callStone.green, callStone.red, callStone.light, callStone.dark, callStone.light],
  [callStone.light, callStone.dark, callStone.void, callStone.blue, callStone.void, callStone.void, callStone.red],
  [callStone.green, callStone.void, callStone.void, callStone.green, callStone.void, callStone.void, callStone.light]
]

const clearTableModelNineMoveTwo: IBasicTable[][] = [
  [callStone.light, callStone.blue, callStone.light, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.light, callStone.blue, callStone.blue, callStone.light],
  [callStone.light, callStone.light, callStoneFour.red, callStone.green, callStone.light, callStone.dark, callStone.light],
  [callStone.light, callStone.dark, callStone.green, callStone.void, callStone.void, callStone.light, callStone.red],
  [callStone.green, callStone.void, callStone.void, callStone.void, callStone.void, callStone.dark, callStone.light]
]

const clearTableModelTenMoveOne: IBasicTable[][] = [ // 3-0 for 3-1
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.light, callStone.blue, callStone.light, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.light, callStone.dark, callStone.light],
  [callStone.red, callStone.dark, callStone.green, callStone.green, callStone.blue, callStone.light, callStone.red],
  [callStone.green, callStone.void, callStone.void, callStone.void, callStone.blue, callStone.dark, callStone.light]
]

const clearTableModelTenMoveTwo: IBasicTable[][] = [ // 3-5 for 3-4
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.light, callStone.blue, callStone.light, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.light, callStone.dark, callStone.light],
  [callStone.light, callStone.red, callStone.green, callStone.green, callStone.blue, callStone.blue, callStone.red],
  [callStone.green, callStone.dark, callStone.void, callStone.void, callStone.void, callStone.dark, callStone.light]
]

const clearTableModelTenMoveThree: IBasicTable[][] = [ // 1-4 for 2-4
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.red, callStoneFour.light, callStone.dark, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.light, callStone.void, callStone.light, callStone.red],
  [callStone.light, callStone.red, callStone.light, callStone.green, callStone.void, callStone.dark, callStone.light],
  [callStone.green, callStone.dark, callStone.green, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelTenMoveFour: IBasicTable[][] = [ // 1-4 for 0-4
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.blue, callStone.red, callStone.red],
  [callStone.dark, callStone.blue, callStone.blue, callStone.red, callStoneFour.light, callStone.dark, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.light, callStone.red],
  [callStone.light, callStone.red, callStone.light, callStone.green, callStone.blue, callStone.dark, callStone.light],
  [callStone.green, callStone.dark, callStone.green, callStone.void, callStone.blue, callStone.void, callStone.void]
]

const clearTableModelTenMoveFive: IBasicTable[][] = [ // 1-4 for 1-3 -> 0-4 five!
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStoneFive.light, callStone.red, callStone.red],
  [callStone.dark, callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.dark, callStone.light],
  [callStone.light, callStone.red, callStone.light, callStone.light, callStone.blue, callStone.light, callStone.red],
  [callStone.light, callStone.dark, callStone.green, callStone.green, callStone.void, callStone.dark, callStone.light],
  [callStone.green, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

export const categoryBase = {
  tableModelEight,
  tableModelNineMoveOne,
  tableModelNineMoveTwo,
  tableModelTenMoveOne,
  tableModelTenMoveTwo,
  tableModelTenMoveThree,
  tableModelTenMoveFour,
  tableModelTenMoveFive,
  tableModelEleven,
  clearTableModelEight,
  clearTableModelEleven,
  clearTableModelBaseCategory,
  clearTableModelOneCategory,
  clearTableModelTwoCategory,
  clearTableModelThreeCategory,
  clearTableModelFourCategory,
  clearTableModelFiveCategory,
  clearTableModelSixCategory,
  clearTableModelSevenCategory,
  clearTableModelNineMoveOne,
  clearTableModelNineMoveTwo,
  clearTableModelTenMoveOne,
  clearTableModelTenMoveTwo,
  clearTableModelTenMoveThree,
  clearTableModelTenMoveFour,
  clearTableModelTenMoveFive
}
