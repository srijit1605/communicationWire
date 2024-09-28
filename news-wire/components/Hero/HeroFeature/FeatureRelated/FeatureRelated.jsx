import React from 'react'
import styles from './FeatureRelated.module.css'
import FeatureRelatedArticle from './FeatureRelatedArticle/FeatureRelatedArticle'

const FeatureRelated = () => {
    const articles = [{
        title: 'News article related to the Feature it can have quite legthy headline',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        categories: 'Technology'
    },
    {
        title: 'News article similar to feature with lengthy headlines so we can test the layout',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        categories: 'Technology'
    },
    {
        title: 'News article similar to feature with lengthy headlines so we can test the layout',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        categories: 'Technology'
    },
]

  return (
    <>
    <div className={styles.relativeAlignment}>
        <img src={'/static/img/paperclip.png'} height={18} alt='paperclip' title='paperclip' />
        <h3 className={styles.relatedHeader}>Related Article</h3>
    </div>
    <div className={styles.relatedArticleSection}>
        {articles.map((article, key) => <FeatureRelatedArticle article={article} key={key} />)}
    </div>
    </>
  )
}

export default FeatureRelated