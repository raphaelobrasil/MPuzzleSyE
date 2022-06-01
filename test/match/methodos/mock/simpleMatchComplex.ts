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

const multipleSimpleMatchOne: IBasicTable[][] = [
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.red, callStone.red, callStone.red],
  [callStone.blue, callStone.blue, callStone.blue, callStone.blue, callStone.blue, callStone.blue, callStone.blue],
  [callStone.light, callStone.light, callStone.light, callStone.dark, callStone.dark, callStone.dark, callStone.dark],
  [callStone.green, callStone.green, callStone.green, callStone.green, callStone.green, callStone.green, callStone.green],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light]
]

const multipleSimpleMatchTwo: IBasicTable[][] = [
  [callStone.light, callStone.green, callStone.red, callStone.light, callStone.dark, callStone.light, callStone.light],
  [callStone.light, callStone.green, callStone.red, callStone.light, callStone.dark, callStone.red, callStone.light],
  [callStone.light, callStone.green, callStone.red, callStone.light, callStone.dark, callStone.red, callStone.light],
  [callStone.light, callStone.green, callStone.red, callStone.light, callStone.dark, callStone.red, callStone.light],
  [callStone.light, callStone.green, callStone.light, callStone.light, callStone.dark, callStone.red, callStone.light]
]

const multipleSimpleMatchThree: IBasicTable[][] = [
  [callStone.light, callStone.red, callStone.red, callStone.red, callStone.blue, callStone.dark, callStone.red],
  [callStone.light, callStone.blue, callStone.light, callStone.green, callStone.blue, callStone.dark, callStone.red],
  [callStone.light, callStone.blue, callStone.light, callStone.green, callStone.blue, callStone.dark, callStone.red],
  [callStone.light, callStone.blue, callStone.light, callStone.green, callStone.light, callStone.dark, callStone.light],
  [callStone.light, callStone.light, callStone.blue, callStone.blue, callStone.blue, callStone.blue, callStone.red]
]

const multipleSimpleMatchFour: IBasicTable[][] = [
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.red, callStone.red],
  [callStone.light, callStone.red, callStone.light, callStone.dark, callStone.light, callStone.green, callStone.light],
  [callStone.light, callStone.red, callStone.dark, callStone.dark, callStone.dark, callStone.green, callStone.light],
  [callStone.red, callStone.red, callStone.red, callStone.dark, callStone.light, callStone.green, callStone.green],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.blue, callStone.blue, callStone.blue]
]

const valideMultipleSimpleMatchOne: IMatchValidate = {
  columns: [],
  rows: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2),
            callStoneOcorrence.light(3)
          ]
        ],
        stone: 'light',
        period: 0,
        direction: 'row',
        idMatch: 'match_row0__0'
      },
      {
        orderPeriod: [
          [
            callStoneOcorrence.red(4), callStoneOcorrence.red(5), callStoneOcorrence.red(6)
          ]
        ],
        stone: 'red',
        period: 0,
        direction: 'row',
        idMatch: 'match_row1__4'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.blue(0), callStoneOcorrence.blue(1), callStoneOcorrence.blue(2),
            callStoneOcorrence.blue(3), callStoneOcorrence.blue(4), callStoneOcorrence.blue(5),
            callStoneOcorrence.blue(6)
          ]
        ],
        stone: 'blue',
        period: 1,
        direction: 'row',
        idMatch: 'match_row0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.dark(3), callStoneOcorrence.dark(4), callStoneOcorrence.dark(5),
            callStoneOcorrence.dark(6)
          ]
        ],
        stone: 'dark',
        period: 2,
        direction: 'row',
        idMatch: 'match_row0__3'
      },
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2)
          ]
        ],
        stone: 'light',
        period: 2,
        direction: 'row',
        idMatch: 'match_row1__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.green(0), callStoneOcorrence.green(1), callStoneOcorrence.green(2),
            callStoneOcorrence.green(3), callStoneOcorrence.green(4), callStoneOcorrence.green(5),
            callStoneOcorrence.green(6)
          ]
        ],
        stone: 'green',
        period: 3,
        direction: 'row',
        idMatch: 'match_row0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2),
            callStoneOcorrence.light(3), callStoneOcorrence.light(4), callStoneOcorrence.light(5),
            callStoneOcorrence.light(6)
          ]
        ],
        stone: 'light',
        period: 4,
        direction: 'row',
        idMatch: 'match_row0__0'
      }
    ]
  ]
}

const valideMultipleSimpleMatchTwo: IMatchValidate = {
  columns: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2),
            callStoneOcorrence.light(3), callStoneOcorrence.light(4)
          ]
        ],
        stone: 'light',
        period: 0,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.green(0), callStoneOcorrence.green(1), callStoneOcorrence.green(2),
            callStoneOcorrence.green(3), callStoneOcorrence.green(4)
          ]
        ],
        stone: 'green',
        period: 1,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.red(0), callStoneOcorrence.red(1), callStoneOcorrence.red(2),
            callStoneOcorrence.red(3)
          ]
        ],
        stone: 'red',
        period: 2,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2),
            callStoneOcorrence.light(3), callStoneOcorrence.light(4)
          ]
        ],
        stone: 'light',
        period: 3,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.dark(0), callStoneOcorrence.dark(1), callStoneOcorrence.dark(2),
            callStoneOcorrence.dark(3), callStoneOcorrence.dark(4)
          ]
        ],
        stone: 'dark',
        period: 4,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.red(1), callStoneOcorrence.red(2), callStoneOcorrence.red(3),
            callStoneOcorrence.red(4)
          ]
        ],
        stone: 'red',
        period: 5,
        direction: 'column',
        idMatch: 'match_column0__1'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2),
            callStoneOcorrence.light(3), callStoneOcorrence.light(4)
          ]
        ],
        stone: 'light',
        period: 6,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ]
  ],
  rows: []
}

