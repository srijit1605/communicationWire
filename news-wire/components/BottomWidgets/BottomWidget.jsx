import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import ImageCard from './ImageCard/ImageCard'

const BottomWidget = ({articles}) => {

  return (
    <div>
        <SnippetNews/>
        <ImageCard/>
        <SpotlightNews title={'Local News'} articles={articles}/>
    </div>
  )
}

export default BottomWidget