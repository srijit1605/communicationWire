import React, { useState } from 'react'
import styles from './SnippetTab.module.css'
import SnippetNews from '@/components/NewsPreviews/SnippetNews/SnippetNews'
import { articles } from '@/app/helper'

const trendingArticles = articles.filter((article) => article.categories == 'Trending')

const SnippetTab = () => {

  const [trending, setTrending] = useState(false)
  return (
    <div className={styles.widgetStyle}>
      <div className={styles.tabButtons}>
        <div className={styles.tabButton} style={{ backgroundColor: trending ? '' : '#191b1d', color: trending ? '#191b1d' : '#ffffff' }} onClick={() => { setTrending(false) }}>
          <img src='/static/img/clock.png' width={14} alt='latest' title='latest' />
          <h5 className={styles.tabButtonText}>Latest News</h5>
        </div>
        <div className={styles.tabButton} style={{ backgroundColor: trending ? '#191b1d' : '', color: trending ? '#ffffff' : '#191b1d' }} onClick={() => { setTrending(true) }}>
          <img src='/static/img/trending.png' width={14} alt='trending' title='Trending' />
          <h5 className={styles.tabButtonText}>Trending News</h5>
        </div>
      </div>
      <div>{trending ? <SnippetNews fulWidth={true} articles={trendingArticles} /> : <SnippetNews fulWidth={true} articles={articles} />}</div>

    </div>
  )
}

export default SnippetTab