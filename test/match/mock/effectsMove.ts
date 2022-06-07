import { IBasicTable, ISequencial, ISequenceHistory } from '../../../src/engines'

const crossPeriods = (periodRow: number, periodColumn: number) => ({
  periodRow: periodRow,
  periodColumn: periodColumn
})

const sequenceStage = (row: number, column: number, stage: number) => ({
  row,
  column,
  stage
})

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

const tableModelEffectOneModelOne: IBasicTable[][] = [
  [callStoneFour.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.light, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.red, callStoneFour.light, callStone.blue, callStone.green, callStone.blue, callStone.green],
  [callStone.red, callStone.light, callStone.red, callStone.blue, callStone.blue, callStoneFour.red, callStone.red],
  [callStone.green, callStone.blue, callStone.green, callStone.green, callStone.light, callStoneFour.blue, callStone.light]
]

const tableModelEffectOneModelTwo: IBasicTable[][] = [
  [callStoneFour.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.light, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.light, callStoneFour.light, callStone.blue, callStone.green, callStone.blue, callStone.green],
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.blue, callStoneFour.red, callStone.red],
  [callStone.green, callStone.blue, callStone.green, callStone.green, callStone.light, callStoneFour.blue, callStone.light]
]

const tableModelEffectOneModelThree: IBasicTable[][] = [
  [callStoneFour.blue, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.light, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.red, callStoneFour.light, callStone.blue, callStone.green, callStone.blue, callStone.green],
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.red, callStoneFour.red, callStone.red],
  [callStone.green, callStone.blue, callStone.green, callStone.green, callStone.light, callStone.blue, callStone.light]
]

const tableModelEffectOneModelFour: IBasicTable[][] = [
  [callStoneFour.blue, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.light, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.red, callStoneFour.light, callStone.blue, callStone.green, callStone.blue, callStone.green],
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.dark, callStoneFour.red, callStone.red],
  [callStone.green, callStone.blue, callStone.green, callStone.green, callStone.light, callStone.blue, callStone.light]
]

const tableModelEffectTwoModelOne: IBasicTable[][] = [
  [callStoneFour.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStoneFour.light, callStoneFour.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.green, callStoneFour.red, callStone.blue, callStone.red, callStone.green, callStone.blue, callStone.green],
  [callStone.green, callStoneFour.light, callStoneFour.red, callStoneFive.blue, callStone.blue, callStone.light, callStone.red],
  [callStoneFour.green, callStoneFour.blue, callStone.green, callStone.green, callStone.light, callStone.blue, callStone.light]
]

const tableModelEffectTwoModelTwo: IBasicTable[][] = [
  [callStoneFour.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStoneFour.light, callStoneFour.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.red, callStoneFour.red, callStone.blue, callStone.red, callStone.green, callStone.blue, callStone.green],
  [callStoneFour.light, callStoneFour.light, callStoneFour.light, callStoneFive.blue, callStone.blue, callStone.light, callStone.red],
  [callStone.red, callStoneFour.blue, callStone.green, callStone.green, callStone.light, callStone.blue, callStone.light]
]

const tableModelEffectTwoModelThree: IBasicTable[][] = [
  [callStoneFour.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStoneFour.light, callStoneFour.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.red, callStoneFour.red, callStone.blue, callStone.red, callStone.blue, callStone.green, callStone.green],
  [callStoneFour.light, callStoneFour.light, callStoneFour.blue, callStoneFive.blue, callStone.blue, callStone.light, callStone.red],
  [callStone.red, callStoneFour.blue, callStone.green, callStone.green, callStone.blue, callStone.green, callStone.light]
]

const tableModelEffectOneModelOneResultOne: ISequencial = {
  activated: [{
    row: 0,
    column: 0
  }],
  sequence: [
    crossPeriods(0, 0),
    crossPeriods(0, 1),
    crossPeriods(1, 0)
  ]
}

const tableModelEffectTwoModelOneResultOne: ISequencial = {
  activated: [
    {
      row: 2,
      column: 2
    },
    {
      row: 0,
      column: 0
    }
  ],
  sequence: [
    crossPeriods(2, 2),
    crossPeriods(2, 1),
    crossPeriods(2, 3),
    crossPeriods(1, 2),
    crossPeriods(3, 2),
    crossPeriods(0, 0),
    crossPeriods(0, 1),
    crossPeriods(1, 0)
  ]
}

const tableModelEffectThreeModelOneResultOne: ISequencial = {
  activated: [
    {
      row: 3,
      column: 5
    }
  ],
  sequence: [
    crossPeriods(3, 5),
    crossPeriods(3, 4),
    crossPeriods(3, 6),
    crossPeriods(2, 5),
    crossPeriods(4, 5)
  ]
}

const tableTwoModelEffectModelOneResultOne: ISequencial = {
  activated: [
    {
      row: 4,
      column: 0
    }
  ],
  sequence: [
    crossPeriods(4, 0),
    crossPeriods(4, 1),
    crossPeriods(3, 0)
  ]
}

