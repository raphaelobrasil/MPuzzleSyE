const maxProportionChar = 100000
const percentageProportion = 100
const minProportionChar = 1

export const rateCharacter = () => Math.floor(
  (Math.random() * (maxProportionChar - minProportionChar) + minProportionChar) /
  percentageProportion
)
