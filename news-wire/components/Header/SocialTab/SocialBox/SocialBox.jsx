import React from 'react'
import styles from './SocialBox.module.css'

const SocialBox = ({item}) => {
  return (
    <div className={styles.socialItem}>{item}</div>
  )
}

export default SocialBox