import React from 'react'
import styles from './FeatureRelated.module.css'
import FeatureRelatedArticle from './FeatureRelatedArticle/FeatureRelatedArticle'

const FeatureRelated = ({data}) => {
    const articles = data && data.slice(1,4).map((item) => ({
        title: item.title,
        body: item.description,
        author: item.creator,
        date: item.published_date.slice(0,16),
        comments: '1',
        img: item.media,
        categories: item.category
    }))

  return (
    <>
    <div className={styles.relativeAlignment}>
        <img src={'/static/img/paperclip.png'} height={18} alt='paperclip' title='paperclip' />
        <h3 className={styles.relatedHeader}>Related Article</h3>
    </div>
    <div className={styles.relatedArticleSection}>
        {articles && articles.map((article, key) => <FeatureRelatedArticle article={article} key={key} />)}
    </div>
    </>
  )
}

export default FeatureRelated