
import { IEligibleGame, IUpdateTable, IEvaluatingMatch, IOrganizateOrder, IMoveRowVerify } from './interface'
import { iOccurrence } from '../interface'

export const eligibleGame = ({ config, stone, countMatch, rule }: IEligibleGame) =>
  config.some(item => item.type === stone) && countMatch >= rule

const getOccorrences = (occorrences: iOccurrence[]) => occorrences.reduce((count, info) =>
  [...new Set([...count, info.occurrence])], [] as number[])

const updateTable = ({ config, match, category, rule, oldTable }: IUpdateTable) => {
  if (eligibleGame({ config, stone: match.stone, countMatch: match.orderPeriod[0].length, rule })) {
    const row = match.direction === 'column'
      ? Math.min(...getOccorrences(match.orderPeriod[0]))
      : match.period

    const column = match.direction === 'column'
      ? match.period
      : Math.min(...getOccorrences(match.orderPeriod[0]))

    oldTable[row][column] = {
      id: match.orderPeriod[0][0].id,
      type: match.stone,
      category: category
    }
  }
  return oldTable
}

export const evaluatingMatch = ({ categorysEffects, match, config, table }: IEvaluatingMatch) => {
  match.forEach(rangers => rangers.forEach(ranger => {
    table = [...updateTable({
      config, match: ranger, category: categorysEffects.category, rule: categorysEffects.rule, oldTable: table
    })]
  }))
  return table
}

export const organizateOrder = ({ ranges, type }: IOrganizateOrder) =>
  ranges.reduce((count, info) => [...new Set([...count, info[type]])], [] as number[]).sort((after, before) => after - before)

export const moveRowVerify = ({
  row, column, period, occurrence, id, type, category, table, config, countMatch, rule
}: IMoveRowVerify) => {
  if (
    row === period && column === occurrence &&
    eligibleGame({ config, stone: type, countMatch, rule })
  ) {
    table[row][column] = { id: id, type: type, category: category }
  }
  return table
}
