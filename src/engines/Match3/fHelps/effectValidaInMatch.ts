import { IeffectValidInMatch, IDetectEffectInOccurrences } from './interface'
import { IFilterMatchSimple, IFilterMatchCross, iOccurrence, IBasicTable } from '../../'

const format = (prop: IDetectEffectInOccurrences) => prop

const formatResponse = ({ id, type, occurrence, category }: iOccurrence, direction: 'column' | 'row', period: number) => format({
  column: direction === 'column' ? period : occurrence,
  row: direction === 'row' ? period : occurrence,
  stone: { id, type, category }
})

const detectEffectInOccurrences = async (occurrences: iOccurrence[][], direction: 'column' | 'row', period: number) => {
  let response: IDetectEffectInOccurrences[] = []
  for (const listOccurrence of occurrences) {
    for await (const occurrence of listOccurrence) {
      if (occurrence.category !== '') {
        if (response[0] === undefined) {
          response = [formatResponse(occurrence, direction, period)]
        } else {
          response = [...response, formatResponse(occurrence, direction, period)]
        }
      }
    }
  }
  return response
}

const effectInMatchSimple = async (match: IFilterMatchSimple[][]) => {
  let response: IDetectEffectInOccurrences[] = []
  for (const order of match) {
    for await (const { orderPeriod, period, direction } of order) {
      const newReturn = await detectEffectInOccurrences(orderPeriod, direction, period)
      if (response[0] === undefined) {
        response = newReturn
      } else {
        response = [...response, ...newReturn]
      }
    }
  }
  return response
}

const effectInMatchCross = async (match: IFilterMatchCross[], table: IBasicTable[][]) => {
  let response: IDetectEffectInOccurrences[] = []
  for (const { occurrences } of match) {
    for await (const { periodRow, periodColumn } of occurrences) {
      if (table[periodRow][periodColumn].category !== '') {
        const newResponse = format({ column: periodColumn, row: periodRow, stone: table[periodRow][periodColumn] })
        if (response[0] === undefined) {
          response = [newResponse]
        } else {
          response = [...response, newResponse]
        }
      }
    }
  }
  return response
}

export const effectValidInMatch = async ({ match, table }: IeffectValidInMatch) => {
  const { columns, rows, cross } = match
  let response: IDetectEffectInOccurrences[] = []
  if (!!columns && !!columns[0]) {
    const newReturn = await effectInMatchSimple(columns)
    if (response[0] === undefined) {
      response = newReturn
    } else {
      response = [...response, ...newReturn]
    }
  }
  if (!!rows && !!rows[0]) {
    const newReturn = await effectInMatchSimple(rows)
    if (response[0] === undefined) {
      response = newReturn
    } else {
      response = [...response, ...newReturn]
    }
  }
  if (!!cross && !!cross[0]) {
    const newReturn = await effectInMatchCross(cross, table)
    if (response[0] === undefined) {
      response = newReturn
    } else {
      response = [...response, ...newReturn]
    }
  }
  return response
}
