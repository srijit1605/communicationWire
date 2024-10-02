import React from 'react'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import ImageSlider from './ImageSlider/ImageSlider'
import SnippetTab from './SnippetTab/SnippetTab'

const RightHandWidget = ({articles}) => {

  return (
    <div>
      <SnippetTab/>
      <ImageSlider/>
      <SpotlightNews  title={'Fast Facts'} articles={articles.slice(0,4)}/>
      <SnippetNews title={'Brief Bytes'} articles={articles.slice(4,9)} fulWidth/>
    </div>
  )
}

export default RightHandWidget