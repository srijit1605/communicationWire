import React from 'react'
import styles from './SnippetNews.module.css'

const SnippetNews = ({ title, articles = [], fulWidth=false }) => {
  return (
    <div className={styles.sectionBorder}>
      {title ? <div className={styles.headerSection}>{title}</div> : null}
      <div className={styles.articleWrapper}>{articles && articles.map((article) => (
        <div className={styles.articleLayout} style={fulWidth? {width: '100%'} : {maxWidth:'330.9px'}}>
          <div className={styles.articleImageDiv}  style={{background:`url(${article.img})`, backgroundSize:'cover'}}></div>
          <div className={styles.articleDetails}>
            <h5 className={styles.articleHeader}>{article.title}</h5>
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
      ))}</div>
    </div>
  )
}

export default SnippetNews