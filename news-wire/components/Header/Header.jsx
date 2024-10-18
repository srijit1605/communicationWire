import React from 'react'
import styles from './Header.module.css'
import BreakingTicker from './BreakingTicker/BreakingTicker'
import SocialTab from './SocialTab/SocialTab'
import Navbar from './Navbar/Navbar'

const Header = ({articles=[]}) => {
    return (
        <div className={styles.headerAlignment}>
            <BreakingTicker articles={articles}/>
            <SocialTab />
            <div className={styles.siteNameAlignment}>
                <div className={styles.leftQuote}>
                    <p>"This is the quote to go on the left hand side of the header section"</p>
                    <p className={styles.quoteSpeaker}>- Srijit Ghosh</p>
                </div>
                <div className={styles.siteDescription}>
                    <div className={styles.siteName}>NewsWire</div>
                    <div className={styles.siteSubName}>News with credibility</div>
                </div>
                <div className={styles.rightQuote}>
                    <p>"This is the quote to go on the right hand side of the header section"</p>
                    <p className={styles.quoteSpeaker}>- Srijit Ghosh</p>
                </div>
            </div>
            <Navbar/>
        </div>
    )
}

export default Header