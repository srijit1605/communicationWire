import React from 'react'
import styles from './BreakingTicker.module.css'
import Marquee from 'react-fast-marquee'

const breakingNewsList = [
  'First breaking news of the day', 
  'Second breaking news of the day', 
  'Third breaking news of the day', 
  'Fourth breaking news of the day',
  'Fifth breaking news of the day',
  'Sixth breaking news of the day',
  'Seventh breaking news of the day',
]

const BreakingTicker = () => {
  return (
    <div className={styles.tickerRibbon}>
      <div className={styles.tickerBreakingText}><h3 className={styles.breakingText}>Breaking News</h3></div>
      <Marquee>
        {breakingNewsList.map((item, key) => <div key={key} className={styles.breakingNewsItem}>{item}</div>)}
      </Marquee>
    </div>
  )
}

export default BreakingTicker