import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import InternationalNews from './InternationalNews/InternationalNews'
import NewsCard from './NewsCard/NewsCard'
import NewsRow from './NewsRow/NewsRow'

const LeftHandWidget = ({articles}) => {

  return (
    <div>
        <SpotlightNews title={'Spotlight News'} articles={articles.slice(0,6)}/>
        <SnippetNews title={'Mini Updates'} articles={articles.slice(3,9)}/>
        <InternationalNews/>
        <NewsCard/>
        <NewsRow/>
    </div>
  )
}

export default LeftHandWidget