import HeroOtherPreviews from '@/components/NewsPreviews/HeroOtherPreviews/HeroOtherPreviews'
import React from 'react'

const LeftHighlights = ({articles}) => {

  return (
    <div>
        {articles && articles.slice(0,5).map((article, key) => <HeroOtherPreviews article={article} key={key}/>)}
    </div>
  )
}

export default LeftHighlights