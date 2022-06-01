import { ICategoryApplication } from '.'
import { evaluatingMatch, eligibleGame, organizateOrder, moveRowVerify } from './utils'

export const categoryApplication = async ({ table, activeCategorys, matchs, config, move }: ICategoryApplication) => {
  activeCategorys.forEach(categorysEffects => {
    config = config.filter(stones => categorysEffects.stoneIds.some(ids => stones.id === ids))
    if (!!matchs.columns && !!matchs.columns[0]) {
      table = [...evaluatingMatch({ categorysEffects, match: matchs.columns, config, table: table })]
    }
    if (!!matchs.rows && !!matchs.rows[0]) {
      if (move) {
        matchs.rows.forEach(rows => rows.forEach(row => row.orderPeriod.forEach(order =>
          order.forEach(occurrences => {
            const data = {
              ...occurrences,
              period: row.period,
              category: categorysEffects.category,
              config,
              countMatch: order.length,
              rule: categorysEffects.rule
            }
            table = moveRowVerify({ ...move.drag, ...data, table })
            table = moveRowVerify({ ...move.drop, ...data, table })
          })
        )))
      } else {
        table = [...evaluatingMatch({ categorysEffects, match: matchs.rows, config, table: table })]
      }
    }
    if (!!matchs.cross && !!matchs.cross[0]) {
      matchs.cross.forEach(cross => {
        if (eligibleGame({ config, stone: cross.type, countMatch: cross.occurrences.length, rule: categorysEffects.rule })) {
          organizateOrder({ ranges: cross.occurrences, type: 'periodRow' }).some(row =>
            organizateOrder({ ranges: cross.occurrences, type: 'periodColumn' }).some(column => {
              if (cross.occurrences.some(stones => stones.periodColumn === column && stones.periodRow === row)) {
                table[row][column] = {
                  id: cross.id,
                  type: cross.type,
                  category: categorysEffects.category
                }
                return true
              } else {
                return false
              }
            }))
        }
      })
    }
  })
  return table
}
