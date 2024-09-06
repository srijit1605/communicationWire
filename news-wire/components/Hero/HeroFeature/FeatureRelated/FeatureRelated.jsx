import React from 'react'
import styles from './FeatureRelated.module.css'
import FeatureRelatedArticle from './FeatureRelatedArticle/FeatureRelatedArticle'

const FeatureRelated = () => {
    const articles = [{
        title: 'News Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        categories: 'Technology'
    },
    {
        title: 'News Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        categories: 'Technology'
    },
    {
        title: 'News Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        categories: 'Technology'
    }]

  return (
    <>
    <h3 className={styles.relatedHeader}>Related Article</h3>
    <div className={styles.relatedArticleSection}>
        {articles.map((article, key) => <FeatureRelatedArticle article={article} key={key} />)}
    </div>
    </>
  )
}

export default FeatureRelated