import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RightWidget from "@/components/Hero/RightWidget/RightWidget";
import HeroFeature from "@/components/Hero/HeroFeature/HeroFeature";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Container className={styles.heroContainerAlignment}>
        <Row>
          <Col className={styles.heroLeftHighlights}>left highlights</Col>
          <Col xs={6} className={styles.heroFeatureSection}>
          <HeroFeature/>
            <div>related widget</div></Col>
          <Col className={styles.rightWidgetAlignment}>
          <RightWidget/>
          </Col>
        </Row>
      </Container>
      <div>
        <div>left hand widgets section</div>
        <div>right hand widget</div>
      </div>
      <Footer/>
    </main>
  );
}
