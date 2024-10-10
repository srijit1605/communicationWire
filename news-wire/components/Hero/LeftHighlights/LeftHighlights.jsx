import HeroOtherPreviews from '@/components/NewsPreviews/HeroOtherPreviews/HeroOtherPreviews'
import React from 'react'

const LeftHighlights = ({data}) => {
    
    const articles = data && data.slice(0,5).map((item) => ({
        title: item.title,
        body: item.description,
        author: item.creator,
        date: item.published_date?.slice(0,16),
        comments: '1',
        img: item.media,
        categories: item.category
    }))

  return (
    <div>
        {articles && articles.map((article, key) => <HeroOtherPreviews article={article} key={key}/>)}
    </div>
  )
}

export default LeftHighlights