import React from 'react'
import styles from './SocialBox.module.css'

const SocialBox = ({item}) => {
  return (
    <div className={styles.socialItem}>
      <img src={item.src} height={16} alt={item.alt} title={item.alt}/>
    </div>
  )
}

export default SocialBox