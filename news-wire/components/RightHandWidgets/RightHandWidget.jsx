import React from 'react'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SnippetTab from './SnippetTab/SnippetTab'
import ImageCard from '../BottomWidgets/ImageCard/ImageCard'

const RightHandWidget = ({articles}) => {
 
  return (
    <div>
      <SnippetTab articles={articles?.slice(5,10)} trendingArticles={articles?.slice(8,13)}/>
      <ImageCard widget={true} articles={articles?.slice(3,7)}/>
      <SpotlightNews  title={'Fast Facts'} articles={articles?.slice(3,7)}/>
      <SnippetNews title={'Brief Bytes'} articles={articles?.slice(0,5)} fulWidth/>
    </div>
  )
}

export default RightHandWidget