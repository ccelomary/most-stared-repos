import React from 'react'
import Repository from '../../components/repository/Repository'
import Loader from '../../components/loader/Loader'
import styles from './Home.module.css'
import useRepositories from '../../hooks/useRepositories'

function Home (): JSX.Element {
  const { isLoading, repositories } = useRepositories()

  const renderRepositories = (): JSX.Element[] => (repositories.map(repository => (
  <Repository
    key={repository.id}
    name={repository.name}
    description={repository.description}
    starsCount={repository.starsCount}
    issuesCount={repository.issuesCount}
    url={repository.url}
    owner={repository.owner}
    createdAt={repository.createdAt}
    />)))
  return <div className={styles.home}>
    <h1>Most Starred Repositories</h1>
      {renderRepositories()}
      {isLoading && <Loader />}
    </div>
}

export default Home
