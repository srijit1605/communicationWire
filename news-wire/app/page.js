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
import { articles } from '@/app/helper'
// import ProfileDropdownMenu from "@/components/ProfileDropdownMenu/ProfileDropdownMenu";

export default function Home() {
  const [data, setData] = useState(articles)

  return (
    <div className={styles.main}>
      {/* <div style={{position: 'absolute', top: '250px', right: '40px', filter: 'drop-shadow(2px 2px 2px #666)'}}><ProfileDropdownMenu/></div> */}
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
          <BottomWidget/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
