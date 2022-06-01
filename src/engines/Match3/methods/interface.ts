import { IBasicTable, ISequencial, ISequenceHistory } from '../../index'

export interface IMaskBaseTable {
  table: IBasicTable[][]
  countRow: number
  countColumn: number
}
export interface IOccurrencePeriod {
  orderPeriod: iOccurrence[]
  stone: string
  period: number
}
export interface IFilterMatchSimple {
  orderPeriod: iOccurrence[][]
  stone: string
  period: number
  direction: 'column' | 'row'
  idMatch: string
  chains?: string[]
}
export interface iOccurrence {
  occurrence: number
  id: number
  type: string
  category: string
}

export interface IFilterMatchCross {
  occurrences: iCrossOccurrence[]
  id: number
  type: string
}

export interface iCrossOccurrence {
  periodRow: number
  periodColumn: number
}

export interface IClearInitEffect {
  table: IBasicTable[][]
  effect: ISequencial
}

export interface IClearSequentialEffects {
  table: IBasicTable[][]
  effect: ISequenceHistory[]
}
