import React from 'react'
import styles from "../../styles/Home.module.css"
import { CartCounter } from '../CartCounter';
export default function CoffeeList(props) {
  return (
    <>  
        {props && props.coffees.map((coffee, index) => {
          console.log(coffee, index, "index")
        const {blend_name, intensifier,  notes, origin, variety} = coffee
        return (
          <div className={styles.coffeeList} key={index}>
            <h2>{blend_name}</h2>
            <h6>{notes}</h6>
            <h6>{origin}</h6>
            <h6>{variety}</h6>
            <h6>{intensifier}</h6>
           
            <CartCounter blend_name={blend_name}/>
          </div>
        );
      })}
      </>
  )
}
