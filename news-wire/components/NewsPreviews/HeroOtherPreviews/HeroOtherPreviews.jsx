import React from 'react'
import styles from './HeroOtherPreviews.module.css'

const HeroOtherPreviews = () => {
  return (
    <div>
        <h5 className={styles.newsCategory}>Category</h5>
        <h3 className={styles.newsHeader}>News Title</h3>
        <h6 className={styles.newsDetails}>details</h6>
        <p className={styles.newsExcerpt}>Excerpt</p>
    </div>
  )
}

export default HeroOtherPreviews