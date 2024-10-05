'use client'

import styles from "./page.module.css";
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

  const getData = async() => {
    try {
    const res = await axios.get('http://localhost:8000/job-result')
    const tempData = res.data.flat(1)
    const duplicatesRemoved = removeDuplicates(tempData)
    setData(duplicatesRemoved)
  }
  catch(err) {
    console.log(err)
  }
}

useEffect(() => {
  getData()
}, [])

  
  
  return (
    <div className={styles.main}>
      <div style={{position: 'absolute', top: '250px', right: '40px', filter: 'drop-shadow(2px 2px 2px #666)'}}><ProfileDropdownMenu/></div>
      <Container className={styles.heroContainerAlignment}>
        <Row className={styles.rowGutter}>
          <Col className={styles.heroLeftHighlights}><LeftHighlights data={data}/></Col>
          <Col xs={6} className={styles.heroFeatureSection}>
          <HeroFeature datum = {data[0]}/>
          <FeatureRelated data={data}/>  
          </Col>
          <Col className={styles.rightWidgetAlignment}>
          <RightWidget data={data}/>
          </Col>
        </Row>

        <Row className={styles.rowGutter}>
          <Col sm={12} md={8} >
          <LeftHandWidget data={data}/>
          </Col>
          <Col sm={12} md={4}>
          <RightHandWidget data={data}/>
          </Col>
        </Row>

        <Row className={styles.rowGutter}>
          <Col>
          <BottomWidget data={data}/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
