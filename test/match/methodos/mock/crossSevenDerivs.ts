import { IBasicTable, IMatchValidate, iOccurrence } from '../../../../src/engines'

const callStone = {
  void: { id: 0, type: 'void', category: '' },
  dark: { id: 1, type: 'dark', category: '' },
  light: { id: 2, type: 'light', category: '' },
  red: { id: 3, type: 'red', category: '' },
  blue: { id: 4, type: 'blue', category: '' },
  green: { id: 5, type: 'green', category: '' }
}

const callStoneFour = {
  dark: { id: 1, type: 'dark', category: 'pattern_four' },
  light: { id: 2, type: 'light', category: 'pattern_four' },
  red: { id: 3, type: 'red', category: 'pattern_four' },
  blue: { id: 4, type: 'blue', category: 'pattern_four' },
  green: { id: 5, type: 'green', category: 'pattern_four' }
}

const callStoneFive = {
  dark: { id: 1, type: 'dark', category: 'pattern_five' },
  light: { id: 2, type: 'light', category: 'pattern_five' },
  red: { id: 3, type: 'red', category: 'pattern_five' },
  blue: { id: 4, type: 'blue', category: 'pattern_five' },
  green: { id: 5, type: 'green', category: 'pattern_five' }
}

const crossPeriods = (periodRow: number, periodColumn: number) => ({
  periodRow: periodRow,
  periodColumn: periodColumn
})

const callStoneOcorrence = {
  dark (occurrence: number): iOccurrence { return { id: 1, type: 'dark', category: '', occurrence: occurrence } },
  light (occurrence: number): iOccurrence { return { id: 2, type: 'light', category: '', occurrence: occurrence } },
  red (occurrence: number): iOccurrence { return { id: 3, type: 'red', category: '', occurrence: occurrence } },
  blue (occurrence: number): iOccurrence { return { id: 4, type: 'blue', category: '', occurrence: occurrence } },
  green (occurrence: number): iOccurrence { return { id: 5, type: 'green', category: '', occurrence: occurrence } }
}

const crossTableModelSevenDerivOne: IBasicTable[][] = [
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light]
]

const crossTableModelSevenDerivTwo: IBasicTable[][] = [
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.blue, callStone.blue, callStone.blue],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.blue, callStone.blue, callStone.blue],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.blue, callStone.blue, callStone.blue],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.blue, callStone.blue, callStone.blue],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light]
]

const crossTableModelSevenDerivThree: IBasicTable[][] = [
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.blue, callStone.blue, callStone.blue],
  [callStone.light, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.blue, callStone.blue],
  [callStone.light, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.blue, callStone.blue],
  [callStone.light, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.blue, callStone.blue],
  [callStone.light, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.blue, callStone.blue]
]

const crossTableModelSevenDerivFour: IBasicTable[][] = [
  [callStone.dark, callStone.red, callStone.red, callStone.red, callStone.red, callStone.dark, callStone.dark],
  [callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.red, callStone.red, callStone.dark],
  [callStone.dark, callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.red, callStone.red],
  [callStone.dark, callStone.red, callStone.red, callStone.red, callStone.dark, callStone.dark, callStone.dark],
  [callStone.dark, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light]
]

const crossTableModelSevenDerivFive: IBasicTable[][] = [
  [callStone.dark, callStone.red, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.dark, callStone.dark, callStone.dark],
  [callStone.dark, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light]
]

const crossTableModelSevenDerivSix: IBasicTable[][] = [
  [callStone.dark, callStone.red, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.dark, callStone.blue, callStone.dark],
  [callStone.dark, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light]
]

const crossTableModelSevenDerivSeven: IBasicTable[][] = [
  [callStone.dark, callStone.red, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.red, callStone.blue, callStone.blue, callStone.blue, callStone.dark],
  [callStone.dark, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light]
]

const crossTableModelSevenDerivEight: IBasicTable[][] = [
  [callStone.dark, callStone.red, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.red, callStone.blue, callStone.blue, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.dark],
  [callStone.dark, callStone.dark, callStone.dark, callStone.blue, callStone.blue, callStone.blue, callStone.dark],
  [callStone.dark, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light]
]

