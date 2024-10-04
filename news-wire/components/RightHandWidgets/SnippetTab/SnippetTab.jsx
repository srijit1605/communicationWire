import React, { useState } from 'react'
import styles from './SnippetTab.module.css'
import SnippetNews from '@/components/NewsPreviews/SnippetNews/SnippetNews'

const articles = [{
  title: 'News Article Title',
  body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
  author: 'someone',
  date: 'Sep 5 2024',
  comments: '1',
  img: 'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
  categories: 'Technology'
},
{
  title: 'News Article Title',
  body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
  author: 'someone',
  date: 'Sep 5 2024',
  comments: '1',
  img: 'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
  categories: 'Technology'
},
{
  title: 'News Article Title',
  body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
  author: 'someone',
  date: 'Sep 5 2024',
  comments: '1',
  img: 'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
  categories: 'Technology'
},
{
  title: 'News Article Title',
  body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
  author: 'someone',
  date: 'Sep 5 2024',
  img: 'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
  comments: '1',
  categories: 'Technology'
},
{
  title: 'News Article Title',
  body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
  author: 'someone',
  date: 'Sep 5 2024',
  img: 'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
  comments: '1',
  categories: 'Technology'
}]

const trendingArticles = [{
  title: 'News Trending Article Title',
  body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
  author: 'someone',
  date: 'Sep 5 2024',
  comments: '1',
  categories: 'Technology',
  img: 'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',

},
{
  title: 'News Trending Article Title',
  body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
  author: 'someone',
  date: 'Sep 5 2024',
  comments: '1',
  categories: 'Technology',
  img: 'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',

},
{
  title: 'News Trending Article Title',
  body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
  author: 'someone',
  date: 'Sep 5 2024',
  comments: '1',
  categories: 'Technology',
  img: 'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',

},
{
  title: 'News Trending Article Title',
  body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
  author: 'someone',
  date: 'Sep 5 2024',
  comments: '1',
  categories: 'Technology',
  img: 'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',

},
{
  title: 'News Trending Article Title',
  body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
  author: 'someone',
  date: 'Sep 5 2024',
  comments: '1',
  categories: 'Technology',
  img: 'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',

}]

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