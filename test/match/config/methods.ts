import {
  baseExtract,
  simpleExtract,
  simple,
  cross,
  insertNewStones,
  crossExtract,
  clearMatchs,
  gameStart,
  isMatch,
  fEventsProcess,
  organizeStructure,
  activeEffects,
  sequenceHistory,
  activeEffectsInMatchs,
  clearInitEffect,
  clearSequentialEffects,
  stoneConfig, 
  category
} from '../../../src/engines'

const { occurrenceRanger, filterMatchSimple } = simpleExtract
const { IsCross, filterCrossMatch } = crossExtract
const { extractRow, extractColumn } = baseExtract
const { simpleMatchValitador } = simple
const { crossMatchValitador } = cross

export {
  gameStart,
  occurrenceRanger,
  filterMatchSimple,
  IsCross,
  filterCrossMatch,
  extractRow,
  extractColumn,
  simpleMatchValitador,
  clearMatchs,
  crossMatchValitador,
  insertNewStones,
  isMatch,
  fEventsProcess,
  organizeStructure,
  activeEffects,
  sequenceHistory,
  activeEffectsInMatchs,
  clearInitEffect,
  clearSequentialEffects,
  stoneConfig, 
  category
}
