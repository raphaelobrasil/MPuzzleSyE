import { categoryApplication } from '../methods/category/categoryApplication'
import {
  clearMatchs, insertNewStones, organizeStructure, activeEffectsInMatchs, isMatch,
  sequenceHistory, ICompletProcess, IFEventsProcess, clearTableMatchAndEffects
} from '../../'

export const fEventsProcess = async ({ table, config, activeCategorys, move }: IFEventsProcess) => {
  const matchVerify = await isMatch({ table, config })
  const { effects, match } = matchVerify
  let response: ICompletProcess = {
    isMatch: matchVerify,
    initialEffect: null,
    sequenceEffect: null,
    clearTable: null,
    categoryApply: null,
    organizeTable: null,
    newTable: null
  }
  if (effects[0] !== undefined) {
    const explodeStones = await activeEffectsInMatchs({ table, activeCategorys, occurrences: effects })
    const result = await sequenceHistory({ sequenceInitial: explodeStones, table, effects: activeCategorys })
    const clearTable = await clearTableMatchAndEffects({ table, match, explodeStones, result })
    const applyCategory = await categoryApplication({ table: clearTable, activeCategorys, matchs: match, config, move })
    const ReorganizeNewTable = await organizeStructure(applyCategory)
    response = {
      ...response,
      initialEffect: explodeStones,
      sequenceEffect: result,
      clearTable: clearTable,
      categoryApply: applyCategory,
      organizeTable: ReorganizeNewTable
    }
  } else if (matchVerify.isMatch) {
    const clearTable = await clearMatchs(table, match)
    const applyCategory = await categoryApplication({ table: clearTable, activeCategorys, matchs: match, config, move })
    const ReorganizeNewTable = await organizeStructure(applyCategory)
    response = {
      ...response,
      clearTable: clearTable,
      categoryApply: applyCategory,
      organizeTable: ReorganizeNewTable
    }
  }
  if (response.organizeTable) {
    const newTable = await insertNewStones(response.organizeTable, config)
    response = { ...response, newTable: newTable }
  }
  return response
}