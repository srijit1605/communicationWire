import React from 'react'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SnippetTab from './SnippetTab/SnippetTab'
import ImageCard from '../BottomWidgets/ImageCard/ImageCard'
import { articles } from '@/app/helper'

const RightHandWidget = () => {

  return (
    <div>
      <SnippetTab/>
      <ImageCard widget={true} articles={articles}/>
      <SpotlightNews  title={'Fast Facts'} articles={articles}/>
      <SnippetNews title={'Brief Bytes'} articles={articles} fulWidth/>
    </div>
  )
}

export default RightHandWidget