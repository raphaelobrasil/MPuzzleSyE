import { IFilterMatchSimple } from '../../../../..'
import { IClearNoMatch, IClearNoMatchReturn } from '../../../crossMatch.interface'
import { extractNoMatchs } from './extractNoMatchs'

export const clearNoMatch = ({ order, compareOrder }: IClearNoMatch): IClearNoMatchReturn => {
  const getValueOrder = order.reduce((newValue: IFilterMatchSimple[], period) =>
    [
      ...newValue,
      ...period.orderPeriod.map((occorrence): IFilterMatchSimple => ({
        ...period,
        orderPeriod: [occorrence]
      }))
    ],
  [])

  const getValueCompareOrder = getValueOrder.filter(getValue => compareOrder.find(compare =>
    compare.stone === getValue.stone &&
      getValue.orderPeriod.find(occorrence => occorrence.find(stones => stones.occurrence === compare.period)) &&
      compare.orderPeriod.find(occorrence => occorrence.find(stones => stones.occurrence === getValue.period))
  ))

  const mergeValues = getValueOrder.filter(period => !getValueCompareOrder.some(periodCompare => {
    return JSON.stringify(period) === JSON.stringify(periodCompare)
  }))

  return mergeValues[0] ? extractNoMatchs(mergeValues) : undefined
}
