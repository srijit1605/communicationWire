import React from 'react'
import styles from './FeatureRelatedArticle.module.css'
import Link from 'next/link'

const FeatureRelatedArticle = ({article}) => {
  return (
    <div className={styles.articleItem}>
    <Link style={{textDecoration: 'none'}} href={`/article/${article?.id}`} passHref>
      <div className={styles.detailsAlignment}>
      <img className={styles.newsDetailsIcon} src={'/static/img/calendar.png'} height={13} alt='date' title='Date' />
      <h6 className={styles.newsDetails}>{article?.date}</h6>
      </div>
      <div className={styles.articleTitle}>{article?.title}</div>
      </Link>
    </div>
  )
}

export default FeatureRelatedArticle