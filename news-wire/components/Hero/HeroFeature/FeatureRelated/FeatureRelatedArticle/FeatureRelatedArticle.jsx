import React from 'react'
import styles from './FeatureRelatedArticle.module.css'

const FeatureRelatedArticle = ({article}) => {
  return (
    <div className={styles.articleItem}>{article.title}</div>
  )
}

export default FeatureRelatedArticle