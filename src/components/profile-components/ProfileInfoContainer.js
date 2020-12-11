import React from 'react'
import styles from './ProfileInfoContainer.module.css'

export function ProfileInfoContainer (props) {
  return (
    <div className={styles.container}>
      {props.children}
    </div>
  )
}