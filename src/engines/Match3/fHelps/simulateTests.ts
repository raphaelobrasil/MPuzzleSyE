import { categoryApplication } from '../methods/category/categoryApplication'
import { IGameProcess, INextStage, IClearStage } from './interface'
import { crossMatchValitador } from './crossAction'
import { clearMatchs, insertNewStones, organizeStructure, clearInitEffect, clearSequentialEffects } from '../../'

export const gameProcess = async ({ table, effects, config, move }: IGameProcess) => {
  const matchs = await crossMatchValitador({ table, config })
  let newTable = await clearMatchs(table, matchs)
  newTable = await categoryApplication({ table: newTable, activeCategorys: effects, matchs, config, move })
  newTable = await organizeStructure(newTable)
  newTable = await insertNewStones(newTable, config)
  return newTable
}


export const clearStage = async ({ table, match, effectActive }: IClearStage) => {
  table = await clearMatchs(table, match)
  if (effectActive?.initEffect !== undefined) {
    table = await clearInitEffect({ table, effect: effectActive.initEffect })
    if (effectActive?.sequenceEffect !== undefined && effectActive.sequenceEffect[0] !== undefined) {
      table = await clearSequentialEffects({ table, effect: effectActive.sequenceEffect })
    }
  }
  return {
    tableClear: table,
    tableOrganizate: await organizeStructure(table)
  }
}

export const nextStage = async ({ table, effects, config, match, move }: INextStage) => {
  table = await clearMatchs(table, match)
  table = await categoryApplication({ table, activeCategorys: effects, matchs: match, config, move })
  table = await organizeStructure(table)
  table = await insertNewStones(table, config)
  return table
}
