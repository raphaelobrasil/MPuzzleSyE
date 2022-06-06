import {
  IMaskBaseTable,
  IOccurrencePeriod,
  IOccurrence
} from '../interface'
import { IStoneDefinition, IBasicTable } from '../../../index'

export interface IOccurrenceRanger {
  table: IMaskBaseTable
  stoneList: IStoneDefinition<number, string, string>
}

export interface IPostfilterMatchSimple {
  table: IOccurrencePeriod[][]
  direction: 'column' | 'row'
}

export interface IExtractFilter {
  data: IOccurrencePeriod[]
  direction: 'column' | 'row'
}

export interface Ioccurrences {
  data: IBasicTable[]
  orderPeriod: number
}

export interface ISequenceValide {
  count: number
  Occ: IOccurrence[]
}
