import { IBasicTable, IMatchValidate, IOccurrence } from '../../../src/engines'

const callStone = {
  void: { id: 0, type: 'void', category: '' },
  dark: { id: 1, type: 'dark', category: '' },
  light: { id: 2, type: 'light', category: '' },
  red: { id: 3, type: 'red', category: '' },
  blue: { id: 4, type: 'blue', category: '' },
  green: { id: 5, type: 'green', category: '' }
}
const callStoneOcorrence = {
  dark (occurrence: number): IOccurrence { return { id: 1, type: 'dark', category: '', occurrence: occurrence } },
  light (occurrence: number): IOccurrence { return { id: 2, type: 'light', category: '', occurrence: occurrence } },
  red (occurrence: number): IOccurrence { return { id: 3, type: 'red', category: '', occurrence: occurrence } },
  blue (occurrence: number): IOccurrence { return { id: 4, type: 'blue', category: '', occurrence: occurrence } },
  green (occurrence: number): IOccurrence { return { id: 5, type: 'green', category: '', occurrence: occurrence } }
}
const crossPeriods = (periodRow: number, periodColumn: number) => ({
  periodRow: periodRow,
  periodColumn: periodColumn
})

const crossTableModelOne: IBasicTable[][] = [
  [callStone.light, callStone.red, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.blue, callStone.red, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.red, callStone.blue, callStone.red, callStone.green, callStone.light, callStone.green],
  [callStone.red, callStone.red, callStone.red, callStone.blue, callStone.red, callStone.red, callStone.red],
  [callStone.green, callStone.green, callStone.green, callStone.blue, callStone.green, callStone.green, callStone.green]
]

const crossTableModelTwo: IBasicTable[][] = [
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.light, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.light, callStone.light, callStone.red, callStone.green, callStone.dark, callStone.green],
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.dark, callStone.dark, callStone.dark],
  [callStone.blue, callStone.green, callStone.red, callStone.green, callStone.red, callStone.dark, callStone.light]
]

const crossTableModelThree: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.light, callStone.light, callStone.red, callStone.red],
  [callStone.red, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light, callStone.light],
  [callStone.red, callStone.blue, callStone.red, callStone.light, callStone.dark, callStone.red, callStone.dark],
  [callStone.blue, callStone.green, callStone.red, callStone.light, callStone.red, callStone.dark, callStone.light]
]

const crossTableModelFour: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red, callStone.red],
  [callStone.blue, callStone.blue, callStone.red, callStone.blue, callStone.blue, callStone.blue, callStone.light],
  [callStone.blue, callStone.light, callStone.dark, callStone.blue, callStone.light, callStone.light, callStone.light],
  [callStone.blue, callStone.blue, callStone.blue, callStone.blue, callStone.blue, callStone.blue, callStone.dark],
  [callStone.blue, callStone.green, callStone.red, callStone.light, callStone.red, callStone.dark, callStone.light]
]

const crossTableModelFive: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.red, callStone.red],
  [callStone.blue, callStone.blue, callStone.red, callStone.blue, callStone.blue, callStone.red, callStone.light],
  [callStone.blue, callStone.light, callStone.dark, callStone.blue, callStone.blue, callStone.light, callStone.light],
  [callStone.blue, callStone.blue, callStone.blue, callStone.dark, callStone.blue, callStone.blue, callStone.blue],
  [callStone.green, callStone.green, callStone.red, callStone.light, callStone.red, callStone.dark, callStone.light]
]

const crossTableModelSix: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.dark, callStone.dark, callStone.dark, callStone.red],
  [callStone.dark, callStone.blue, callStone.dark, callStone.dark, callStone.dark, callStone.red, callStone.dark],
  [callStone.dark, callStone.light, callStone.dark, callStone.blue, callStone.blue, callStone.light, callStone.dark],
  [callStone.dark, callStone.dark, callStone.dark, callStone.dark, callStone.dark, callStone.dark, callStone.dark],
  [callStone.green, callStone.green, callStone.dark, callStone.light, callStone.dark, callStone.dark, callStone.dark]
]

const crossTableModelSeven: IBasicTable[][] = [
  [callStone.red, callStone.red, callStone.red, callStone.red, callStone.red, callStone.red, callStone.red],
  [callStone.dark, callStone.red, callStone.dark, callStone.dark, callStone.dark, callStone.red, callStone.dark],
  [callStone.dark, callStone.red, callStone.dark, callStone.dark, callStone.dark, callStone.red, callStone.dark],
  [callStone.dark, callStone.dark, callStone.dark, callStone.dark, callStone.dark, callStone.dark, callStone.dark],
  [callStone.dark, callStone.dark, callStone.dark, callStone.light, callStone.dark, callStone.dark, callStone.dark]
]

