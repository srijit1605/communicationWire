'use client'
import React, { useState } from 'react'
import styles from './RightWidget.module.css'
import HeroOtherPreviews from '../../NewsPreviews/HeroOtherPreviews/HeroOtherPreviews'

const RightWidget = () => {
    const [trending, setTrending] = useState(false)
    const articles = [{
        title: 'News Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
        categories: 'Technology'
    },
    {
        title: 'News Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
        categories: 'Technology'
    },
    {
        title: 'News Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
        categories: 'Technology'
    },
    {
        title: 'News Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
        comments: '1',
        categories: 'Technology'
    },
    {
        title: 'News Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
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
        img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
    
    },
    {
        title: 'News Trending Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        categories: 'Technology',
        img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
    
    },
    {
        title: 'News Trending Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        categories: 'Technology',
        img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
    
    },
    {
        title: 'News Trending Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        categories: 'Technology',
        img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
    
    },
    {
        title: 'News Trending Article Title',
        body: 'This is the body of the news article. This is only for test purposes. To Reiterate, this article, as should be pretty obvious by now, is not an actual news article.',
        author: 'someone',
        date: 'Sep 5 2024',
        comments: '1',
        categories: 'Technology',
        img:'https://resize.indiatvnews.com/en/centered/oldbucket/1200_675/mainnational/Kolkata-s-iconi26054.jpg',
    
    }]

    return (
        <div className={styles.widgetStyle}>
            <div className={styles.tabButtons}>
                <div className={styles.tabButton} style={{borderBottom: trending? '0px solid #191b1d' : '2px solid #191b1d'}} onClick={()=>{setTrending(false)}}>
                    <img src='/static/img/clock.png' width={14} alt='latest' title='latest'/>
                    <h5 className={styles.tabButtonText}>Latest News</h5>
                </div>
                <div className={styles.tabButton}  style={{borderBottom: trending? '2px solid #191b1d' : '0px solid #191b1d'}} onClick={()=>{setTrending(true)}}>
                    <img src='/static/img/trending.png' width={14} alt='trending' title='Trending'/>
                    <h5 className={styles.tabButtonText}>Trending News</h5>
                </div>    
            </div> 
            <div>{trending? trendingArticles.map((article, key) => <HeroOtherPreviews widget={true} article={article} key={key} />) : articles.map((article, key) => <HeroOtherPreviews widget={true} article={article} key={key} />)}</div>

        </div>
    )
}

export default RightWidget