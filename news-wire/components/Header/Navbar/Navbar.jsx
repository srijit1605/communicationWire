import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
    const navItems = ['Home', 'Popular', 'Trending', 'Technology', 'Travel', 'Sports', 'Business', 'About', 'Contact']
  return (
    <div  className={styles.navbar}>
        <div className={styles.navList}>{navItems.map((item, key) => (
            <div className={styles.navitem} key={key}>{item}</div>))}
        </div>
        <div>search</div>
    </div>
  )
}

export default Navbar