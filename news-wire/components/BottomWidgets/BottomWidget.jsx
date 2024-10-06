import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import ImageCard from './ImageCard/ImageCard'

const BottomWidget = ({data}) => {
  
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
        <SnippetNews  title={'Snippet News'} articles={articles.slice(2,6)}/>
        <ImageCard/>
        <SpotlightNews title={'Local News'} articles={articles.slice(6,11)}/>
    </div>
  )
}

export default BottomWidget