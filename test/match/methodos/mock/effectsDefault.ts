import { IBasicTable, ISequencial, ISequenceHistory } from '../../../../src/engines'

const crossPeriods = (periodRow: number, periodColumn: number) => ({
  periodRow: periodRow,
  periodColumn: periodColumn
})

const sequenceStage = (column: number, row: number, stage: number) => ({
  column,
  row,
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

const tableModelEffectOne: IBasicTable[][] = [
  [callStoneFour.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.light, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.blue, callStone.red, callStoneFour.blue, callStone.red, callStone.green, callStone.blue, callStone.green],
  [callStone.red, callStone.light, callStone.red, callStone.blue, callStone.blue, callStoneFour.light, callStone.red],
  [callStone.green, callStone.blue, callStone.green, callStone.green, callStone.light, callStoneFour.blue, callStone.light]
]

const tableModelEffectTwo: IBasicTable[][] = [
  [callStoneFour.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStoneFour.light, callStoneFour.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.blue, callStoneFour.red, callStone.blue, callStone.red, callStone.green, callStone.blue, callStone.green],
  [callStone.red, callStoneFour.light, callStoneFour.red, callStoneFive.blue, callStone.blue, callStone.light, callStone.red],
  [callStoneFour.green, callStoneFour.blue, callStone.green, callStone.green, callStone.light, callStone.blue, callStone.light]
]

const tableModelEffectThree: IBasicTable[][] = [
  [callStone.light, callStone.blue, callStone.red, callStone.blue, callStone.light, callStone.light, callStone.red],
  [callStone.light, callStone.blue, callStone.red, callStone.light, callStone.blue, callStone.red, callStone.light],
  [callStone.blue, callStone.red, callStoneFive.blue, callStoneFour.red, callStoneFive.green, callStone.blue, callStone.green],
  [callStone.red, callStone.light, callStone.red, callStoneFour.blue, callStone.blue, callStone.light, callStone.red],
  [callStone.green, callStone.blue, callStone.green, callStone.green, callStone.light, callStone.blue, callStone.light]
]

const activateEffectTableOneModelOne: ISequencial = {
  activated: [
    {
      row: 0,
      column: 0
    }
  ],
  sequence: [
    crossPeriods(0, 0),
    crossPeriods(0, 1),
    crossPeriods(1, 0)
  ]
}

const activateEffectTableOneModelTwo: ISequencial = {
  activated: [
    {
      row: 2,
      column: 2
    }
  ],
  sequence: [
    crossPeriods(2, 2),
    crossPeriods(2, 1),
    crossPeriods(2, 3),
    crossPeriods(1, 2),
    crossPeriods(3, 2)
  ]
}

const activateEffectTableOneModelThree: ISequencial = {
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

const activateEffectTableOneModelFour: ISequencial = {
  activated: [
    {
      row: 4,
      column: 5
    }
  ],
  sequence: [
    crossPeriods(4, 5),
    crossPeriods(4, 4),
    crossPeriods(4, 6),
    crossPeriods(3, 5)
  ]
}

const activateEffectTableOneModelThreeSequence: ISequenceHistory[] = [
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(4, 5),
          crossPeriods(4, 4),
          crossPeriods(4, 6),
          crossPeriods(3, 5)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(5, 4, 0)
    ]
  }
]

const activateEffectTableOneModelFourSequence: ISequenceHistory[] = [
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(3, 5),
          crossPeriods(3, 4),
          crossPeriods(3, 6),
          crossPeriods(2, 5),
          crossPeriods(4, 5)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(5, 3, 0)
    ]
  }
]

const activateEffectTableTwoModelOne: ISequencial = {
  activated: [
    {
      row: 0,
      column: 0
    }
  ],
  sequence: [
    crossPeriods(0, 0),
    crossPeriods(0, 1),
    crossPeriods(1, 0)
  ]
}

const activateEffectTableTwoModelOneSequence: ISequenceHistory[] = [
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
      sequenceStage(0, 1, 0)
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
          crossPeriods(2, 1),
          crossPeriods(2, 0),
          crossPeriods(2, 2),
          crossPeriods(1, 1),
          crossPeriods(3, 1)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(1, 2, 2)
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
      sequenceStage(1, 3, 3)
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
          crossPeriods(4, 1),
          crossPeriods(4, 0),
          crossPeriods(4, 2),
          crossPeriods(3, 1)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(2, 3, 4),
      sequenceStage(1, 4, 4)
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
          crossPeriods(2, 0),
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
          crossPeriods(4, 0),
          crossPeriods(4, 1),
          crossPeriods(3, 0)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(3, 3, 5),
      sequenceStage(0, 4, 5)
    ]
  }
]

