import { IFilterMatchSimple, IOccurrence } from '../../../../..'

const validePeriod = (period: IFilterMatchSimple, dupPeriod: IFilterMatchSimple) =>
  period.stone === dupPeriod.stone &&
  period.idMatch === dupPeriod.idMatch &&
  period.period === dupPeriod.period

export const extractNoMatchs = (table: IFilterMatchSimple[]): IFilterMatchSimple[][] => table
  .map((period, key, arrayPeriod) => {
    if (arrayPeriod.find((doublePeriod, doubleKey) => validePeriod(period, doublePeriod) && key !== doubleKey)) {
      return {
        ...period,
        orderPeriod: [
          ...period.orderPeriod,
          ...arrayPeriod.reduce((newsPeriods: IOccurrence[][], periodValue) =>
            validePeriod(period, periodValue) && JSON.stringify(period.orderPeriod) !== JSON.stringify(periodValue.orderPeriod)
              ? [...newsPeriods, ...periodValue.orderPeriod]
              : newsPeriods,
          [])
        ]
      }
    } else {
      return period
    }
  })
  .filter((periods, key, arrayPeriods) => arrayPeriods.findIndex(double => validePeriod(double, periods)) === key)
  .map(period => [period])
