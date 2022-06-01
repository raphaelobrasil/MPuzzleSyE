import { IStoneDefinition } from '../index'

export interface IBasicTable {
  id: number
  type: string
  category: string
}

export interface IConfigTable {
  row: number
  column: number
  stoneConfig: IStoneDefinition<number, string, string>
}