const clearCrossTableModelSevenDerivOne: IBasicTable[][] = [
  [callStoneFive.light, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearCrossTableModelSevenDerivTwo: IBasicTable[][] = [
  [callStoneFive.light, callStone.void, callStone.void, callStone.void, callStoneFive.blue, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearCrossTableModelSevenDerivThree: IBasicTable[][] = [
  [callStoneFive.light, callStoneFive.red, callStone.void, callStone.void, callStoneFive.blue, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearCrossTableModelSevenDerivFour: IBasicTable[][] = [
  [callStoneFive.dark, callStoneFive.red, callStone.void, callStone.void, callStone.void, callStone.dark, callStone.dark],
  [callStone.void, callStone.dark, callStone.void, callStone.void, callStone.void, callStone.void, callStone.dark],
  [callStone.void, callStoneFive.light, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearCrossTableModelSevenDerivFive: IBasicTable[][] = [
  [callStoneFive.dark, callStoneFive.red, callStone.void, callStone.void, callStone.void, callStone.void, callStoneFive.dark],
  [callStone.void, callStoneFive.light, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearCrossTableModelSevenDerivSix: IBasicTable[][] = [
  [callStoneFive.dark, callStoneFive.red, callStone.void, callStone.void, callStone.dark, callStoneFour.blue, callStoneFour.dark],
  [callStone.void, callStoneFive.light, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearCrossTableModelSevenDerivSeven: IBasicTable[][] = [
  [callStoneFive.dark, callStoneFive.red, callStone.void, callStone.void, callStone.void, callStoneFive.blue, callStoneFour.dark],
  [callStone.void, callStoneFive.light, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearCrossTableModelSevenDerivEight: IBasicTable[][] = [
  [callStoneFive.dark, callStoneFive.red, callStone.void, callStone.void, callStone.void, callStoneFive.blue, callStoneFour.dark],
  [callStone.void, callStoneFive.light, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const crossValideModelSevenDerivOne: IMatchValidate = {
  columns: undefined,
  rows: undefined,
  cross: [
    {
      occurrences: [
        crossPeriods(0, 0),
        crossPeriods(0, 1),
        crossPeriods(0, 2),
        crossPeriods(0, 3),
        crossPeriods(0, 4),
        crossPeriods(0, 5),
        crossPeriods(0, 6),
        crossPeriods(1, 0),
        crossPeriods(2, 0),
        crossPeriods(3, 0),
        crossPeriods(4, 0),
        crossPeriods(1, 1),
        crossPeriods(2, 1),
        crossPeriods(3, 1),
        crossPeriods(4, 1),
        crossPeriods(1, 2),
        crossPeriods(2, 2),
        crossPeriods(3, 2),
        crossPeriods(4, 2),
        crossPeriods(1, 3),
        crossPeriods(2, 3),
        crossPeriods(3, 3),
        crossPeriods(4, 3),
        crossPeriods(1, 4),
        crossPeriods(2, 4),
        crossPeriods(3, 4),
        crossPeriods(4, 4),
        crossPeriods(1, 5),
        crossPeriods(2, 5),
        crossPeriods(3, 5),
        crossPeriods(4, 5),
        crossPeriods(1, 6),
        crossPeriods(2, 6),
        crossPeriods(3, 6),
        crossPeriods(4, 6)
      ],
      id: 2,
      type: 'light' // 35 SUCCESS!
    }
  ]
}

const crossValideModelSevenDerivTwo: IMatchValidate = {
  columns: undefined,
  rows: undefined,
  cross: [
    {
      occurrences: [
        crossPeriods(0, 0),
        crossPeriods(0, 1),
        crossPeriods(0, 2),
        crossPeriods(0, 3),
        crossPeriods(1, 0),
        crossPeriods(2, 0),
        crossPeriods(3, 0),
        crossPeriods(4, 0),
        crossPeriods(1, 1),
        crossPeriods(2, 1),
        crossPeriods(3, 1),
        crossPeriods(4, 1),
        crossPeriods(1, 2),
        crossPeriods(2, 2),
        crossPeriods(3, 2),
        crossPeriods(4, 2),
        crossPeriods(1, 3),
        crossPeriods(2, 3),
        crossPeriods(3, 3),
        crossPeriods(4, 3),
        crossPeriods(4, 4),
        crossPeriods(4, 5),
        crossPeriods(4, 6)
      ],
      id: 2,
      type: 'light' // 23 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(0, 4),
        crossPeriods(0, 5),
        crossPeriods(0, 6),
        crossPeriods(1, 4),
        crossPeriods(2, 4),
        crossPeriods(3, 4),
        crossPeriods(1, 5),
        crossPeriods(2, 5),
        crossPeriods(3, 5),
        crossPeriods(1, 6),
        crossPeriods(2, 6),
        crossPeriods(3, 6)
      ],
      id: 4,
      type: 'blue' // 12 SUCCESS!
    }
  ]
}

const crossValideModelSevenDerivThree: IMatchValidate = {
  columns: undefined,
  rows: undefined,
  cross: [
    {
      occurrences: [
        crossPeriods(0, 0),
        crossPeriods(0, 1),
        crossPeriods(0, 2),
        crossPeriods(0, 3),
        crossPeriods(1, 0),
        crossPeriods(2, 0),
        crossPeriods(3, 0),
        crossPeriods(4, 0)
      ],
      id: 2,
      type: 'light' // 8 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(0, 4),
        crossPeriods(0, 5),
        crossPeriods(0, 6),
        crossPeriods(1, 4),
        crossPeriods(2, 4),
        crossPeriods(3, 4),
        crossPeriods(4, 4),
        crossPeriods(1, 5),
        crossPeriods(2, 5),
        crossPeriods(3, 5),
        crossPeriods(4, 5),
        crossPeriods(1, 6),
        crossPeriods(2, 6),
        crossPeriods(3, 6),
        crossPeriods(4, 6)
      ],
      id: 4,
      type: 'blue' // 15 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(1, 1),
        crossPeriods(1, 2),
        crossPeriods(1, 3),
        crossPeriods(2, 1),
        crossPeriods(3, 1),
        crossPeriods(4, 1),
        crossPeriods(2, 2),
        crossPeriods(3, 2),
        crossPeriods(4, 2),
        crossPeriods(2, 3),
        crossPeriods(3, 3),
        crossPeriods(4, 3)
      ],
      id: 3,
      type: 'red' // 12 SUCCESS!
    }
  ]
}

const crossValideModelSevenDerivFour: IMatchValidate = {
  columns: undefined,
  rows: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.dark(4), callStoneOcorrence.dark(5), callStoneOcorrence.dark(6)
          ]
        ],
        stone: 'dark',
        period: 3,
        direction: 'row',
        idMatch: 'match_row0__4'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(1), callStoneOcorrence.light(2), callStoneOcorrence.light(3),
            callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(6)
          ]
        ],
        stone: 'light',
        period: 4,
        direction: 'row',
        idMatch: 'match_row0__1'
      }
    ]
  ],
  cross: [
    {
      occurrences: [
        crossPeriods(0, 1),
        crossPeriods(0, 2),
        crossPeriods(0, 3),
        crossPeriods(0, 4),
        crossPeriods(1, 3),
        crossPeriods(2, 3),
        crossPeriods(3, 3),
        crossPeriods(1, 4),
        crossPeriods(2, 4),
        crossPeriods(1, 2),
        crossPeriods(1, 5),
        crossPeriods(2, 5),
        crossPeriods(2, 6),
        crossPeriods(3, 1),
        crossPeriods(3, 2)
      ],
      id: 3,
      type: 'red' // 15 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(2, 0),
        crossPeriods(2, 1),
        crossPeriods(2, 2),
        crossPeriods(0, 0),
        crossPeriods(1, 0),
        crossPeriods(3, 0),
        crossPeriods(4, 0)
      ],
      id: 1,
      type: 'dark' // 8 SUCCESS!
    }
  ]
}

const crossValideModelSevenDerivFive: IMatchValidate = {
  columns: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.blue(0), callStoneOcorrence.blue(1), callStoneOcorrence.blue(2)
          ]
        ],
        stone: 'blue',
        period: 5,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ]
  ],
  rows: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(1), callStoneOcorrence.light(2), callStoneOcorrence.light(3),
            callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(6)
          ]
        ],
        stone: 'light',
        period: 4,
        direction: 'row',
        idMatch: 'match_row0__1'
      }
    ]
  ],
  cross: [
    {
      occurrences: [
        crossPeriods(0, 1),
        crossPeriods(0, 2),
        crossPeriods(0, 3),
        crossPeriods(0, 4),
        crossPeriods(1, 3),
        crossPeriods(2, 3),
        crossPeriods(3, 3),
        crossPeriods(1, 4),
        crossPeriods(2, 4),
        crossPeriods(1, 2)
      ],
      id: 3,
      type: 'red' // 11 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(2, 0),
        crossPeriods(2, 1),
        crossPeriods(2, 2),
        crossPeriods(0, 0),
        crossPeriods(1, 0),
        crossPeriods(3, 0),
        crossPeriods(4, 0),
        crossPeriods(1, 1),
        crossPeriods(3, 1)
      ],
      id: 1,
      type: 'dark' // 8 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(3, 4),
        crossPeriods(3, 5),
        crossPeriods(3, 6),
        crossPeriods(0, 6),
        crossPeriods(1, 6),
        crossPeriods(2, 6)
      ],
      id: 1,
      type: 'dark' // 8 SUCCESS!
    }
  ]
}

