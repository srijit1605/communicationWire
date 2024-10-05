import React from 'react'
import styles from './InternationalNews.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SnippetNews from '@/components/NewsPreviews/SnippetNews/SnippetNews';

const InternationalNews = ({articles}) => {
  return (
    <div className={styles.sectionAlignment}>
      <div className={styles.headerSection}>{'International News'}</div>
      <Container>
        <Row>
          <Col className={styles.colStyle}>
          <div className={styles.focusNews}>
          <div className={styles.articleImageDiv}  style={{background:`url(${articles[0]?.img})`, backgroundSize:'cover', backgroundRepeat: 'no-repeat'}}></div>
          <h5 className={styles.featureCategoryInt}>{articles[0]?.categories}</h5>
      <h2 className={styles.featureTitleInt}>{articles[0]?.title}</h2>
      <div className={styles.detailsAlignment}>
        <img className={styles.newsDetailsIcon} src={'/static/img/user.png'} height={13} alt='author' title='Author' />
        <h6 className={styles.newsDetails}>{articles[0]?.author}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/calendar.png'} height={13} alt='date' title='Date' />
        <h6 className={styles.newsDetails}>{articles[0]?.date}</h6>
        <img className={styles.newsDetailsIcon} src={'/static/img/speech-bubble.png'} height={13} alt='comment' title='Comment' />
        <h6 className={styles.newsDetails}>{articles[0]?.comments}</h6>
      </div>
        <p className={styles.newsExcerpt}>{articles[0]?.body.substring(0,100)}...</p>
        <p className={styles.readFull}>Read Full article </p>
          </div>
          </Col>
          <Col className={styles.colStyle}>
          <SnippetNews articles={articles && articles.slice(1,5)} fulWidth={true}/>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default InternationalNews