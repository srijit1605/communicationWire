'use client'

import React, { useState } from 'react'
import styles from './Navbar.module.css'
import { Button } from 'react-bootstrap'

const Navbar = () => {
  const [isSearch, setIsSearch] = useState(false)  
  const [searchItem, setSearchItem] = useState('')
  const navItems = ['home', 'popular', 'trending', 'technology', 'travel', 'sports', 'business', 'about', 'contact']
  
  console.log('searching for', searchItem)
  return (
    <div  className={styles.navbar}>
        <div className={styles.navList}>{navItems.map((item, key) => (
            <div className={styles.navitem} key={key}><a className={styles.navItemText} href={item == 'home'? '/' : item}>{item}</a></div>))}
        </div>
        <div className={styles.searchIcon}>
          <img onClick={()=>{setIsSearch(!isSearch)}} src='/static/img/search.png' height={16} alt='search'/>
        </div>
        {isSearch?(
          <div className={styles.searchBox}>
            <input className={styles.inputAlignment} type='text' onChange={(e)=>{setSearchItem(e.target.value)}}/>
            <Button onClick={()=>{setIsSearch(false)}}>search</Button>
          </div>
        ): null}
    </div>
  )
}

export default Navbar