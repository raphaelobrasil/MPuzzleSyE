import { IMatchValidate, IFilterMatchSimple, iCrossOccurrence } from '../../'
import { IBasicTable, IStoneDefinition } from '../../../'

export interface ICategoryApplication {
    table: IBasicTable[][]
    activeCategorys: IEffectsCategory[]
    matchs: IMatchValidate
    config: IStoneDefinition<number, string, string>
    move?: {
        drag: dragDrop
        drop: dragDrop
    }
}

export interface IActiveEffects {
    table: IBasicTable[][]
    activeCategorys: IEffectsCategory[]
    row: number
    column: number
    stone: IBasicTable
}

export interface IActiveEffectsInMatchs {
    table: IBasicTable[][]
    activeCategorys: IEffectsCategory[]
    occurrences: {
        row: number
        column: number
        stone: IBasicTable
    }[]
}

export interface ISequentialEffects {
    sequenceInitial: ISequencial
    table: IBasicTable[][]
    effects: IEffectsCategory[]
}

export interface INewSequencial {
    HasSequence: boolean
    newOccurrences: ISpecialEffect[]
    activated: dragDrop[]
}

export interface ISpecialEffect {
    occurrences: iCrossOccurrence[]
    category: string
    order: number
}
export interface ISequencial {
    sequence: iCrossOccurrence[]
    activated: dragDrop[]
}

export interface IEffects {
    table: IBasicTable[][]
    row: number
    column: number
    stone: IBasicTable
}

export interface IEffectsCategory {
    effect: (props: IEffects) => Promise<iCrossOccurrence[]>
    category: string
    stoneIds: number[]
    rule: number
}

export interface IResponseEffect {
    sequences: IEffectSequence[]
    table: IBasicTable[][]
}

interface IEffectSequence {
    coordinates: iCrossOccurrence[]
    effect: string
    cell: dragDrop
    order: number
}
export interface IEligibleGame {
    config: IStoneDefinition<number, string, string>
    stone: string
    countMatch: number
    rule: number
}

export interface IUpdateTable {
    config: IStoneDefinition<number, string, string>
    match: IFilterMatchSimple
    category: string
    rule: number
    oldTable: IBasicTable[][]
}

export interface IEvaluatingMatch {
    categorysEffects: IEffectsCategory
    match: IFilterMatchSimple[][]
    config: IStoneDefinition<number, string, string>
    table: IBasicTable[][]
}

export interface IOrganizateOrder {
    ranges: iCrossOccurrence[]
    type: 'periodRow' | 'periodColumn'
}

export interface IMoveRowVerify {
    row: number
    column: number
    period: number
    occurrence: number
    id: number
    type: string
    category: string
    table: IBasicTable[][]
    config: IStoneDefinition<number, string, string>
    countMatch: number
    rule: number
}

export type dragDrop = {
    row: number
    column: number
}
