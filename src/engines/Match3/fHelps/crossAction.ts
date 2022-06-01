import { simple } from './'
import { ISimpleMatch } from './interface'
import { filterCrossMatch } from '../methods/crossMatch/crossMatch'

export const crossMatchValitador = async ({ table, config }: ISimpleMatch) => {
  const simpleMatch = await simple.simpleMatchValitador({ table, config })
  const { rows, columns } = simpleMatch
  return (!!rows || !!columns) ? await filterCrossMatch(simpleMatch) : { rows, columns }
}
