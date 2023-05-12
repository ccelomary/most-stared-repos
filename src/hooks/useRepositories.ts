import { useEffect, useState } from 'react'
import fetchRepositoriesByPage from '../apis/fetchRepositoriesByPage'
import type RepositoryInterface from '../interfaces/RepositoryInterface'
import removeDuplicates from '../utils/removeDuplicates'
import useScroll from './useScroll'

const useRepositories: () => RepositoryInterface[] = () => {
  const [repositories, setRepositories] = useState<RepositoryInterface[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const isBottom = useScroll()

  const addNewRepositories: () => Promise<void> = async () => {
    const newRepositories = await fetchRepositoriesByPage(currentPage)
    if (newRepositories) {
      setRepositories(oldRepositories => removeDuplicates([...oldRepositories, ...newRepositories]))
      setCurrentPage(page => page + 1)
    }
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if (isBottom || currentPage === 1) addNewRepositories()
  }, [isBottom])

  return repositories
}

export default useRepositories
