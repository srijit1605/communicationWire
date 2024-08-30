import React from 'react'
import styles from './Header.module.css'
import BreakingTicker from './BreakingTicker/BreakingTicker'
import SocialTab from './SocialTab/SocialTab'

const Header = () => {
    return (
        <div className={styles.headerAlignment}>
            <BreakingTicker />
            <SocialTab />
            <div className={styles.siteNameAlignment}><div>left quote</div><div className={styles.siteDescription}><div className={styles.siteName}>NewsWire</div><div className={styles.siteSubName}>News with credibility</div></div><div>right quote</div></div>
            <div>nav menu</div>
        </div>
    )
}

export default Header