import { IChain, INewFormatRange, IValideChainCross } from '../../../crossMatch.interface'

const valideChain: string[] = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

export const valide = ({ rows, columns }: IValideChainCross) =>
  rows.stone === columns.stone &&
  columns.orderPeriod.find(periodColumn => periodColumn.find(column => column.occurrence === rows.period)) &&
  rows.orderPeriod.find(periodRow => periodRow.find(row => row.occurrence === columns.period))

export const newFormatRange = ({ orderPeriod, period, key }: INewFormatRange): IChain => ({
  range: {
    ...orderPeriod,
    orderPeriod: orderPeriod.orderPeriod.filter(periodRow =>
      periodRow.find(row => row.occurrence === period)
    )
  },
  chain: [
    valideChain[key <= valideChain.length ? key : valideChain.length - 1]
  ]
})
