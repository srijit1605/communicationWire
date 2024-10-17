import React from 'react'
import styles from './SingleCard.module.css'
import Link from 'next/link'

const SingleCard = ({article}) => {
  return (
    <div className={styles.containerAlignment}>
          <div className={styles.focusNews}>
          <div className={styles.articleImageDiv}  style={{background:`url(${article?.img})`, backgroundSize:'cover'}}></div>
          </div>
          <div className={styles.contentSection}>
          <h5 className={styles.featureCategoryCard}>{article?.categories}</h5>
      <h2 className={styles.featureTitleCard}>{article?.title}</h2>
      <div className={styles.detailsAlignment}>
        <img className={styles.newsDetailsIcon} src={'/static/img/user.png'} height={13} alt='author' title='Author' />
        <h6 className={styles.newsDetails}>{article?.author}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/calendar.png'} height={13} alt='date' title='Date' />
        <h6 className={styles.newsDetails}>{article?.date}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/speech-bubble.png'} height={13} alt='comment' title='Comment' />
        <h6 className={styles.newsDetails}>{article?.comments}</h6>
      </div>
        <p className={styles.newsExcerpt}>{article?.body?.substring(0,200)}...</p>
        
        <Link className={styles.readFull} href={`/article/${article?.id}`} passHref>Read Full Article</Link>
          </div>
      </div>
  )
}

export default SingleCard