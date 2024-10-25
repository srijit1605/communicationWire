import React from 'react'
import styles from './Header.module.css'
import BreakingTicker from './BreakingTicker/BreakingTicker'
import SocialTab from './SocialTab/SocialTab'
import Navbar from './Navbar/Navbar'

const Header = () => {
    return (
        <div className={styles.headerAlignment}>
            <BreakingTicker />
            <SocialTab />
            <div className={styles.siteNameAlignment}>
                <div className={styles.leftQuote}>
                    <p>"This is just a change to bring back the habit."</p>
                    <p className={styles.quoteSpeaker}>- Srijit Ghosh</p>
                </div>
                <div className={styles.siteDescription}>
                    <div className={styles.siteName}>NewsWire</div>
                    <div className={styles.siteSubName}>News with credibility</div>
                </div>
                <div className={styles.rightQuote}>
                    <p>"This is also simply to keep the checkbox green"</p>
                    <p className={styles.quoteSpeaker}>- Srijit Ghosh</p>
                </div>
            </div>
            <Navbar/>
        </div>
    )
}

export default Header