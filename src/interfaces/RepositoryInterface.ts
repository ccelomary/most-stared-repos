import type OwnerInterface from './OwnerInterface'

interface RepositoryInterface {
  id: number
  name: string
  description: string | null
  starsCount: number
  issuesCount: number
  createdAt: string
  url: string
  owner: OwnerInterface
}

export default RepositoryInterface
