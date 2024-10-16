"use client"

import React from 'react'
import styles from "../page.module.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LeftHandWidget from '@/components/LeftHandWidgets/LeftHandWidget';
import RightHandWidget from '@/components/RightHandWidgets/RightHandWidget';

const page = () => {
  return (
    <div className={styles.main}>Category page
    <Container className={styles.heroContainerAlignment}>
    <Row className={styles.rowGutter}>
          <Col sm={12} md={8} >
          <LeftHandWidget/>
          </Col>
          <Col sm={12} md={4}>
          <RightHandWidget/>
          </Col>
        </Row>
    </Container>
    </div>
  )
}

export default page