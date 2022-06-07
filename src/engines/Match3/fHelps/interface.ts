import { IBasicTable, IStoneDefinition, IEffectsCategory, dragDrop, INewSequencial, ISequencial, IMatchValidate } from '../../'
import { ISpecialEffect } from '../methods/category/interface'

export interface ISimpleMatch {
    table: IBasicTable[][]
    config: IStoneDefinition<number, string, string>
}

export interface IGameProcess {
    table: IBasicTable[][]
    effects: IEffectsCategory[]
    config: IStoneDefinition<number, string, string>
    move?: {
        drag: dragDrop
        drop: dragDrop
    }
}

export interface IDetectEffectInOccurrences {
    stone: { id: number, type: string, category: string }
    row: number
    column: number
}

export interface IGameStart {
    rowCount: number
    columnCount: number
    config: IStoneDefinition<number, string, string>
}

export interface IIsMatch {
    table: IBasicTable[][]
    config: IStoneDefinition<number, string, string>
}

export interface IIsMatchResponse { 
    isMatch: boolean
    match: IMatchValidate
    effects: IDetectEffectInOccurrences[]
}

export interface IeffectValidInMatch {
    match: IMatchValidate
    table: IBasicTable[][]
}

export interface IClearStage {
    table: IBasicTable[][]
    match: IMatchValidate
    effectActive?: IEffectsResult
}

export interface IEffectsResult {
    initEffect: ISequencial
    sequenceEffect?: ISequenceHistory[]
}

export interface INextStage {
    table: IBasicTable[][]
    effects: IEffectsCategory[]
    config: IStoneDefinition<number, string, string>
    match: IMatchValidate
    move?: {
        drag: dragDrop
        drop: dragDrop
    }
}

export interface IResponseHistory {
    sequence: INewSequencial
    stage: number
}
export interface ISequenceHistory {
    stone: IStoneActiveSequence[]
    sequence: ISpecialEffect[]
}

export type IStoneActiveSequence = {
    row: number
    column: number
    stage: number
}

export interface IFEventsProcess {
    table: IBasicTable[][],
    config: IStoneDefinition<number, string, string>,
    activeCategorys: IEffectsCategory[]
}

export interface IClearTableMatchAndEffects {
    table: IBasicTable[][],
    match: IMatchValidate,
    explodeStones: ISequencial,
    result: ISequenceHistory[]
}

export interface ICompletProcess {
    isMatch: IIsMatchResponse,
    initialEffect: ISequencial | null,
    sequenceEffect: ISequenceHistory[] | null,
    clearTable: IBasicTable[][] | null,
    categoryApply: IBasicTable[][] | null,
    organizeTable: IBasicTable[][] | null,
    newTable: IBasicTable[][] | null
}