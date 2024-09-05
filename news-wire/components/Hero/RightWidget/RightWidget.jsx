import React from 'react'
import styles from './RightWidget.module.css'
import HeroOtherPreviews from '../../NewsPreviews/HeroOtherPreviews/HeroOtherPreviews'

const RightWidget = () => {
  return (
    <div className={styles.widgetStyle}>
        <HeroOtherPreviews/>
    </div>
  )
}

export default RightWidget