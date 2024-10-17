'use client'
import React, { useState } from 'react'
import styles from './RightWidget.module.css'
import HeroOtherPreviews from '../../NewsPreviews/HeroOtherPreviews/HeroOtherPreviews'
import { articles } from '@/app/helper'

const trendingArticles = articles.filter((article) => article.categories == 'Trending')


const RightWidget = () => {
    const [trending, setTrending] = useState(false)
    
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