import { IStoneDefinition, IStoneBasicConfig } from './interface'
import { STONES, STONESCATEGORY, STONESLEVEL } from './stone.ENUM'

export const stoneConfig = ({
  stones = Object.values(STONES),
  categorys = Object.values(STONESCATEGORY)
}:IStoneBasicConfig): IStoneDefinition<number, string, string> => {
  const LEVEL = Object.values(STONESLEVEL)
  const voidStone: IStoneDefinition<number, string, string> = [{ id: 0, type: 'void', category: [] }]

  let listCategory: string[] = []
  categorys.forEach(category => {
    listCategory = [...new Set([...listCategory, ...LEVEL.map(level => `${category}${level}`)])]
  })

  const newListStone: IStoneDefinition<number, string, string> = stones.map((newStone, keyStone) => {
    return {
      id: keyStone + 1,
      type: newStone,
      category: listCategory
    }
  })

  return [...new Set([...voidStone, ...newListStone])]
}
