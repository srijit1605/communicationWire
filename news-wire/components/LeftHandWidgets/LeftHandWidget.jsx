import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import InternationalNews from './InternationalNews/InternationalNews'
import NewsCard from './NewsCard/NewsCard'
import NewsRow from './NewsRow/NewsRow'

const LeftHandWidget = ({data}) => {
  
  const articles = data && data.map((item) => ({
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
        <SpotlightNews title={'Spotlight News'} articles={articles.slice(0,5)}/>
        <SnippetNews title={'Mini Updates'} articles={articles.slice(3,7)}/>
        <InternationalNews articles={articles.slice(7,11)}/>
        <NewsCard articles={articles.slice(9,14)}/>
        <NewsRow/>
    </div>
  )
}

export default LeftHandWidget