import { IMatchValidate } from '../..'
import { getRangeCross, getIndexOccurrences, extractCrossMatch } from './utils'

export const filterCrossMatch = async ({ columns, rows }: IMatchValidate): Promise<IMatchValidate> => {
  try {
    if ((!!columns && !!rows) && (!!columns[0] && !!rows[0])) {
      const range = getRangeCross({ columns, rows })
      const indexRange = getIndexOccurrences(range)

      return extractCrossMatch({ rows, columns, range, indexRange })
    } else {
      return {
        columns,
        rows
      }
    }
  } catch (error) {
    console.log('filterCrossMatch_error', error)
    return {}
  }
}

export const IsCross = (table: IMatchValidate): boolean => !!table?.cross
