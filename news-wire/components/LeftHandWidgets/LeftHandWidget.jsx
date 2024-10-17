import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import InternationalNews from './InternationalNews/InternationalNews'
import NewsCard from './NewsCard/NewsCard'
import NewsRow from './NewsRow/NewsRow'

const LeftHandWidget = ({articles}) => {
 
  return (
    <div>
        <SpotlightNews title={'Spotlight News'} articles={articles.slice(0,5)}/>
        <SnippetNews title={'Mini Updates'} articles={articles.slice(3,7)}/>
        <InternationalNews articles={articles.slice(7,11)}/>
        <NewsCard articles={articles.slice(9,14)}/>
        <NewsRow articles={articles.slice(3,7)}/>
    </div>
  )
}

export default LeftHandWidget