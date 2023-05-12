import type RepositoryInterface from '../interfaces/RepositoryInterface'
import type SearchResponseInterface from '../interfaces/SearchResponseInterface'
import getLastThirtyDaysDate from '../utils/getLastThirtyDaysDate'

const fetchRepositoriesByPage: (page: number) => Promise<RepositoryInterface[] | null> = async (page) => {
  const lastThityDays = getLastThirtyDaysDate()
  const response: Response = await fetch(`https://api.github.com/search/repositories?q=created:>${lastThityDays}&sort=stars&order=desc&page=${page}`)
  try {
    const data: SearchResponseInterface = await response.json()
    const repositories: RepositoryInterface[] = data.items.map(item => ({
      id: item.id,
      name: item.name,
      description: item.description,
      starsCount: item.stargazers_count,
      issuesCount: item.open_issues_count,
      createdAt: item.created_at,
      owner: {
        username: item.owner.login,
        avatar: item.owner.avatar_url
      }
    }))
    return repositories
  } catch (error) {
    return (null)
  }
}

export default fetchRepositoriesByPage
