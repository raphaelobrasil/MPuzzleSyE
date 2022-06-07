import { IIsMatch, ISequenceHistory, IResponseHistory, IStoneActiveSequence, IIsMatchResponse, IClearTableMatchAndEffects } from './interface'
import { crossMatchValitador } from './crossAction'
import { effectValidInMatch } from './effectValidaInMatch'
import { ISequentialEffects, sequentialEffects, ICrossOccurrence, clearMatchs, clearInitEffect, clearSequentialEffects } from '../../'

export const isMatch = async ({ table, config }: IIsMatch): Promise<IIsMatchResponse> => {
  const match = await crossMatchValitador({ table, config })
  const isMatch = (!!match.columns && !!match.columns[0]) || (!!match.cross && !!match.cross[0]) || (!!match.rows && !!match.rows[0])
  const effects = await effectValidInMatch({ match, table })
  return { isMatch, match, effects }
}

export const sequenceHistory = async ({ sequenceInitial, table, effects }: ISequentialEffects): Promise<ISequenceHistory[]> => {
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

export const clearTableMatchAndEffects = async ({
  table,
  match,
  explodeStones,
  result
}: IClearTableMatchAndEffects ) => {
  let clearTable = await clearMatchs(table, match)
  if (explodeStones !== undefined) {
    clearTable = await clearInitEffect({ table: clearTable, effect: explodeStones })
    if (result !== undefined && result[0] !== undefined) {
      clearTable = await clearSequentialEffects({ table: clearTable, effect: result })
    }
  }
  return clearTable
}