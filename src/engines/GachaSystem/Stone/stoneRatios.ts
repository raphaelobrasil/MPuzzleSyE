const maxProportionStone = 6
const minProportionStone = 1

export const unitStone = (countMaxStone: number = maxProportionStone) => Math.floor(
  Math.random() * (countMaxStone - minProportionStone) + minProportionStone
)