const activateEffectTableTwoModelTwo: ISequencial = {
  activated: [
    {
      row: 1,
      column: 0
    }
  ],
  sequence: [
    crossPeriods(1, 0),
    crossPeriods(1, 1),
    crossPeriods(0, 0),
    crossPeriods(2, 0)
  ]
}

const activateEffectTableTwoModelTwoSequence: ISequenceHistory[] = [
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
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(0, 0),
          crossPeriods(0, 1),
          crossPeriods(1, 0)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(1, 1, 0),
      sequenceStage(0, 0, 0)
    ]
  },
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
      }
    ],
    stone: [
      sequenceStage(1, 2, 1)
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
      sequenceStage(1, 3, 2)
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
          crossPeriods(4, 1),
          crossPeriods(4, 0),
          crossPeriods(4, 2),
          crossPeriods(3, 1)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(2, 3, 3),
      sequenceStage(1, 4, 3)
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
          crossPeriods(2, 0),
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
          crossPeriods(4, 0),
          crossPeriods(4, 1),
          crossPeriods(3, 0)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(3, 3, 4),
      sequenceStage(0, 4, 4)
    ]
  }
]

const activateEffectTableTwoModelThree: ISequencial = {
  activated: [
    {
      row: 1,
      column: 1
    }
  ],
  sequence: [
    crossPeriods(1, 1),
    crossPeriods(1, 0),
    crossPeriods(1, 2),
    crossPeriods(0, 1),
    crossPeriods(2, 1)
  ]
}

const activateEffectTableTwoModelThreeSequence: ISequenceHistory[] = [
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
      sequenceStage(0, 1, 0),
      sequenceStage(1, 2, 0)
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
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(3, 1),
          crossPeriods(3, 0),
          crossPeriods(3, 2),
          crossPeriods(2, 1),
          crossPeriods(4, 1)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(0, 0, 1),
      sequenceStage(1, 3, 1)
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
          crossPeriods(4, 1),
          crossPeriods(4, 0),
          crossPeriods(4, 2),
          crossPeriods(3, 1)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(2, 3, 2),
      sequenceStage(1, 4, 2)
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
          crossPeriods(2, 0),
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
          crossPeriods(4, 0),
          crossPeriods(4, 1),
          crossPeriods(3, 0)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(3, 3, 3),
      sequenceStage(0, 4, 3)
    ]
  }
]

const activateEffectTableTwoModelFour: ISequencial = {
  activated: [
    {
      row: 3,
      column: 1
    }
  ],
  sequence: [
    crossPeriods(3, 1),
    crossPeriods(3, 0),
    crossPeriods(3, 2),
    crossPeriods(2, 1),
    crossPeriods(4, 1)
  ]
}

const activateEffectTableTwoModelFourSequence: ISequenceHistory[] = [
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
      sequenceStage(2, 3, 0),
      sequenceStage(1, 2, 0),
      sequenceStage(1, 4, 0)
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
          crossPeriods(2, 0),
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
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(4, 0),
          crossPeriods(4, 1),
          crossPeriods(3, 0)
        ],
        order: 3
      }
    ],
    stone: [
      sequenceStage(3, 3, 1),
      sequenceStage(1, 1, 1),
      sequenceStage(0, 4, 1)
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
      sequenceStage(0, 1, 2)
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

const activateEffectTableTwoModelFive: ISequencial = {
  activated: [
    {
      row: 3,
      column: 3
    }
  ],
  sequence: [
    crossPeriods(0, 1),
    crossPeriods(0, 3),
    crossPeriods(1, 1),
    crossPeriods(1, 4),
    crossPeriods(2, 0),
    crossPeriods(2, 2),
    crossPeriods(2, 5),
    crossPeriods(3, 3),
    crossPeriods(3, 4),
    crossPeriods(4, 1),
    crossPeriods(4, 5)
  ]
}

const activateEffectTableTwoModelFiveSequence: ISequenceHistory[] = [
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
      }
    ],
    stone: [
      sequenceStage(1, 1, 0),
      sequenceStage(1, 4, 0)
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
          crossPeriods(4, 0),
          crossPeriods(4, 1),
          crossPeriods(3, 0)
        ],
        order: 3
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(3, 1),
          crossPeriods(3, 0),
          crossPeriods(3, 2),
          crossPeriods(2, 1),
          crossPeriods(4, 1)
        ],
        order: 4
      }
    ],
    stone: [
      sequenceStage(0, 1, 1),
      sequenceStage(1, 2, 1),
      sequenceStage(0, 4, 1),
      sequenceStage(1, 3, 1)
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
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(3, 2),
          crossPeriods(3, 1),
          crossPeriods(3, 3),
          crossPeriods(2, 2),
          crossPeriods(4, 2)
        ],
        order: 2
      }
    ],
    stone: [
      sequenceStage(0, 0, 2),
      sequenceStage(2, 3, 2)
    ]
  }
]

