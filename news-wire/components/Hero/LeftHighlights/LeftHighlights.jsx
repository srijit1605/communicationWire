import HeroOtherPreviews from '@/components/NewsPreviews/HeroOtherPreviews/HeroOtherPreviews'
import React from 'react'

const LeftHighlights = () => {
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
    <div>
        {articles.map((article, key) => <HeroOtherPreviews article={article} key={key}/>)}
    </div>
  )
}

export default LeftHighlights