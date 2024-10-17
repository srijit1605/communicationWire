import HeroOtherPreviews from '@/components/NewsPreviews/HeroOtherPreviews/HeroOtherPreviews'
import React from 'react'
import { articles } from '@/app/helper'

const LeftHighlights = () => {
    

  return (
    <div>
        {articles.map((article, key) => <HeroOtherPreviews article={article} key={key}/>)}
    </div>
  )
}

export default LeftHighlights