const crossValideModelOne: IMatchValidate = {
  columns: undefined,
  rows: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.red(4), callStoneOcorrence.red(5), callStoneOcorrence.red(6)
          ]
        ],
        stone: 'red',
        period: 3,
        direction: 'row',
        idMatch: 'match_row0__0'
      }
    ],
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.green(0), callStoneOcorrence.green(1), callStoneOcorrence.green(2)
          ],
          [
            callStoneOcorrence.green(4), callStoneOcorrence.green(5), callStoneOcorrence.green(6)
          ]
        ],
        stone: 'green',
        period: 4,
        direction: 'row',
        idMatch: 'match_row0__0'
      }
    ]
  ],
  cross: [
    {
      occurrences: [
        crossPeriods(3, 0),
        crossPeriods(3, 1),
        crossPeriods(3, 2),
        crossPeriods(0, 1),
        crossPeriods(1, 1),
        crossPeriods(2, 1)
      ],
      id: 3,
      type: 'red'
    }
  ]
}

const crossValideModelTwo: IMatchValidate = {
  columns: undefined,
  rows: undefined,
  cross: [
    {
      occurrences: [
        crossPeriods(2, 0),
        crossPeriods(2, 1),
        crossPeriods(2, 2),
        crossPeriods(0, 0),
        crossPeriods(1, 0)
      ],
      id: 2,
      type: 'light'
    },
    {
      occurrences: [
        crossPeriods(3, 4),
        crossPeriods(3, 5),
        crossPeriods(3, 6),
        crossPeriods(2, 5),
        crossPeriods(4, 5)
      ],
      id: 1,
      type: 'dark'
    }
  ]
}

const crossValideModelThree: IMatchValidate = {
  columns: undefined,
  rows: undefined,
  cross: [
    {
      occurrences: [
        crossPeriods(2, 0),
        crossPeriods(2, 1),
        crossPeriods(2, 2),
        crossPeriods(2, 3),
        crossPeriods(2, 4),
        crossPeriods(2, 5),
        crossPeriods(2, 6),
        crossPeriods(0, 3),
        crossPeriods(1, 3),
        crossPeriods(3, 3),
        crossPeriods(4, 3)
      ],
      id: 2,
      type: 'light'
    }
  ]
}

const crossValideModelFour: IMatchValidate = {
  columns: undefined,
  rows: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.light(4), callStoneOcorrence.light(5), callStoneOcorrence.light(6)
          ]
        ],
        stone: 'light',
        period: 2,
        direction: 'row',
        idMatch: 'match_row0__4'
      }
    ]
  ],
  cross: [
    {
      occurrences: [
        crossPeriods(1, 3),
        crossPeriods(1, 4),
        crossPeriods(1, 5),
        crossPeriods(0, 3),
        crossPeriods(2, 3),
        crossPeriods(3, 3),
        crossPeriods(3, 0),
        crossPeriods(3, 1),
        crossPeriods(3, 2),
        crossPeriods(3, 4),
        crossPeriods(3, 5),
        crossPeriods(1, 0),
        crossPeriods(2, 0),
        crossPeriods(4, 0)
      ], // 14 OK SUCESS
      id: 4,
      type: 'blue'
    }
  ]
}

const crossValideModelFive: IMatchValidate = {
  columns: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.blue(0), callStoneOcorrence.blue(1), callStoneOcorrence.blue(2)
          ]
        ],
        stone: 'blue',
        period: 3,
        direction: 'column',
        idMatch: 'match_column0__0'
      }
    ]
  ],
  rows: undefined,
  cross: [
    {
      occurrences: [
        crossPeriods(3, 0),
        crossPeriods(3, 1),
        crossPeriods(3, 2),
        crossPeriods(1, 0),
        crossPeriods(2, 0)
      ],
      id: 4,
      type: 'blue'
    },
    {
      occurrences: [
        crossPeriods(3, 4),
        crossPeriods(3, 5),
        crossPeriods(3, 6),
        crossPeriods(1, 4),
        crossPeriods(2, 4)
      ],
      id: 4,
      type: 'blue'
    } // ALL OK
  ]
}

