import { IBasicTable, ISequencial, ISequenceHistory } from '../../index'
export interface IMatchValidate {
  rows?: IFilterMatchSimple[][]
  columns?: IFilterMatchSimple[][]
  cross?: IFilterMatchCross[]
}
export interface IMaskBaseTable {
  table: IBasicTable[][]
  countRow: number
  countColumn: number
}
export interface IOccurrencePeriod {
  orderPeriod: IOccurrence[]
  stone: string
  period: number
}
export interface IFilterMatchSimple {
  orderPeriod: IOccurrence[][]
  stone: string
  period: number
  direction: 'column' | 'row'
  idMatch: string
  chains?: string[]
}
export interface IOccurrence {
  occurrence: number
  id: number
  type: string
  category: string
}

export interface IFilterMatchCross {
  occurrences: ICrossOccurrence[]
  id: number
  type: string
}

export interface ICrossOccurrence {
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
