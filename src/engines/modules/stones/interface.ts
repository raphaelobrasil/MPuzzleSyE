export type IStoneDefinition<TIdStone, TStone, TCategory> = {
  id: TIdStone
  type: TStone
  category: TCategory[]
}[]

export interface IStoneBasicConfig {
  stones?: string[]
  categorys?: string[]
}
