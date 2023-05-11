import React from 'react'
import type CardInterface from '../../interfaces/CardInterface'
import styles from './Card.module.css'
import OutlinedText from '../outlinedText/OutlinedText'

type CardProps = Omit<CardInterface, 'id'> & { key?: number }

function Card ({
  name,
  description,
  starsCount,
  issuesCount,
  owner
}: CardProps): JSX.Element {
  const renderAvatar = (): JSX.Element => {
    return <div className={styles.owner__avatar_container}>
        <img src={owner.avatar} alt={owner.username} />
      </div>
  }

  const renderOutlinedInfo = (): JSX.Element => {
    return <div className={styles.card__outlinedInfos}>
            <OutlinedText name="stars" value="17k" />
            <OutlinedText name="issues" value="18k" />
          </div>
  }

  const renderCardTextInfo = (): JSX.Element => {
    return <div className={styles.card__textInfo__container}>
        <h1>{name}</h1>
        <p>{description}</p>
        <div className={styles.card__inline__info}>
          {renderOutlinedInfo()}
          <p className={styles.card__created_interval}>
              submitted 30 years ago by {owner.username}
          </p>
        </div>
      </div>
  }

  return <div className={styles.card}>
      {renderAvatar()}
      {renderCardTextInfo()}
    </div>
}

export default Card
