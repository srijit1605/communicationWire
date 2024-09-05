import React from 'react'
import styles from './RightWidget.module.css'
import HeroOtherPreviews from '../../NewsPreviews/HeroOtherPreviews/HeroOtherPreviews'

const RightWidget = () => {
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
    <div className={styles.widgetStyle}>
        {articles.map((article, key) => <HeroOtherPreviews widget={true} article={article} key={key}/>)}
    </div>
  )
}

export default RightWidget