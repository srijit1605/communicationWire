import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import ImageCard from './ImageCard/ImageCard'

const BottomWidget = ({articles}) => {

  return (
    <div>
        <SnippetNews  title={'Snippet News'} articles={articles.slice(2,6)}/>
        <ImageCard articles={articles.slice(2,6)}/>
        <SpotlightNews title={'Local News'} articles={articles.slice(6,11)}/>
    </div>
  )
}

export default BottomWidget