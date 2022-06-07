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

export interface IisMatch {
    table: IBasicTable[][]
    config: IStoneDefinition<number, string, string>
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
