import React from 'react'
import type RepositoryInterface from '../../interfaces/RepositoryInterface'
import styles from './Repository.module.css'
import OutlinedText from '../outlinedText/OutlinedText'
import convertNumberIntoSFormat from '../../utils/convertNumberIntoKFormat'
import calculatePastDays from '../../utils/calculatePastDays'

type RepositoryProps = Omit<RepositoryInterface, 'id'> & { key?: number }

function Repository ({
  name,
  description,
  starsCount,
  issuesCount,
  createdAt,
  owner
}: RepositoryProps): JSX.Element {
  const renderAvatar = (): JSX.Element => {
    return <div className={styles.owner__avatar_container}>
        <img src={owner.avatar} alt={owner.username} />
      </div>
  }

  const renderOutlinedInfo = (): JSX.Element => {
    const convertedIssues = convertNumberIntoSFormat(issuesCount)
    const convertedStars = convertNumberIntoSFormat(starsCount)
    return <div className={styles.card__outlinedInfos}>
            <OutlinedText name="stars" value={convertedStars} />
            <OutlinedText name="issues" value={convertedIssues} />
          </div>
  }

  const renderCardTextInfo = (): JSX.Element => {
    const pastDays = calculatePastDays(createdAt)
    return <div className={styles.card__textInfo__container}>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className={styles.card__inline__info}>
          {renderOutlinedInfo()}
          <p className={styles.card__created_interval}>
              submitted {pastDays} days ago by {owner.username}
          </p>
        </div>
      </div>
  }

  return <div className={styles.card}>
      {renderAvatar()}
      {renderCardTextInfo()}
    </div>
}

export default Repository
