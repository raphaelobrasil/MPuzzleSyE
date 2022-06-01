import { IOccurrencePeriod, IFilterMatchSimple } from '../../../../src/engines/Match3'
import { base } from './base'

const { callStoneOcorrence } = base

const occurrentColumn: IOccurrencePeriod[][] = [
  [
    {
      orderPeriod: [callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2)],
      stone: 'light',
      period: 0
    }
  ],
  [
  ],
  [
    {
      orderPeriod: [callStoneOcorrence.red(0), callStoneOcorrence.red(1), callStoneOcorrence.red(3)],
      stone: 'red',
      period: 2
    }
  ],
  [
  ],
  [
  ],
  [
    {
      orderPeriod: [callStoneOcorrence.light(0), callStoneOcorrence.light(3), callStoneOcorrence.light(4)],
      stone: 'light',
      period: 5
    }
  ],
  [
  ]
]

const rangerMatchColumn: IFilterMatchSimple[][] = [
  [
    {
      orderPeriod: [
        [
          callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2)
        ]
      ],
      stone: 'light',
      period: 0,
      direction: 'column',
      idMatch: 'match_column0__0'
    }
  ]
]

export const column = {
  occurrentColumn,
  rangerMatchColumn
}