const tableTwoModelEffectModelOneResultTwo: ISequenceHistory[] = [
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(4, 1),
          crossPeriods(4, 0),
          crossPeriods(4, 2),
          crossPeriods(3, 1)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(4, 1, 0)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(3, 1),
          crossPeriods(3, 0),
          crossPeriods(3, 2),
          crossPeriods(2, 1),
          crossPeriods(4, 1)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(3, 1, 1)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(3, 2),
          crossPeriods(3, 1),
          crossPeriods(3, 3),
          crossPeriods(2, 2),
          crossPeriods(4, 2)
        ],
        order: 1
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(2, 1),
          crossPeriods(2, 0),
          crossPeriods(2, 2),
          crossPeriods(1, 1),
          crossPeriods(3, 1)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(3, 2, 2),
      sequenceStage(2, 1, 2)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_five',
        occurrences: [
          crossPeriods(0, 1),
          crossPeriods(0, 3),
          crossPeriods(1, 1),
          crossPeriods(1, 4),
          crossPeriods(2, 2),
          crossPeriods(2, 5),
          crossPeriods(3, 3),
          crossPeriods(3, 4),
          crossPeriods(4, 1),
          crossPeriods(4, 5)
        ],
        order: 1
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(1, 1),
          crossPeriods(1, 0),
          crossPeriods(1, 2),
          crossPeriods(0, 1),
          crossPeriods(2, 1)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(3, 3, 3),
      sequenceStage(1, 1, 3)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(1, 0),
          crossPeriods(1, 1),
          crossPeriods(0, 0),
          crossPeriods(2, 0)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(1, 0, 4)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(0, 0),
          crossPeriods(0, 1),
          crossPeriods(1, 0)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(0, 0, 5)
    ]
  }
]

const tableThreeModelEffectModelOneResultOne: ISequencial = {
  activated: [
    {
      row: 3,
      column: 0
    },
    {
      row: 3,
      column: 1
    },
    {
      row: 3,
      column: 2
    }
  ],
  sequence: [
    crossPeriods(3, 0),
    crossPeriods(3, 1),
    crossPeriods(2, 0),
    crossPeriods(4, 0),
    crossPeriods(3, 2),
    crossPeriods(2, 1),
    crossPeriods(4, 1),
    crossPeriods(3, 3),
    crossPeriods(2, 2),
    crossPeriods(4, 2)
  ]
}

const tableThreeModelEffectModelOneResultTwo: ISequenceHistory[] = [
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(2, 1),
          crossPeriods(2, 0),
          crossPeriods(2, 2),
          crossPeriods(1, 1),
          crossPeriods(3, 1)
        ],
        order: 1
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(4, 1),
          crossPeriods(4, 0),
          crossPeriods(4, 2),
          crossPeriods(3, 1)
        ],
        order: 2
      },
      {
        category: 'pattern_five',
        occurrences: [
          crossPeriods(0, 1),
          crossPeriods(0, 3),
          crossPeriods(1, 1),
          crossPeriods(1, 4),
          crossPeriods(2, 2),
          crossPeriods(2, 5),
          crossPeriods(3, 3),
          crossPeriods(3, 4),
          crossPeriods(4, 1),
          crossPeriods(4, 5)
        ],
        order: 3
      }
    ],
    stone: [
      sequenceStage(2, 1, 0),
      sequenceStage(4, 1, 0),
      sequenceStage(3, 3, 0)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(1, 1),
          crossPeriods(1, 0),
          crossPeriods(1, 2),
          crossPeriods(0, 1),
          crossPeriods(2, 1)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(1, 1, 1)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(1, 0),
          crossPeriods(1, 1),
          crossPeriods(0, 0),
          crossPeriods(2, 0)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(1, 0, 2)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(0, 0),
          crossPeriods(0, 1),
          crossPeriods(1, 0)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(0, 0, 3)
    ]
  }
]

const tableThreeModelEffectModelThreeResultOne: ISequencial = {
  activated: [
    {
      row: 3,
      column: 2
    },
    {
      row: 3,
      column: 3
    }
  ],
  sequence: [
    crossPeriods(3, 2),
    crossPeriods(3, 1),
    crossPeriods(3, 3),
    crossPeriods(2, 2),
    crossPeriods(4, 2),
    crossPeriods(0, 1),
    crossPeriods(0, 3),
    crossPeriods(1, 1),
    crossPeriods(1, 4),
    crossPeriods(2, 4),
    crossPeriods(3, 4),
    crossPeriods(4, 1),
    crossPeriods(4, 4)
  ]
}

