import { categoryApplication } from '../methods/category/categoryApplication'
import { INextStage, IClearStage } from './interface'
import { clearMatchs, insertNewStones, organizeStructure, clearInitEffect, clearSequentialEffects } from '../../'


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
