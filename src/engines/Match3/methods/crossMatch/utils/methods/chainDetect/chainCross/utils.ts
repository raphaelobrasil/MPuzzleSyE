import { ICrossOccurrence, IFilterMatchSimple } from '../../../../../interface'
import { ICombinationsCrossMatchs, IChain } from '../../../../crossMatch.interface'

export const filterRange = (data: ICrossOccurrence[]) => data.filter((range, keyRange, arrayRange) =>
  keyRange === arrayRange.findIndex(doubleRange =>
    range.periodColumn === doubleRange.periodColumn && range.periodRow === doubleRange.periodRow
  ))

export const valideCross = (data: ICombinationsCrossMatchs, first: IChain, second: IChain) =>
  data.chains.find(a => (first.chain.find(b => a === b) || second.chain.find(b => a === b))) && first.range.stone === data.type

export const formatCrossRows = (range: IFilterMatchSimple): ICrossOccurrence[] => range.orderPeriod[0].map(rows =>
  ({
    periodRow: range.period,
    periodColumn: rows.occurrence
  }))

export const formatCrossColumns = (range: IFilterMatchSimple): ICrossOccurrence[] => range.orderPeriod[0].map(columns =>
  ({
    periodRow: columns.occurrence,
    periodColumn: range.period
  }))

export const formatProcessChainsCross = (row: IChain, column: IChain): ICombinationsCrossMatchs => (
  {
    chains: [...new Set([...row.chain, ...column.chain])],
    ranges: filterRange([...formatCrossRows(row.range), ...formatCrossColumns(column.range)]),
    id: row.range.orderPeriod[0][0].id,
    type: row.range.stone
  })
