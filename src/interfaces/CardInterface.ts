import type OwnerInterface from './OwnerInterface'

interface CardInterface {
  id: number
  name: string
  description: string | null
  starsCount: number
  issuesCount: number
  createdAt: string
  owner: OwnerInterface
}

export default CardInterface
