import { IFilterMatchSimple, ICrossOccurrence } from '../..'

export interface IGetRangeCross {
  columns: IFilterMatchSimple[][]
  rows: IFilterMatchSimple[][]
}

export interface IGetIndexOccurrences {
  index: number,
  period: IFilterMatchSimple,
  over: boolean
}

export interface IExtractCrossMatch {
  columns: IFilterMatchSimple[][]
  rows: IFilterMatchSimple[][]
  range: IFilterMatchSimple[]
  indexRange: IGetIndexOccurrences[]
}

export interface IClearNoMatch {
  order: IFilterMatchSimple[]
  compareOrder: IFilterMatchSimple[]
}

export type IClearNoMatchReturn = IFilterMatchSimple[][] | undefined
export interface IChain {
  range: IFilterMatchSimple
  chain: string[]
}
export interface INewFormatRange {
  orderPeriod: IFilterMatchSimple
  period: number
  key: number
}
export interface IValideChainCross {
  rows: IFilterMatchSimple
  columns: IFilterMatchSimple
}

export interface IProcessChains {
  row: ICrossOccurrence[]
  column: ICrossOccurrence[]
  chain: IChain
  id: number
  type: string
}

export interface ICombinationsCrossMatchs {
  chains: string[]
  id: number
  type: string
  ranges: ICrossOccurrence[]
}
