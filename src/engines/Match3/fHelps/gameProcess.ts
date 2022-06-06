import { categoryApplication } from '../methods/category/categoryApplication'
import { IGameProcess, IisMatch, INextStage, IClearStage, ISequenceHistory, IResponseHistory, IStoneActiveSequence } from './interface'
import { crossMatchValitador } from './crossAction'
import { effectValidInMatch } from './effectValidaInMatch'
import {
  clearMatchs, insertNewStones, organizeStructure, ISequentialEffects,
  sequentialEffects, ICrossOccurrence, clearInitEffect, clearSequentialEffects
} from '../../'

export const gameProcess = async ({ table, effects, config, move }: IGameProcess) => {
  const matchs = await crossMatchValitador({ table, config })
  let newTable = await clearMatchs(table, matchs)
  newTable = await categoryApplication({ table: newTable, activeCategorys: effects, matchs, config, move })
  newTable = await organizeStructure(newTable)
  newTable = await insertNewStones(newTable, config)
  return newTable
}

export const isMatch = async ({ table, config }: IisMatch) => {
  const match = await crossMatchValitador({ table, config })
  const isMatch = (!!match.columns && !!match.columns[0]) || (!!match.cross && !!match.cross[0]) || (!!match.rows && !!match.rows[0])
  const effects = await effectValidInMatch({ match, table })
  return { isMatch, match, effects }
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

export const sequenceHistory = async ({ sequenceInitial, table, effects }: ISequentialEffects) => {
  const init = await sequentialEffects({ sequenceInitial, table, effects })
  let stage = 0
  let response: IResponseHistory[] = [{ sequence: { ...init }, stage }]
  const filterInitalActiveStone = ({ row, column }: IStoneActiveSequence) => !sequenceInitial.activated.some(stoneOld =>
    row === stoneOld.row && column === stoneOld.column
  )
  let history: ISequenceHistory[] = [{
    stone: init.activated.map(active => ({ ...active, stage })).filter(active => filterInitalActiveStone(active)),
    sequence: init.newOccurrences
  }]
  while (response[stage].sequence.HasSequence) {
    const newSequencial = {
      sequence: await response[stage].sequence.newOccurrences.reduce((loot: ICrossOccurrence[], info) => [...loot, ...info.occurrences], []),
      activated: await response[stage].sequence.activated
    }
    stage++
    const verify = async () => await sequentialEffects({ sequenceInitial: newSequencial, table, effects })
    response = [...response, { sequence: await verify(), stage }]
    history = [...history, {
      stone: await (await verify()).activated.map(active => ({ ...active, stage }))
        .filter(stoneNew => !history.some(stage => stage.stone.some(stoneOld =>
          stoneNew.row === stoneOld.row && stoneNew.column === stoneOld.column
        )))
        .filter(active => filterInitalActiveStone(active)),
      sequence: await (await verify()).newOccurrences
    }]
  }

  return history
    .filter(clear => clear.sequence.length + clear.stone.length > 0)
    .map(log => ({
      sequence: log.sequence.filter((element, index, array) => array.findIndex(elementClone =>
        element.category === elementClone.category && JSON.stringify(element.occurrences) === JSON.stringify(elementClone.occurrences)
      ) === index),
      stone: log.stone.filter((element, index, array) => array.findIndex(elementClone =>
        JSON.stringify(element) === JSON.stringify(elementClone)
      ) === index)
    }))
    .map(log => ({
      ...log,
      sequence: log.sequence.map((element, index) => ({ ...element, order: index + 1 }))
    }))
}
