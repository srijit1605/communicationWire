import React from 'react'
import SnippetNews from '../NewsPreviews/SnippetNews/SnippetNews'
import SpotlightNews from '../NewsPreviews/SpotlightNews/SpotlightNews'
import InternationalNews from './InternationalNews/InternationalNews'
import NewsCard from './NewsCard/NewsCard'
import NewsRow from './NewsRow/NewsRow'
import { articles } from '@/app/helper'

const LeftHandWidget = () => {


  return (
    <div>
        <SpotlightNews title={'Spotlight News'} articles={articles}/>
        <SnippetNews title={'Mini Updates'} articles={articles}/>
        <InternationalNews articles={articles}/>
        <NewsCard articles={articles}/>
        <NewsRow articles={articles}/>
    </div>
  )
}

export default LeftHandWidget