const activateEffectTableThreeModelOne: ISequencial = {
  activated: [
    {
      row: 2,
      column: 3
    }
  ],
  sequence: [
    crossPeriods(2, 3),
    crossPeriods(2, 2),
    crossPeriods(2, 4),
    crossPeriods(1, 3),
    crossPeriods(3, 3)
  ]
}

const activateEffectTableThreeModelOneSequence: ISequenceHistory[] = [
  {
    sequence: [
      {
        category: 'pattern_five',
        occurrences: [
          crossPeriods(0, 1),
          crossPeriods(0, 3),
          crossPeriods(1, 1),
          crossPeriods(1, 4),
          crossPeriods(2, 0),
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
        category: 'pattern_five',
        occurrences: [
          crossPeriods(2, 4),
          crossPeriods(2, 6),
          crossPeriods(4, 0),
          crossPeriods(4, 2),
          crossPeriods(4, 3)
        ],
        order: 2
      },
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(3, 3),
          crossPeriods(3, 2),
          crossPeriods(3, 4),
          crossPeriods(2, 3),
          crossPeriods(4, 3)
        ],
        order: 3
      }
    ],
    stone: [
      sequenceStage(2, 2, 0),
      sequenceStage(4, 2, 0),
      sequenceStage(3, 3, 0)
    ]
  }
]

const activateEffectTableThreeModelTwo: ISequencial = {
  activated: [
    {
      row: 2,
      column: 2
    }
  ],
  sequence: [
    crossPeriods(0, 1),
    crossPeriods(0, 3),
    crossPeriods(1, 1),
    crossPeriods(1, 4),
    crossPeriods(2, 0),
    crossPeriods(2, 2),
    crossPeriods(2, 5),
    crossPeriods(3, 3),
    crossPeriods(3, 4),
    crossPeriods(4, 1),
    crossPeriods(4, 5)
  ]
}

const activateEffectTableThreeModelTwoSequence: ISequenceHistory[] = [
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(3, 3),
          crossPeriods(3, 2),
          crossPeriods(3, 4),
          crossPeriods(2, 3),
          crossPeriods(4, 3)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(3, 3, 0)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_four',
        occurrences: [
          crossPeriods(2, 3),
          crossPeriods(2, 2),
          crossPeriods(2, 4),
          crossPeriods(1, 3),
          crossPeriods(3, 3)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(3, 2, 1)
    ]
  },
  {
    sequence: [
      {
        category: 'pattern_five',
        occurrences: [
          crossPeriods(2, 4),
          crossPeriods(2, 6),
          crossPeriods(4, 0),
          crossPeriods(4, 2),
          crossPeriods(4, 3)
        ],
        order: 1
      }
    ],
    stone: [
      sequenceStage(4, 2, 2)
    ]
  }
]

export const EffectsDefaults = {
  tableModelEffectOne,
  tableModelEffectTwo,
  tableModelEffectThree,
  activateEffectTableOneModelOne,
  activateEffectTableOneModelTwo,
  activateEffectTableOneModelThree,
  activateEffectTableOneModelFour,
  activateEffectTableOneModelThreeSequence,
  activateEffectTableOneModelFourSequence,
  activateEffectTableTwoModelOne,
  activateEffectTableTwoModelOneSequence,
  activateEffectTableTwoModelTwo,
  activateEffectTableTwoModelTwoSequence,
  activateEffectTableTwoModelThree,
  activateEffectTableTwoModelThreeSequence,
  activateEffectTableTwoModelFour,
  activateEffectTableTwoModelFourSequence,
  activateEffectTableTwoModelFive,
  activateEffectTableTwoModelFiveSequence,
  activateEffectTableThreeModelOne,
  activateEffectTableThreeModelOneSequence,
  activateEffectTableThreeModelTwo,
  activateEffectTableThreeModelTwoSequence
}
