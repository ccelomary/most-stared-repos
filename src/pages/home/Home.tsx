import React from 'react'
import Card from '../../components/card/Card'
import type CardInterface from '../../interfaces/CardInterface'
import styles from './Home.module.css'

function Home (): JSX.Element {
  const cards: CardInterface[] = [
    {
      id: 1,
      name: 'Tensorflow',
      description: 'Dados diários mais recentes do coronavírus por município brasileiro',
      starsCount: 48,
      issuesCount: 15,
      owner: {
        username: 'medel',
        avatar: 'https://avatars.githubusercontent.com/u/5010?v=4'
      },
      createdAt: '2018-07-07T14:09:02Z'
    },
    {
      id: 2,
      name: 'Tensorflow',
      description: 'Dados diários mais recentes do coronavírus por município brasileiro',
      starsCount: 48,
      issuesCount: 15,
      owner: {
        username: 'medel',
        avatar: 'https://avatars.githubusercontent.com/u/5010?v=4'
      },
      createdAt: '2018-07-07T14:09:02Z'
    },
    {
      id: 3,
      name: 'Tensorflow',
      description: 'Dados diários mais recentes do coronavírus por município brasileiro',
      starsCount: 48,
      issuesCount: 15,
      owner: {
        username: 'medel',
        avatar: 'https://avatars.githubusercontent.com/u/5010?v=4'
      },
      createdAt: '2018-07-07T14:09:02Z'
    },
    {
      id: 4,
      name: 'Tensorflow',
      description: 'Dados diários mais recentes do coronavírus por município brasileiro',
      starsCount: 48,
      issuesCount: 15,
      owner: {
        username: 'medel',
        avatar: 'https://avatars.githubusercontent.com/u/5010?v=4'
      },
      createdAt: '2018-07-07T14:09:02Z'
    },
    {
      id: 5,
      name: 'Tensorflow',
      description: 'Dados diários mais recentes do coronavírus por município brasileiro',
      starsCount: 48,
      issuesCount: 15,
      owner: {
        username: 'medel',
        avatar: 'https://avatars.githubusercontent.com/u/5010?v=4'
      },
      createdAt: '2018-07-07T14:09:02Z'
    }
  ]

  const renderCards = (): JSX.Element[] => (cards.map(card => (
  <Card
    key={card.id}
    name={card.name}
    description={card.description}
    starsCount={card.starsCount}
    issuesCount={card.issuesCount}
    owner={card.owner}
    createdAt={card.createdAt}
    />)))

  return <div className={styles.home}>
      {renderCards()}
    </div>
}

export default Home
