import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <div><div><div>left highlights</div><div><div>feature news</div><div>related widget</div></div></div><div>right widget</div></div>
      <div><div>left hand widgets section</div><div>right hand widget</div></div>
      <Footer/>
    </main>
  );
}
