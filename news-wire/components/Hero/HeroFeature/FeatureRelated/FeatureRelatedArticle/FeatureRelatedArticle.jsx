import React from 'react'
import styles from './FeatureRelatedArticle.module.css'

const FeatureRelatedArticle = ({article}) => {
  return (
    <div className={styles.articleItem}>
      <div className={styles.detailsAlignment}>
      <img className={styles.newsDetailsIcon} src={'/static/img/calendar.png'} height={13} alt='date' title='Date' />
      <h6 className={styles.newsDetails}>{article.date}</h6>
      </div>
      <div className={styles.articleTitle}>{article.title}</div>
    </div>
  )
}

export default FeatureRelatedArticle