const tableThreeModelEffectModelThreeResultTwo: ISequenceHistory[] = [
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(3, 1),
          crossPeriods(3, 0),
          crossPeriods(3, 2),
          crossPeriods(2, 1),
          crossPeriods(4, 1)
        ],
        order: 1
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(1, 1),
          crossPeriods(1, 0),
          crossPeriods(1, 2),
          crossPeriods(0, 1),
          crossPeriods(2, 1)
        ],
        order: 2
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(4, 1),
          crossPeriods(4, 0),
          crossPeriods(4, 2),
          crossPeriods(3, 1)
        ],
        order: 3
      }
    ],
    stone: [
      sequenceStage(3, 1, 0),
      sequenceStage(1, 1, 0),
      sequenceStage(4, 1, 0)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(3, 0),
          crossPeriods(3, 1),
          crossPeriods(2, 0),
          crossPeriods(4, 0)
        ],
        order: 1
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(2, 1),
          crossPeriods(2, 0),
          crossPeriods(2, 2),
          crossPeriods(1, 1),
          crossPeriods(3, 1)
        ],
        order: 2
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(1, 0),
          crossPeriods(1, 1),
          crossPeriods(0, 0),
          crossPeriods(2, 0)
        ],
        order: 3
      }
    ],
    stone: [
      sequenceStage(3, 0, 1),
      sequenceStage(2, 1, 1),
      sequenceStage(1, 0, 1)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(0, 0),
          crossPeriods(0, 1),
          crossPeriods(1, 0)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(0, 0, 2)
    ]
  }
]

const tableModelEffectOneModelOneResult: IBasicTable[][] = [
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.green, callStone.red, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.void, callStone.light, callStoneFour.light, callStone.blue, callStone.green, callStone.blue, callStone.green],
  [callStone.void, callStone.blue, callStone.red, callStone.blue, callStone.blue, callStoneFour.red, callStone.red],
  [callStone.void, callStone.void, callStone.green, callStone.green, callStone.light, callStoneFour.blue, callStone.light]
]

const tableModelEffectOneModelTwoResult: IBasicTable[][] = [
  [callStoneFive.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.red, callStone.blue, callStone.green, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.green, callStone.blue, callStone.void, callStone.blue, callStone.green, callStone.blue, callStone.green],
  [callStone.void, callStone.void, callStone.void, callStone.green, callStone.blue, callStoneFour.red, callStone.red],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.light, callStoneFour.blue, callStone.light]
]

const tableModelEffectOneModelThreeResult: IBasicTable[][] = [
  [callStoneFour.blue, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.light, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.light, callStone.red, callStoneFour.light, callStone.blue, callStone.green, callStone.void, callStone.green],
  [callStone.red, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.void, callStone.light],
  [callStone.green, callStone.blue, callStone.green, callStone.green, callStone.void, callStone.void, callStone.void]
]

const tableModelEffectTwoModelOneResult: IBasicTable[][] = [
  [callStone.void, callStone.void, callStone.red, callStone.light, callStone.light, callStone.light, callStone.red],
  [callStone.void, callStone.void, callStone.void, callStone.red, callStone.green, callStone.red, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.green, callStone.light, callStone.light, callStone.green],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.red],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.light]
]

const tableModelEffectTwoModelTwoResult: IBasicTable[][] = [
  [callStone.void, callStone.void, callStone.red, callStone.light, callStone.light, callStone.light, callStone.red],
  [callStone.void, callStone.void, callStone.void, callStone.red, callStone.green, callStone.red, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.green, callStone.light, callStone.light, callStone.green],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.red],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.light]
]

const tableModelEffectTwoModelThreeResult: IBasicTable[][] = [
  [callStone.void, callStone.void, callStone.red, callStone.light, callStone.light, callStone.light, callStone.red],
  [callStone.void, callStone.void, callStone.void, callStone.red, callStoneFive.blue, callStone.red, callStone.light],
  [callStone.void, callStone.void, callStone.void, callStone.green, callStone.void, callStone.green, callStone.green],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.light, callStone.red],
  [callStone.void, callStone.void, callStone.void, callStone.void, callStone.void, callStone.green, callStone.light]
]

export {
  tableModelEffectOneModelOne,
  tableModelEffectOneModelTwo,
  tableModelEffectOneModelThree,
  tableModelEffectOneModelFour,
  tableModelEffectTwoModelOne,
  tableModelEffectTwoModelTwo,
  tableModelEffectTwoModelThree,
  tableModelEffectOneModelOneResultOne,
  tableModelEffectTwoModelOneResultOne,
  tableModelEffectThreeModelOneResultOne,
  tableTwoModelEffectModelOneResultOne,
  tableTwoModelEffectModelOneResultTwo,
  tableThreeModelEffectModelOneResultOne,
  tableThreeModelEffectModelOneResultTwo,
  tableThreeModelEffectModelThreeResultOne,
  tableThreeModelEffectModelThreeResultTwo,
  tableModelEffectOneModelOneResult,
  tableModelEffectOneModelTwoResult,
  tableModelEffectOneModelThreeResult,
  tableModelEffectTwoModelOneResult,
  tableModelEffectTwoModelTwoResult,
  tableModelEffectTwoModelThreeResult
}
