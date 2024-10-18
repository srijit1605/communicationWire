import React from 'react'
import styles from './DashboardNav.module.css'

const DashboardNav = ({dashboardOptions, setOption}) => {

  return (
    <div className={styles.navAlign}>
        {dashboardOptions.map(option => (
            <div className={styles.navOptions} onClick={() => {setOption(option)}}>{option}</div>
        ))}
    </div>
  )
}

export default DashboardNav