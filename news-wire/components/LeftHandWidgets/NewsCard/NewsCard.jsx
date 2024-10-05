import React from 'react'
import styles from './NewsCard.module.css'
import SingleCard from './SingleCard/SingleCard'

const NewsCard = ({articles}) => {
  return (
    <div>
      <div className={styles.headerSection}>{'Prime News'}</div>
      <div className={styles.articleWrapper}>{ articles && articles.map((article) => <SingleCard article={article}/>)}</div>
    </div>
  )
}

export default NewsCard