const crossValideModelSevenDerivSix: IMatchValidate = {
  columns: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.blue(0), callStoneOcorrence.blue(1), callStoneOcorrence.blue(2),
            callStoneOcorrence.blue(3)
          ]
        ],
        stone: 'blue',
        period: 5,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.dark(0), callStoneOcorrence.dark(1), callStoneOcorrence.dark(2),
            callStoneOcorrence.dark(3)
          ]
        ],
        stone: 'dark',
        period: 6,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ]
  ],
  rows: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(1), callStoneOcorrence.light(2), callStoneOcorrence.light(3),
            callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(6)
          ]
        ],
        stone: 'light',
        period: 4,
        direction: 'row',
        idMatch: 'match_row0__1'
      }
    ]
  ],
  cross: [
    {
      occurrences: [
        crossPeriods(0, 1),
        crossPeriods(0, 2),
        crossPeriods(0, 3),
        crossPeriods(0, 4),
        crossPeriods(1, 3),
        crossPeriods(2, 3),
        crossPeriods(3, 3),
        crossPeriods(1, 4),
        crossPeriods(2, 4),
        crossPeriods(1, 2)
      ],
      id: 3,
      type: 'red' // 11 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(2, 0),
        crossPeriods(2, 1),
        crossPeriods(2, 2),
        crossPeriods(0, 0),
        crossPeriods(1, 0),
        crossPeriods(3, 0),
        crossPeriods(4, 0),
        crossPeriods(1, 1),
        crossPeriods(3, 1)
      ],
      id: 1,
      type: 'dark' // 8 SUCCESS!
    }
  ]
}

