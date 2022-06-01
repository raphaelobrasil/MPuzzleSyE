/* eslint-disable no-undef */

import { charGacha } from '../../../src/engines'

describe('Gacha Char - Sorteio de personagem', () => {
  it('Sorteiar aleatoriamente um único número entre 1 a 1000 que equivale 0,1% por chance', () => {
    expect(Array(1000).fill(1).map((x, y) => x + y)).toContain(charGacha.charRatios.rateCharacter())
  })
  it('Até 13 -> Herói 5 estrelas', () => {
    expect(charGacha.charRng.rarityCharater(13)).toEqual(5)
  })
  it('Acima de 14 -> Herói 4 estrelas', () => {
    expect(charGacha.charRng.rarityCharater(14)).toEqual(4)
  })
  it('Acima de 251 -> Herói 3 estrelas', () => {
    expect(charGacha.charRng.rarityCharater(251)).toEqual(3)
  })
  it('Até 10 -> Conseguiu herói do mês', () => {
    expect(charGacha.charRng.rarityCharaterMonth(10)).toEqual(true)
  })
  it('Acima de 11 -> Não Conseguiu herói do mês', () => {
    expect(charGacha.charRng.rarityCharaterMonth(11)).toEqual(false)
  })
  it('Testando aleatoriedade do rng, podendo tirar 3, 4 ou 5', () => {
    expect([3, 4, 5]).toContain(charGacha.charRng.rarityCharater(charGacha.charRatios.rateCharacter()))
  })
  it('Testando aleatoriedade do rng, podendo tirar ou não o herói do mês', () => {
    expect([true, false]).toContain(charGacha.charRng.rarityCharaterMonth(charGacha.charRatios.rateCharacter()))
  })
})
