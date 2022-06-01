import {
  IOccurrencePeriod,
  IFilterMatchSimple
} from '../interface'
import {
  IOccurrenceRanger,
  IPostfilterMatchSimple,
  Ioccurrences
} from './simpleMatch.interface'
import { getOccurrences, extractMatches } from './utils'

export const occurrenceRanger = ({ table, stoneList }: IOccurrenceRanger): IOccurrencePeriod[][] => {
  const occurrences = ({ data, orderPeriod }: Ioccurrences) => {
    return stoneList.map((stone):IOccurrencePeriod => ({
      orderPeriod: getOccurrences({ data, orderPeriod: stone.id }),
      stone: stone.type,
      period: orderPeriod
    }))
  }
  const occurrenceList = table.table.map((data, orderPeriod) =>
    occurrences({ data, orderPeriod }).filter(occurrence => occurrence.orderPeriod.length > 2)
  )
  return occurrenceList
}

export const filterMatchSimple = async ({ table, direction }: IPostfilterMatchSimple): Promise<IFilterMatchSimple[][]> => {
  try {
    const clearEmptyObject = table.map(data => extractMatches({ data, direction }))
      .map(orderPeriod =>
        orderPeriod.filter(period => period.orderPeriod.length > 0)
      ).filter(period => period.length > 0)
    return clearEmptyObject
  } catch (error) {
    console.log('filterMatchSimple_error', error)
    return []
  }
}