const valideMultipleSimpleMatchThree: IMatchValidate = {
  columns: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2),
            callStoneOcorrence.light(3), callStoneOcorrence.light(4)
          ]
        ],
        stone: 'light',
        period: 0,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.blue(1), callStoneOcorrence.blue(2), callStoneOcorrence.blue(3)
          ]
        ],
        stone: 'blue',
        period: 1,
        direction: 'column',
        idMatch: 'match_column0__1'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(1), callStoneOcorrence.light(2), callStoneOcorrence.light(3)
          ]
        ],
        stone: 'light',
        period: 2,
        direction: 'column',
        idMatch: 'match_column0__1'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.green(1), callStoneOcorrence.green(2), callStoneOcorrence.green(3)
          ]
        ],
        stone: 'green',
        period: 3,
        direction: 'column',
        idMatch: 'match_column0__1'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.blue(0), callStoneOcorrence.blue(1), callStoneOcorrence.blue(2)
          ]
        ],
        stone: 'blue',
        period: 4,
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
        period: 5,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.red(0), callStoneOcorrence.red(1), callStoneOcorrence.red(2)
          ]
        ],
        stone: 'red',
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
            callStoneOcorrence.red(1), callStoneOcorrence.red(2), callStoneOcorrence.red(3)
          ]
        ],
        stone: 'red',
        period: 0,
        direction: 'row',
        idMatch: 'match_row0__1'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.blue(2), callStoneOcorrence.blue(3), callStoneOcorrence.blue(4),
            callStoneOcorrence.blue(5)
          ]
        ],
        stone: 'blue',
        period: 4,
        direction: 'row',
        idMatch: 'match_row0__2'
      }
    ]
  ],
  cross: []
}

const valideMultipleSimpleMatchFour: IMatchValidate = {
  columns: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.green(1), callStoneOcorrence.green(2), callStoneOcorrence.green(3)
          ]
        ],
        stone: 'green',
        period: 5,
        direction: 'column',
        idMatch: 'match_column0__1'
      }
    ]
  ],
  rows: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(0), callStoneOcorrence.light(1), callStoneOcorrence.light(2),
            callStoneOcorrence.light(3)
          ]
        ],
        stone: 'light',
        period: 4,
        direction: 'row',
        idMatch: 'match_row0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.blue(4), callStoneOcorrence.blue(5), callStoneOcorrence.blue(6)
          ]
        ],
        stone: 'blue',
        period: 4,
        direction: 'row',
        idMatch: 'match_row1__4'
      }
    ]
  ],
  cross: [
    {
      occurrences: [
        crossPeriods(0, 0),
        crossPeriods(0, 1),
        crossPeriods(0, 2),
        crossPeriods(0, 3),
        crossPeriods(0, 4),
        crossPeriods(1, 0),
        crossPeriods(2, 0)
      ],
      id: 2,
      type: 'light' // 11 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(2, 2),
        crossPeriods(2, 3),
        crossPeriods(2, 4),
        crossPeriods(1, 3),
        crossPeriods(3, 3)
      ],
      id: 1,
      type: 'dark' // 11 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(3, 0),
        crossPeriods(3, 1),
        crossPeriods(3, 2),
        crossPeriods(1, 1),
        crossPeriods(2, 1)
      ],
      id: 3,
      type: 'red' // 11 SUCCESS!
    }
  ]
}

const clearMultipleSimpleMatchOne: IBasicTable[][] = [
  [callStoneFour.light, callStone.void, callStone.void, callStoneFour.dark, callStone.void, callStone.void, callStone.void],
  [callStoneFive.blue, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStoneFive.green, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStoneFive.light, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearMultipleSimpleMatchTwo: IBasicTable[][] = [
  [callStoneFive.light, callStoneFive.green, callStoneFour.red, callStoneFive.light, callStoneFive.dark, callStone.light, callStoneFive.light],
  [callStone.void, callStone.void, callStone.light, callStone.void, callStone.void, callStoneFour.red, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearMultipleSimpleMatchThree: IBasicTable[][] = [
  [callStoneFive.light, callStone.light, callStoneFour.blue, callStone.void, callStone.light, callStoneFour.dark, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.red],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearMultipleSimpleMatchFour: IBasicTable[][] = [
  [callStoneFive.light, callStoneFive.red, callStone.light, callStoneFive.dark, callStone.light, callStone.red, callStone.red],
  [callStoneFour.light, callStone.void, callStone.void, callStone.void, callStone.light, callStone.void, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.green],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

export const simpleMatchTestMultiple = {
  multipleSimpleMatchOne,
  multipleSimpleMatchTwo,
  multipleSimpleMatchThree,
  multipleSimpleMatchFour,
  valideMultipleSimpleMatchOne,
  valideMultipleSimpleMatchTwo,
  valideMultipleSimpleMatchThree,
  valideMultipleSimpleMatchFour,
  clearMultipleSimpleMatchOne,
  clearMultipleSimpleMatchTwo,
  clearMultipleSimpleMatchThree,
  clearMultipleSimpleMatchFour
}
