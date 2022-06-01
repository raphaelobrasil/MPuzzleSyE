import { rarityCharaterArrayMask, rarityCharaterMask } from './index'

const rarityType: rarityCharaterArrayMask[] = [
  { type: 13, rarity: 5 },
  { type: 250, rarity: 4 },
  { type: 1000, rarity: 3 }
]

export const rarityCharater = (id: number): rarityCharaterMask =>
    rarityType.find(rng => rng.type >= id)?.rarity as rarityCharaterMask

export const rarityCharaterMonth = (id: number): boolean => id <= 10
