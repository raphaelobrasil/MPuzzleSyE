import { IOccurrencePeriod, IFilterMatchSimple } from '../../../src/engines/Match3'
import { callStoneOcorrence } from './base'

const occurrentRow: IOccurrencePeriod[][] = [
  [
    {
      orderPeriod: [callStoneOcorrence.light(0), callStoneOcorrence.light(4), callStoneOcorrence.light(5)],
      stone: 'light',
      period: 0
    }
  ],
  [
    {
      orderPeriod: [callStoneOcorrence.light(0), callStoneOcorrence.light(3), callStoneOcorrence.light(6)],
      stone: 'light',
      period: 1
    }
  ],
  [
    {
      orderPeriod: [callStoneOcorrence.green(4), callStoneOcorrence.green(5), callStoneOcorrence.green(6)],
      stone: 'green',
      period: 2
    }
  ],
  [
    {
      orderPeriod: [callStoneOcorrence.red(0), callStoneOcorrence.red(2), callStoneOcorrence.red(6)],
      stone: 'red',
      period: 3
    }
  ],
  [
    {
      orderPeriod: [callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(6)],
      stone: 'light',
      period: 4
    },
    {
      orderPeriod: [callStoneOcorrence.green(0), callStoneOcorrence.green(1), callStoneOcorrence.green(2), callStoneOcorrence.green(3)],
      stone: 'green',
      period: 4
    }
  ]
]

const rangerMatchRow: IFilterMatchSimple[][] = [
  [
    {
      orderPeriod: [
        [
          callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2)
        ],
        [
          callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(6)
        ]
      ],
      stone: 'light',
      period: 0,
      direction: 'row',
      idMatch: 'match_row0__0'
    }
  ],
  [
    {
      orderPeriod: [
        [
          callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2), callStoneOcorrence.light(3)
        ],
        [
          callStoneOcorrence.light(5), callStoneOcorrence.light(6), callStoneOcorrence.light(7)
        ]
      ],
      stone: 'light',
      period: 1,
      direction: 'row',
      idMatch: 'match_row0__0'
    }
  ],
  [
    {
      orderPeriod: [
        [
          callStoneOcorrence.light(7), callStoneOcorrence.light(8), callStoneOcorrence.light(9)
        ]
      ],
      stone: 'light',
      period: 2,
      direction: 'row',
      idMatch: 'match_row0__7'
    }
  ]
]

const simulateRowOcurrence: IOccurrencePeriod[][] = [
  [
    {
      orderPeriod: [callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2), callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(6)],
      stone: 'light',
      period: 0
    }
  ],
  [
    {
      orderPeriod: [callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2), callStoneOcorrence.light(3), callStoneOcorrence.light(5), callStoneOcorrence.light(6), callStoneOcorrence.light(7)],
      stone: 'light',
      period: 1
    }
  ],
  [
    {
      orderPeriod: [callStoneOcorrence.light(1), callStoneOcorrence.light(2), callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(7), callStoneOcorrence.light(8), callStoneOcorrence.light(9)],
      stone: 'light',
      period: 2
    }
  ]
]

const rowMatchTestOne: IFilterMatchSimple[][] = [
  [
    {
      orderPeriod: [
        [
          callStoneOcorrence.green(4), callStoneOcorrence.green(5), callStoneOcorrence.green(6)
        ]
      ],
      stone: 'green',
      period: 2,
      direction: 'row',
      idMatch: 'match_row0__4'
    }
  ],
  [
    {
      orderPeriod: [
        [
          callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(6)
        ]
      ],
      stone: 'light',
      period: 4,
      direction: 'row',
      idMatch: 'match_row0__4'
    },
    {
      orderPeriod: [
        [
          callStoneOcorrence.green(0), callStoneOcorrence.green(1), callStoneOcorrence.green(2), callStoneOcorrence.green(3)
        ]
      ],
      stone: 'green',
      period: 4,
      direction: 'row',
      idMatch: 'match_row1__0'
    }
  ]
]

export {
  occurrentRow,
  simulateRowOcurrence,
  rangerMatchRow,
  rowMatchTestOne
}
