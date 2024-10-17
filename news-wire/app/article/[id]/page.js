"use client"
import React, { useEffect, useState } from 'react';
import styles from "../../page.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightHandWidget from '@/components/RightHandWidgets/RightHandWidget';

// import { articles } from '@/app/helper'
import News from '@/components/News/News';
import axios from 'axios';

const ArticlePage = ({ params }) => {
  const [article, setArticle] = useState({}); 
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true); 

  const removeDuplicates = (data) => {
    const seenTitles = new Set();
    return data.filter((item) => {
      if (seenTitles.has(item.title)) {
        return false;
      } else {
        seenTitles.add(item.title);
        return true;
      }
    });
  };

  useEffect(() => {
      const getData = async() => {
    try {
      const res = await axios.get('http://localhost:8000/job-result')
      const tempDataArr = res.data.flat(1)
      const tempDataUniqueArr = removeDuplicates(tempDataArr)
      const tempArticles = tempDataUniqueArr.map(item => ({
        id: item.title.replace(/\s+/g, '-').toLowerCase(),
        title: item.title,
        body: item.description,
        author: item.creator,
        date: item.published_date?.slice(0,16),
        comments: '1',
        img: item.media,
        categories: item.category
      }))
      setArticles(tempArticles)
      const tempArticle = tempArticles.filter(article => article.id == params.id)
      setArticle(tempArticle[0])
      setLoading(false)
    }
    catch(err) {
      console.log(err)
    }
  }

  console.log('article', article)

  getData();
  }, [params.id, article]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <div className={styles.main}>
      <Container className={styles.heroContainerAlignment}>
        <Row className={styles.rowGutter}>
          <Col sm={12} md={8}>
            <News article={article} />
          </Col>
          <Col sm={12} md={4}>
            <RightHandWidget  articles={articles} /> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArticlePage;
