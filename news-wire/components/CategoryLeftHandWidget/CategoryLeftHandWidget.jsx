import React from 'react'
import NewsRow from '../LeftHandWidgets/NewsRow/NewsRow'
import { articles } from '@/app/helper'

const CategoryLeftHandWidget = ({category}) => {


  return (
    <div>
        <NewsRow articles={articles.filter((article) => article.categories.toLowerCase() == category )}/>
    </div>
  )
}

export default CategoryLeftHandWidget