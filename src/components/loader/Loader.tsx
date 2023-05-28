import React from 'react'
import styles from './Loader.module.css'

export default function Loader (): JSX.Element {
  return <div className={styles.lds_ellipsis}><div></div><div></div><div></div><div></div></div>
}
