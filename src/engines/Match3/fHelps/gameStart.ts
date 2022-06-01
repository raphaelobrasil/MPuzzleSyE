import { tablePuzzle, IMatchValidate, clearMatchs, insertNewStones, IGameStart } from '../../'
import { crossMatchValitador } from './crossAction'

const loopValide = ({ rows, columns, cross }: IMatchValidate) =>
  (!!rows && !!rows[0]) || (!!columns && !!columns[0]) || (!!cross && !!cross[0])

export const gameStart = async ({ rowCount, columnCount, config }: IGameStart) => {
  let newTable = tablePuzzle.tablePuzzle({ row: rowCount, column: columnCount, stoneConfig: config })
  let matchsDetected = await crossMatchValitador({ table: newTable, config: config })

  while (loopValide(matchsDetected)) {
    newTable = await insertNewStones(await clearMatchs(newTable, matchsDetected), config)
    matchsDetected = await crossMatchValitador({ table: newTable, config: config })
  }

  return newTable
}
