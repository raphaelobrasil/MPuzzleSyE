import {
  IOccurrencePeriod,
  IOccurrence
} from '../../interface'
import {
  ISequenceValide
} from '../simpleMatch.interface'

const sequenceValide = ({ count, Occ }: ISequenceValide) => count > 2 ? Occ : []

export const valideMatchSequence = (period: IOccurrencePeriod) => {
  const sequence: IOccurrence[][] = []
  let occurrenceCount = 0
  let index = 0
  period.orderPeriod.forEach((Occu) => {
    const count = sequence[index] !== undefined ? sequence[index].length : 0
    if (Occu.occurrence === occurrenceCount) {
      sequence[index] = [...sequence[index] || [], Occu]
      occurrenceCount++
    } else {
      occurrenceCount = Occu.occurrence + 1
      sequence[index] = sequenceValide({ count, Occ: sequence[index] })
      index++
      sequence[index] = [Occu]
    }
  })
  return sequence
    .filter(order => order.filter(Occu => Occu !== undefined).length > 2)
    .filter(order => order !== undefined && order.length > 0)
}
