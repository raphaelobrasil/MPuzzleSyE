import { IFilterMatchSimple, IMatchValidate } from '../../..'
import { IGetRangeCross, IGetIndexOccurrences, IExtractCrossMatch } from '../crossMatch.interface'
import { clearNoMatch, chainDetect } from './methods'

export const getRangeCross = ({ columns, rows }: IGetRangeCross): IFilterMatchSimple[] => {
  return [
    ...columns.reduce((prev, next) => prev.concat(next), []),
    ...rows.reduce((prev, next) => prev.concat(next), [])
  ].filter((stone, _index, arrayStone) =>
    arrayStone.filter(filterStone => filterStone.stone === stone.stone).length > 1
  )
}

export const getIndexOccurrences = (range: IFilterMatchSimple[]): IGetIndexOccurrences[] => {
  return [...range.map(stone => {
    const crossVerific = range.filter(stoneCross =>
      stone.stone === stoneCross.stone && stone.direction !== stoneCross.direction
    )
    return crossVerific.map(stonePeriod => {
      const indexOccur = stonePeriod.orderPeriod.findIndex(matchArrays =>
        matchArrays.find(matchStone => matchStone.occurrence === stone.period)
      )
      return {
        index: indexOccur,
        period: stonePeriod,
        over: stonePeriod.orderPeriod.filter((_e, index) => index !== indexOccur).length > 0
      }
    })
  }).reduce((prev, next) => prev.concat(next), [])]
}

export const extractCrossMatch = ({ rows, columns, range, indexRange }: IExtractCrossMatch):IMatchValidate => {
  if (indexRange.find(match => match.index !== -1)) {
    const reduceArray = (order: IFilterMatchSimple[][]) => order.reduce((filter, period) => [...filter, ...period], [])

    return {
      rows: clearNoMatch({ order: reduceArray(rows), compareOrder: reduceArray(columns) }),
      columns: clearNoMatch({ order: reduceArray(columns), compareOrder: reduceArray(rows) }),
      cross: chainDetect(range)
    }
  } else {
    return {
      columns,
      rows
    }
  }
}
