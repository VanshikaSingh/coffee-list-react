import React from 'react'
import Navigation from '../Components/Navigation'
import styles from "../styles/Home.module.css";
import coffeeShop from "../img/coffee-shop.jpg"
export default function Home() {
  return (
    <div className={styles.mainContainerHome}>
        <Navigation/>
        <div className={styles.backgroundImage} style={{ backgroundImage: `url(${coffeeShop})` }}>      
    </div>
    <div className={styles.centeredText}>Welcome to React Coffee Cafe!</div>
    <div className={styles.centeredTextTwo}>Order take out or delivery</div>
    </div>
  )
}
