import React from 'react'
import styles from './SingleImageCard.module.css'
import Link from 'next/link'

const SingleImageCard = ({article}) => {
  return (
    
    <Link style={{textDecoration: 'none'}} href={`/article/${article.id}`} passHref>
    <div style={{margin: '0 5px'}}>
      <div className={styles.cardWrapper} style={{backgroundImage:`url(${article.img})`}}>
      <h5 className={styles.cardCategory}>{article.categories}</h5>
      <h2 className={styles.cardTitle}>{article.title}</h2>
      <div className={styles.detailsAlignment}>
        <img className={styles.newsDetailsIcon} src={'/static/img/user.png'} height={13} alt='author' title='Author' />
        <h6 className={styles.newsDetails}>{article.author}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/calendar.png'} height={13} alt='date' title='Date' />
        <h6 className={styles.newsDetails}>{article.date}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/speech-bubble.png'} height={13} alt='comment' title='Comment' />
        <h6 className={styles.newsDetails}>{article.comments}</h6>
      </div>
    </div>
    </div>
    </Link>
  )
}

export default SingleImageCard