const crossValideModelSevenDerivSeven: IMatchValidate = {
  columns: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.dark(0), callStoneOcorrence.dark(1), callStoneOcorrence.dark(2),
            callStoneOcorrence.dark(3), callStoneOcorrence.dark(4)
          ]
        ],
        stone: 'dark',
        period: 0,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.dark(1), callStoneOcorrence.dark(2), callStoneOcorrence.dark(3)
          ]
        ],
        stone: 'dark',
        period: 1,
        direction: 'column',
        idMatch: 'match_column0__1'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.dark(0), callStoneOcorrence.dark(1), callStoneOcorrence.dark(2),
            callStoneOcorrence.dark(3)
          ]
        ],
        stone: 'dark',
        period: 6,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ]
  ],
  rows: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(1), callStoneOcorrence.light(2), callStoneOcorrence.light(3),
            callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(6)
          ]
        ],
        stone: 'light',
        period: 4,
        direction: 'row',
        idMatch: 'match_row0__1'
      }
    ]
  ],
  cross: [
    {
      occurrences: [
        crossPeriods(0, 1),
        crossPeriods(0, 2),
        crossPeriods(0, 3),
        crossPeriods(0, 4),
        crossPeriods(1, 2),
        crossPeriods(2, 2),
        crossPeriods(3, 2),
        crossPeriods(1, 3),
        crossPeriods(2, 3),
        crossPeriods(1, 4),
        crossPeriods(2, 4)
      ],
      id: 3,
      type: 'red' // 11 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(3, 3),
        crossPeriods(3, 4),
        crossPeriods(3, 5),
        crossPeriods(0, 5),
        crossPeriods(1, 5),
        crossPeriods(2, 5)
      ],
      id: 4,
      type: 'blue' // 8 SUCCESS!
    }
  ]
}

