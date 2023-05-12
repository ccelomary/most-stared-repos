import type RepositoryInterface from '../interfaces/RepositoryInterface'

const removeDuplicates: (repositories: RepositoryInterface[]) => RepositoryInterface[] = (repositories) => {
  const ids = new Set<number>()
  const uniqueRepositories: RepositoryInterface[] = []
  for (const repository of repositories) {
    if (!ids.has(repository.id)) {
      uniqueRepositories.push(repository)
      ids.add(repository.id)
    }
  }
  return (uniqueRepositories)
}

export default removeDuplicates
