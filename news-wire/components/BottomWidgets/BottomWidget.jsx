import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import ImageCard from './ImageCard/ImageCard'
import { articles } from '@/app/helper'

const BottomWidget = () => {
  
  return (
    <div>
        <SnippetNews  title={'Snippet News'} articles={articles}/>
        <ImageCard articles={articles}/>
        <SpotlightNews title={'Local News'} articles={articles}/>
    </div>
  )
}

export default BottomWidget