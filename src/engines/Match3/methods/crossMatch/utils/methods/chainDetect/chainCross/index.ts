import { IFilterMatchCross } from '../../../../../..'
import { valide } from '../utils'
import { IChain, ICombinationsCrossMatchs } from '../../../../crossMatch.interface'
import { valideCross, filterRange, formatProcessChainsCross, formatCrossRows, formatCrossColumns } from './utils'

export const chainCross = (chains: IChain[]): IFilterMatchCross[] => {
  const getRows = chains.filter(rows => rows.range.direction === 'row')
  const getColumns = chains.filter(columns => columns.range.direction === 'column')
  let cross: ICombinationsCrossMatchs[] = []
  getRows.forEach(rows => {
    getColumns.forEach(columns => {
      if (cross[0] === undefined) {
        cross = [formatProcessChainsCross(rows, columns)]
      } else {
        if (valide({ rows: rows.range, columns: columns.range })) {
          if (cross.some(register => valideCross(register, rows, columns))) {
            cross = cross.map(register =>
              valideCross(register, rows, columns)
                ? {
                    ...register,
                    chains: [...new Set([...register.chains, ...rows.chain, ...columns.chain])],
                    ranges: filterRange([...new Set([
                      ...register.ranges, ...formatCrossRows(rows.range), ...formatCrossColumns(columns.range)
                    ])])
                  }
                : register
            )
          } else {
            cross = [...cross, formatProcessChainsCross(rows, columns)]
          }
        }
        cross = [...cross]
      }
    })
  })
  return cross.map(data => ({
    id: data.id,
    type: data.type,
    occurrences: data.ranges
  }))
}
