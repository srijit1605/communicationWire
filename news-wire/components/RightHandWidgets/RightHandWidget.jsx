import React from 'react'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import ImageSlider from './ImageSlider/ImageSlider'
import SnippetTab from './SnippetTab/SnippetTab'

const RightHandWidget = () => {
  return (
    <div>
      <SnippetTab/>
      <ImageSlider/>
      <SpotlightNews/>
      <SnippetNews/>
    </div>
  )
}

export default RightHandWidget