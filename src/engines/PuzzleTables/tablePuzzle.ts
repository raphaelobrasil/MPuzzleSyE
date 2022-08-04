import { stoneGacha, IConfigTable, IBasicTable } from '../index'

const tablePuzzle = ({
  row,
  column,
  stoneConfig
}: IConfigTable): IBasicTable[][] => {
  const columnPuzzle = () =>
    Array(column).fill(null).map(_c => {
      const rng = stoneGacha.stonesRng.unitStone(stoneConfig.length)
      return {
        id: stoneConfig[rng].id,
        type: stoneConfig[rng].type,
        category: ''
      }
    })
  return Array(row).fill(null).map(_r => columnPuzzle())
}

export {
  tablePuzzle
}
