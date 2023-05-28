import { useEffect, useState } from 'react'
import fetchRepositoriesByPage from '../apis/fetchRepositoriesByPage'
import type RepositoryInterface from '../interfaces/RepositoryInterface'
import useScroll from './useScroll'

const useRepositories: () => {
  isLoading: boolean
  repositories: RepositoryInterface[]
} = () => {
  const [repositories, setRepositories] = useState<RepositoryInterface[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const isBottom = useScroll()

  const addNewRepositories: () => Promise<void> = async () => {
    setIsLoading(() => true)
    const newRepositories = await fetchRepositoriesByPage(currentPage)
    if (newRepositories) {
      setRepositories(oldRepositories => [...oldRepositories, ...newRepositories])
      setCurrentPage(page => page + 1)
    }
    setIsLoading(() => false)
  }

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    if ((isBottom || currentPage === 1) && !isLoading) addNewRepositories()
  }, [isBottom])

  return {
    isLoading,
    repositories
  }
}

export default useRepositories
