import {
  IOccurrence,
  IFilterMatchSimple
} from '../../interface'
import {
  Ioccurrences,
  IExtractFilter
} from '../simpleMatch.interface'
import { valideMatchSequence } from './valideMatch_methods'

export const getOccurrences = ({ data, orderPeriod }: Ioccurrences) => {
  let getPeriod: IOccurrence[] = []
  data.forEach((stonePeriod, occurrence) => {
    if (stonePeriod.id === orderPeriod) {
      getPeriod = [...getPeriod, {
        occurrence: occurrence,
        id: stonePeriod.id,
        type: stonePeriod.type,
        category: stonePeriod.category
      }]
    }
  })
  return getPeriod
}

export const extractMatches = ({ data, direction }: IExtractFilter): IFilterMatchSimple[] => data.map((OrderPeriod, key) => {
  const getPeriods = valideMatchSequence(OrderPeriod)
  return {
    orderPeriod: getPeriods,
    stone: OrderPeriod.stone,
    period: OrderPeriod.period,
    direction: direction,
    idMatch: `match_${direction}${key}__${getPeriods[0] && getPeriods[0][0].occurrence}`
  }
})
