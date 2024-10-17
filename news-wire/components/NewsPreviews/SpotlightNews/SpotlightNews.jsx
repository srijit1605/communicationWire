import React from 'react'
import styles from './SpotlightNews.module.css'
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SpotlightNews = ({title='', articles=[]}) => {
  return (
    <div className={styles.spotlightBorder}>
      <div className={styles.spotlightHeader}>
      <h3 className={styles.sectionHeader}>{title}</h3>
      <div className={styles.newsAlignment}>{articles.map((article, key)=> (
        
    <Link style={{textDecoration: 'none'}} key={key} className={styles.spotlightNumber} href={`/article/${article.id}`} passHref>
              <div style={{zIndex: '6'}}>
              <h2>{key+1}</h2>
              <h3>{article.title}</h3>
              </div>
        </Link>
      ))}</div>
      </div>
    </div>
  )
}

export default SpotlightNews