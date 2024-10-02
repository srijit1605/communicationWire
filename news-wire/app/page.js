'use client'

import styles from "./page.module.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightWidget from "@/components/Hero/RightWidget/RightWidget";
import HeroFeature from "@/components/Hero/HeroFeature/HeroFeature";
import LeftHighlights from "@/components/Hero/LeftHighlights/LeftHighlights";
import FeatureRelated from "@/components/Hero/HeroFeature/FeatureRelated/FeatureRelated";
import axios from "axios";
import { useEffect, useState } from "react";
import LeftHandWidget from "@/components/LeftHandWidgets/LeftHandWidget";
import RightHandWidget from "@/components/RightHandWidgets/RightHandWidget";
import BottomWidget from "@/components/BottomWidgets/BottomWidget";
import ProfileDropdownMenu from "@/components/ProfileDropdownMenu/ProfileDropdownMenu";

export default function Home() {
  const [data, setData] = useState('')
  const getData = async() => {
    try {
    const res = await axios.get('http://localhost:8000/fetch_feed/10')
    console.log('response is:', res.data)
    const articleList = JSON.parse(res.data.data).map((item, key) => ({
      title: item.title,
      body: item.description,
      author: 'someone',
      date: 'Sep 5 2024',
      comments: '1',
      img:item.media,
      categories: 'Technology'
  }))
  console.log('articleList', articleList)
    setData(JSON.parse(res.data.data))
  }
  catch(err) {
    console.log(err)
  }
}

console.log('data is:', data)

useEffect(() => {
  getData()
}, [])

  
  
  return (
    <div className={styles.main}>
      <div style={{position: 'absolute', top: '250px', right: '40px', filter: 'drop-shadow(2px 2px 2px #666)'}}><ProfileDropdownMenu/></div>
      <Container className={styles.heroContainerAlignment}>
        <Row className={styles.rowGutter}>
          <Col className={styles.heroLeftHighlights}><LeftHighlights/></Col>
          <Col xs={6} className={styles.heroFeatureSection}>
          <HeroFeature/>
          <FeatureRelated/>  
          </Col>
          <Col className={styles.rightWidgetAlignment}>
          <RightWidget/>
          </Col>
        </Row>

        <Row className={styles.rowGutter}>
          <Col sm={12} md={8} >
          <LeftHandWidget articles={data}/>
          </Col>
          <Col sm={12} md={4}>
          <RightHandWidget articles={data}/>
          </Col>
        </Row>

        <Row className={styles.rowGutter}>
          <Col>
          <BottomWidget articles={data}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
