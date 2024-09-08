import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import InternationalNews from './InternationalNews/InternationalNews'
import NewsCard from './NewsCard/NewsCard'
import NewsRow from './NewsRow/NewsRow'

const LeftHandWidget = () => {
  return (
    <div>
        <SpotlightNews/>
        <SnippetNews/>
        <InternationalNews/>
        <NewsCard/>
        <NewsRow/>
    </div>
  )
}

export default LeftHandWidget