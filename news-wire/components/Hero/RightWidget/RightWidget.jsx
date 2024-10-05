'use client'
import React, { useState } from 'react'
import styles from './RightWidget.module.css'
import HeroOtherPreviews from '../../NewsPreviews/HeroOtherPreviews/HeroOtherPreviews'



const RightWidget = ({data}) => {
    const [trending, setTrending] = useState(false)
    const articles = data && data.slice(5,10).map((item) => ({
        title: item.title,
        body: item.description,
        author: item.creator,
        date: item.published_date.slice(0,16),
        comments: '1',
        img: item.media,
        categories: item.category
    }))

    const trendingArticles = data && data.slice(8,13).map((item) => ({
        title: item.title,
        body: item.description,
        author: item.creator,
        date: item.published_date.slice(0,16),
        comments: '1',
        img: item.media,
        categories: item.category
    }))
    
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
            <div>{trending? trendingArticles && trendingArticles.map((article, key) => <HeroOtherPreviews widget={true} article={article} key={key} />) : articles && articles.map((article, key) => <HeroOtherPreviews widget={true} article={article} key={key} />)}</div>

        </div>
    )
}

export default RightWidget