const crossValideModelSix: IMatchValidate = {
  columns: undefined,
  rows: [
    [
      {
        orderPeriod: [
          [
            callStoneOcorrence.dark(3), callStoneOcorrence.dark(4), callStoneOcorrence.dark(5)
          ]
        ],
        stone: 'dark',
        period: 0,
        direction: 'row',
        idMatch: 'match_row0__3'
      }
    ]
  ],
  cross: [
    {
      occurrences: [
        crossPeriods(1, 2),
        crossPeriods(1, 3),
        crossPeriods(1, 4),
        crossPeriods(2, 2),
        crossPeriods(3, 2),
        crossPeriods(4, 2),
        crossPeriods(3, 0),
        crossPeriods(3, 1),
        crossPeriods(3, 3),
        crossPeriods(3, 4),
        crossPeriods(3, 5),
        crossPeriods(3, 6),
        crossPeriods(1, 0),
        crossPeriods(2, 0),
        crossPeriods(1, 6),
        crossPeriods(2, 6),
        crossPeriods(4, 6),
        crossPeriods(4, 4),
        crossPeriods(4, 5)
      ],
      id: 1,
      type: 'dark' // 19 SUCCESS!
    }
  ]
}

const crossValideModelSeven: IMatchValidate = {
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
        crossPeriods(1, 1),
        crossPeriods(2, 1),
        crossPeriods(1, 5),
        crossPeriods(2, 5)
      ],
      id: 3,
      type: 'red' // 11 SUCCESS!
    },
    {
      occurrences: [
        crossPeriods(1, 2),
        crossPeriods(1, 3),
        crossPeriods(1, 4),
        crossPeriods(2, 2),
        crossPeriods(3, 2),
        crossPeriods(4, 2),
        crossPeriods(2, 3),
        crossPeriods(3, 3),
        crossPeriods(2, 4),
        crossPeriods(3, 4),
        crossPeriods(4, 4),
        crossPeriods(3, 0),
        crossPeriods(3, 1),
        crossPeriods(3, 5),
        crossPeriods(3, 6),
        crossPeriods(1, 0),
        crossPeriods(2, 0),
        crossPeriods(4, 0),
        crossPeriods(1, 6),
        crossPeriods(2, 6),
        crossPeriods(4, 6),
        crossPeriods(4, 1),
        crossPeriods(4, 5)
      ],
      id: 1,
      type: 'dark' // 23 SUCCESS!
    }
  ]
}

const clearTableModelOne: IBasicTable[][] = [
  [callStone.light, callStone.void, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.blue, callStone.void, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.void, callStone.blue, callStone.red, callStone.green, callStone.light, callStone.green],
  [callStone.void, callStone.void, callStone.void, callStone.blue, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.blue, callStone.void, callStone.void, callStone.void]
]

const clearTableModelTwo: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.blue, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.void, callStone.blue, callStone.red, callStone.red, callStone.green, callStone.void, callStone.green],
  [callStone.void, callStone.green, callStone.red, callStone.blue, callStone.red, callStone.void, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.green, callStone.void, callStone.void, callStone.void]
]

const clearTableModelThree: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.void, callStone.light, callStone.red, callStone.red],
  [callStone.red, callStone.blue, callStone.red, callStone.void, callStone.blue, callStone.red, callStone.light],
  [callStone.red, callStone.blue, callStone.red, callStone.void, callStone.dark, callStone.red, callStone.dark],
  [callStone.blue, callStone.green, callStone.red, callStone.void, callStone.red, callStone.dark, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelFour: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.light, callStone.light, callStone.red, callStone.red],
  [callStone.void, callStone.blue, callStone.red, callStone.void, callStone.red, callStone.dark, callStone.light],
  [callStone.void, callStone.light, callStone.dark, callStone.void, callStone.void, callStone.void, callStone.dark],
  [callStone.void, callStone.green, callStone.red, callStone.void, callStone.void, callStone.void, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelFive: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.dark, callStone.light, callStone.red, callStone.red],
  [callStone.green, callStone.blue, callStone.red, callStone.light, callStone.red, callStone.red, callStone.light],
  [callStone.void, callStone.light, callStone.dark, callStone.void, callStone.void, callStone.light, callStone.light],
  [callStone.void, callStone.green, callStone.red, callStone.void, callStone.void, callStone.dark, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelSix: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.blue, callStone.red, callStone.red],
  [callStone.green, callStone.blue, callStone.void, callStone.light, callStone.void, callStone.light, callStone.void],
  [callStone.void, callStone.light, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.green, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

const clearTableModelSeven: IBasicTable[][] = [
  [callStone.void, callStone.void, callStone.void, callStone.light, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void]
]

export {
  crossTableModelOne,
  crossTableModelTwo,
  crossTableModelThree,
  crossValideModelOne,
  crossValideModelTwo,
  crossValideModelThree,
  crossTableModelFour,
  crossTableModelFive,
  crossValideModelFour,
  crossValideModelFive,
  crossTableModelSix,
  crossValideModelSix,
  clearTableModelOne,
  clearTableModelTwo,
  clearTableModelThree,
  clearTableModelFour,
  clearTableModelFive,
  clearTableModelSix,
  crossTableModelSeven,
  crossValideModelSeven,
  clearTableModelSeven
}
