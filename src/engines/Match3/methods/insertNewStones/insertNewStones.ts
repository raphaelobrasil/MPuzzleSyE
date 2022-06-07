import { stoneGacha, IBasicTable, IStoneDefinition } from '../../..'

export const insertNewStones = async (table: IBasicTable[][], stoneConfig: IStoneDefinition<number, string, string>) => {
  try {
    return table.map(row => row.map(column => {
      if (Number(column.id) === Number(0)) {
        const rng = stoneGacha.stonesRng.unitStone()
        return {
          id: stoneConfig[rng].id,
          type: stoneConfig[rng].type,
          category: ''
        }
      } else {
        return column
      }
    }))
  } catch (error) {
    console.log('insertNewStones_error', error)
    return table
  }
}
