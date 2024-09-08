import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import ImageCard from './ImageCard/ImageCard'

const BottomWidget = () => {
  return (
    <div>
        <SnippetNews/>
        <ImageCard/>
        <SpotlightNews/>
    </div>
  )
}

export default BottomWidget