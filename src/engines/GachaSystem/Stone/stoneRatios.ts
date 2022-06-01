const maxProportionStone = 5
const minProportionStone = 1

export const unitStone = () => Math.floor(
  Math.random() * (maxProportionStone - minProportionStone) + minProportionStone
)
