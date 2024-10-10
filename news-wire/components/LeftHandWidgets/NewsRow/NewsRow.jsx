import React from 'react'
import styles from './NewsRow.module.css'

const NewsRow = ({articles}) => {
  return (
    <div className={styles.sectionAlignment}>
      <div className={styles.headerSection}>{'Featured News'}</div>
      {articles && articles.map((article) => (
        <article className={styles.articleFormat}>
          <div className={styles.articleSection}><img className={styles.imageAlignment} src={article.img} alt={article.title}/></div>
          <div className={styles.articleSection}>
          <h5 className={styles.featureCategoryRow}>{article.categories}</h5>
      <h2 className={styles.featureTitleRow}>{article.title}</h2>
      <div className={styles.detailsAlignment}>
        <img className={styles.newsDetailsIcon} src={'/static/img/user.png'} height={13} alt='author' title='Author' />
        <h6 className={styles.newsDetails}>{article.author}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/calendar.png'} height={13} alt='date' title='Date' />
        <h6 className={styles.newsDetails}>{article.date}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/speech-bubble.png'} height={13} alt='comment' title='Comment' />
        <h6 className={styles.newsDetails}>{article.comments}</h6>
      </div>
        <p className={styles.newsExcerpt}>{article.body.substring(0,100)}...</p>
        <p className={styles.readFull}>Read Full article </p>
          </div>
        </article>
      ))}
    </div>
  )
}

export default NewsRow