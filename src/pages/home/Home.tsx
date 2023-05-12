import React from 'react'
import Repository from '../../components/repository/Repository'
import styles from './Home.module.css'
import useRepositories from '../../hooks/useRepositories'

function Home (): JSX.Element {
  const repositories = useRepositories()

  const renderRepositories = (): JSX.Element[] => (repositories.map(repository => (
  <Repository
    key={repository.id}
    name={repository.name}
    description={repository.description}
    starsCount={repository.starsCount}
    issuesCount={repository.issuesCount}
    owner={repository.owner}
    createdAt={repository.createdAt}
    />)))

  return <div className={styles.home}>
      {renderRepositories()}
    </div>
}

export default Home
