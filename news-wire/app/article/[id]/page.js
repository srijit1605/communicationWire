"use client"
import React, { useEffect, useState } from 'react';
import styles from "../../page.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightHandWidget from '@/components/RightHandWidgets/RightHandWidget';

import { articles } from '@/app/helper'
import News from '@/components/News/News';

const ArticlePage = ({ params }) => {
  const tempArticle = articles.filter((article) => article.id == params.id)
  const [article, setArticle] = useState(tempArticle[0]); 
  const [loading, setLoading] = useState(false); 

  // useEffect(() => {
  //   const fetchArticle = async () => {
  //     try {
  //       const response = await fetch(`/api/fetch_article/${params.id}`); 
  //       const data = await response.json();
  //       setArticle(data);
  //     } catch (error) {
  //       console.error('Error fetching article:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchArticle();
  // }, [params.id]);

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
            <RightHandWidget /> 
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ArticlePage;
