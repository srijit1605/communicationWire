import React from 'react'
import styles from './SpotlightNews.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SpotlightNews = ({title='', articles=[]}) => {
  return (
    <div className={styles.spotlightBorder}>
      <div className={styles.spotlightHeader}>
      <h3 className={styles.sectionHeader}>{title}</h3>
      <div className={styles.newsAlignment}>{articles && articles.map((article, key)=> (
        <div key={key} className={styles.spotlightNumber}>
              <h2>{key+1}</h2>
              <h3>{article.title}</h3>
        </div>
      ))}</div>
      </div>
    </div>
  )
}

export default SpotlightNews