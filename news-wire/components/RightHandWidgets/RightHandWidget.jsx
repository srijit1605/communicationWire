import React from 'react'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import ImageSlider from './ImageSlider/ImageSlider'
import SnippetTab from './SnippetTab/SnippetTab'

const RightHandWidget = ({data}) => {
  
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
      <SnippetTab articles={articles.slice(5,10)} trendingArticles={articles.slice(8,13)}/>
      <ImageSlider/>
      <SpotlightNews  title={'Fast Facts'} articles={articles.slice(3,7)}/>
      <SnippetNews title={'Brief Bytes'} articles={articles.slice(0,5)} fulWidth/>
    </div>
  )
}

export default RightHandWidget