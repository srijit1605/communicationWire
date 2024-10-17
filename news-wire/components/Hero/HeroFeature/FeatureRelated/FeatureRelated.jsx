import React from 'react'
import styles from './FeatureRelated.module.css'
import FeatureRelatedArticle from './FeatureRelatedArticle/FeatureRelatedArticle'
import { articles } from '@/app/helper'

const FeatureRelated = () => {

  return (
    <>
    <div className={styles.relativeAlignment}>
        <img src={'/static/img/paperclip.png'} height={18} alt='paperclip' title='paperclip' />
        <h3 className={styles.relatedHeader}>Related Article</h3>
    </div>
    <div className={styles.relatedArticleSection}>
        {articles.slice(1,4).map((article, key) => <FeatureRelatedArticle article={article} key={key} />)}
    </div>
    </>
  )
}

export default FeatureRelated