import React from 'react'
import styles from './HeroOtherPreviews.module.css'

const HeroOtherPreviews = ({article, widget=false}) => {

  return (
    <div className={widget? styles.newsArticleWidget :styles.newsArticle}>
        <h5 className={widget? styles.newsCategoryWidget : styles.newsCategory}>{article.categories}</h5>
        <h3 className={widget? styles.newsHeaderWidget : styles.newsHeader}>{article.title}</h3>
        <div className={styles.detailsAlignment}>
            <img className={styles.newsDetailsIcon} src={'/static/img/user.png'} height={widget? 12 : 13} alt='author' title='Author'/>
            <h6 className={widget? styles.newsDetailsWidget : styles.newsDetails}>{article.author}</h6>
            <img className={styles.newsDetailsIcon} src={'/static/img/calendar.png'} height={widget? 12 : 13} alt='date' title='Date'/>
            <h6 className={widget? styles.newsDetailsWidget : styles.newsDetails}>{article.date}</h6>
            <img className={styles.newsDetailsIcon} src={'/static/img/speech-bubble.png'} height={widget? 12 : 13} alt='comment' title='Comment'/>
            <h6 className={widget? styles.newsDetailsWidget : styles.newsDetails}>{article.comments}</h6>
        </div>
        <p className={styles.newsExcerpt}>{article.body?.substring(0,100)}...</p>
    </div>
  )
}

export default HeroOtherPreviews