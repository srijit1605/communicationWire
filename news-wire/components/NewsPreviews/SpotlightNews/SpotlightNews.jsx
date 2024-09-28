import React from 'react'
import styles from './SpotlightNews.module.css'

const SpotlightNews = ({title='', articles=[]}) => {
  return (
    <div className={styles.spolightBorder}>
      <div className={styles.spolightHeader}>
      <h3 className={styles.sectionHeader}>{title}</h3>
      <div className={styles.newsAlignment}>{articles.map((article, key)=> (
        <div key={key} className={styles.spotlightNumber}>
          <h2>{key+1}</h2>
          <h3>{article.title}</h3>
        </div>
      ))}</div>
      </div>
    </div>
  )
}

export default SpotlightNews