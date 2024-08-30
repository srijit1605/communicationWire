import React from 'react'
import styles from './SocialTab.module.css'
import SocialBox from './SocialBox/SocialBox'

const SocialTab = () => {
    const dateTime = new Date().toString()
    const socials = ['fb', 'in', 'xh', 'yt']
    return (
        <div className={styles.tabAlignment}>
            <div className={styles.dateTime}>{dateTime.slice(0, 21)}</div>
            <div className={styles.socialArrangement}>{socials.map((item, key) => (
                <SocialBox item={item} key={key}/>
            ))}</div>
        </div>
    )
}

export default SocialTab