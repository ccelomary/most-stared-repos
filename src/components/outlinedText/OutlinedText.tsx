import React from 'react'
import styles from './OutlinedText.module.css'

interface OutlinedTextProps {
  name: string
  value: string
}

function OutlinedText ({ name, value }: OutlinedTextProps): JSX.Element {
  return <div className={styles.outlinedInfo}>
        <p>{name}: {value}</p>
    </div>
}

export default OutlinedText
