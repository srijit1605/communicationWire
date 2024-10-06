import React from 'react'
import styles from './HeroFeature.module.css'

const HeroFeature = ({ datum }) => {
  const article = {
    title: datum?.title,
    body: datum?.description,
    author: datum?.creator,
    date: datum?.published_date?.slice(0, 16),
    comments: '1',
    img: datum?.media,
    categories: datum?.category
  }

  return (
    <div className={styles.heroFeatureModule}>
      <img className={styles.featureImage} src={article.img} alt='writers building' title='writers building' />
      <h5 className={styles.featureCategory}>{article.categories}</h5>
      <h2 className={styles.featureTitle}>{article.title}</h2>
      <div className={styles.detailsAlignment}>
        <img className={styles.newsDetailsIcon} src={'/static/img/user.png'} height={13} alt='author' title='Author' />
        <h6 className={styles.newsDetails}>{article.author}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/calendar.png'} height={13} alt='date' title='Date' />
        <h6 className={styles.newsDetails}>{article.date}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/speech-bubble.png'} height={13} alt='comment' title='Comment' />
        <h6 className={styles.newsDetails}>{article.comments}</h6>
      </div>
      <div className={styles.twoColumn}>
        <p className={styles.newsExcerpt}>{article?.body?.substring(0, 445)}</p>
        <p>Read Full article.</p>
      </div>
    </div>
  )
}

export default HeroFeature