import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import ImageCard from './ImageCard/ImageCard'

const BottomWidget = ({articles}) => {

  return (
    <div>
        <SnippetNews  title={'Snippet News'} articles={articles.slice(0,4)}/>
        <ImageCard/>
        <SpotlightNews title={'Local News'} articles={articles.slice(4,9)}/>
    </div>
  )
}

export default BottomWidget