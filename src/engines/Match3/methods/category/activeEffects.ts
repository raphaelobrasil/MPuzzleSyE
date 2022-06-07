import { IActiveEffects, ISequentialEffects, INewSequencial, IActiveEffectsInMatchs } from './interface'
import { ICrossOccurrence, ISequencial } from '../../'

export const activeEffects = async ({ table, activeCategorys, row, column, stone }: IActiveEffects) => {
  let occurrences: ICrossOccurrence[] = []
  await activeCategorys.forEach(async (effects) => {
    if (effects.category === stone.category) {
      occurrences = await effects.effect({ row, column, table, stone })
    }
  })
  return {
    sequence: occurrences,
    activated: [{ row, column }]
  }
}

export const activeEffectsInMatchs = async ({ table, activeCategorys, occurrences }: IActiveEffectsInMatchs): Promise<ISequencial> => {
  let response: ICrossOccurrence[] = []
  for (const { row, column, stone } of occurrences) {
    for await (const effects of activeCategorys) {
      if (effects.category === stone.category) {
        const newOccurrences = await effects.effect({ row, column, table, stone })
        if (response[0] === undefined) {
          response = newOccurrences
        } else {
          response = [...response, ...newOccurrences]
            .filter((occurrenceA, index, array) =>
              array.findIndex(occurrenceB =>
                occurrenceA.periodColumn === occurrenceB.periodColumn && occurrenceA.periodRow === occurrenceB.periodRow
              ) === index
            )
        }
      }
    }
  }
  return {
    sequence: response,
    activated: occurrences.map(({ row, column }) => ({ row, column }))
  }
}

const formatSequencialEffect = async (occurrences: ICrossOccurrence[], category: string, order: number) => ({
  occurrences, category, order
})

export const sequentialEffects = async ({ sequenceInitial, table, effects }: ISequentialEffects) => {
  let newSequences: INewSequencial = {
    HasSequence: false,
    newOccurrences: [],
    activated: sequenceInitial.activated
  }
  for (const { periodRow, periodColumn } of sequenceInitial.sequence) {
    for (const { category, effect } of effects) {
      const oldStone = table[periodRow][periodColumn]
      const isActivated = sequenceInitial.activated.some(({ row, column }) => row === periodRow && column === periodColumn)
      if (!isActivated && oldStone.category === category) {
        const occurrences = await effect({ row: periodRow, column: periodColumn, table, stone: oldStone })
        const newFormat = await formatSequencialEffect(occurrences, category, newSequences.newOccurrences.length + 1)
        const newActive = newSequences.activated[0] !== undefined
          ? [...newSequences.activated, { row: periodRow, column: periodColumn }]
          : [{ row: periodRow, column: periodColumn }]
        if (newSequences.HasSequence && newSequences.newOccurrences[0] !== undefined) {
          newSequences = {
            ...newSequences,
            activated: newActive,
            newOccurrences: [...newSequences.newOccurrences, newFormat]
          }
        } else {
          newSequences = {
            HasSequence: true,
            activated: newActive,
            newOccurrences: [newFormat]
          }
        }
      }
    }
  }
  return await newSequences
}