const crossValideModelSevenDerivEight: IMatchValidate = {
  columns: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.dark(0), callStoneOcorrence.dark(1), callStoneOcorrence.dark(2),
            callStoneOcorrence.dark(3)
          ]
        ],
        stone: 'dark',
        period: 6,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ]
  ],
  rows: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(1), callStoneOcorrence.light(2), callStoneOcorrence.light(3),
            callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(6)
          ]
        ],
        stone: 'light',
        period: 4,
        direction: 'row',
        idMatch: 'match_row0__1'
      }
    ]
  ],
  cross: [
    {
      occurrences: [
        crossPeriods(0, 1),
        crossPeriods(0, 2),
        crossPeriods(0, 3),
        crossPeriods(0, 4),
        crossPeriods(1, 2),
        crossPeriods(2, 2),
        crossPeriods(2, 3),
        crossPeriods(2, 4)
      ],
      id: 3,
      type: 'red' // 11 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(1, 3),
        crossPeriods(1, 4),
        crossPeriods(1, 5),
        crossPeriods(0, 5),
        crossPeriods(2, 5),
        crossPeriods(3, 5),
        crossPeriods(3, 3),
        crossPeriods(3, 4)
      ],
      id: 4,
      type: 'blue' // 8 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(3, 0),
        crossPeriods(3, 1),
        crossPeriods(3, 2),
        crossPeriods(0, 0),
        crossPeriods(1, 0),
        crossPeriods(2, 0),
        crossPeriods(4, 0),
        crossPeriods(1, 1),
        crossPeriods(2, 1)
      ],
      id: 1,
      type: 'dark' // 8 SUCCESS!
    }
  ]
}

export const sevenDerivs = {
  crossTableModelSevenDerivOne,
  crossTableModelSevenDerivTwo,
  crossTableModelSevenDerivThree,
  crossTableModelSevenDerivFour,
  crossTableModelSevenDerivFive,
  crossTableModelSevenDerivSix,
  crossTableModelSevenDerivSeven,
  crossTableModelSevenDerivEight,
  clearCrossTableModelSevenDerivOne,
  clearCrossTableModelSevenDerivTwo,
  clearCrossTableModelSevenDerivThree,
  clearCrossTableModelSevenDerivFour,
  clearCrossTableModelSevenDerivFive,
  clearCrossTableModelSevenDerivSix,
  clearCrossTableModelSevenDerivSeven,
  clearCrossTableModelSevenDerivEight,
  crossValideModelSevenDerivOne,
  crossValideModelSevenDerivTwo,
  crossValideModelSevenDerivThree,
  crossValideModelSevenDerivFour,
  crossValideModelSevenDerivFive,
  crossValideModelSevenDerivSix,
  crossValideModelSevenDerivSeven,
  crossValideModelSevenDerivEight
}
