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

export default function Home() {
  const [data, setData] = useState('')
  const getData = async() => {
    try {
    const res = await axios.get('http://localhost:8000/fetch_feed/19')
    console.log('response is:', res.data)
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
          <LeftHandWidget/>
          </Col>
          <Col sm={12} md={4}>
          <RightHandWidget/>
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
