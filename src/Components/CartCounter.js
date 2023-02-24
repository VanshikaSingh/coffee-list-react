import React from "react";
import { useState, useEffect, useSelector } from "react";

import styles from "./../styles/Home.module.css";
import { addItemsToCart, removeItemsFromCart } from "../redux/actions";
import { useDispatch } from "react-redux";

export const CartCounter = ({blend_name, sum}) => {

  const dispatch = useDispatch();

  const [counter, setCounter] = useState(0);
  const [blendName, setBlendName] = useState("")
  const cart = useSelector((state) => state.cart)

  const getTotalQuantity = () => {
    let total = 0
    cart.forEach(item => {
      total += item.quantity
    })
    return total
  }
  useEffect(() => {
    setCounter(JSON.parse(window.localStorage.getItem('counter')));
    // setBlendName(JSON.parse(window.localStorage.getItem('blendName')))
  }, []);

  useEffect(() => {
    window.localStorage.setItem('counter', counter);
    // window.localStorage.setItem('blendName', blendName);
  }, [counter]);
  //increase counter
  const increase = () => {
    console.log("hi")
    setCounter((count) => count + 1);
    dispatch(addItemsToCart( blend_name, counter + 1));
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
    dispatch(removeItemsFromCart(blend_name, counter - 1));
  };

  //reset counter
  // const reset = () =>{
  //   setCounter(0)
  // }
  console.log(counter, "cosjdcdsn");
  return (
    <>
      <div className={styles.counter}>
        <div className={styles.btn} onClick={increase}>
          +
        </div>
        <div className={styles.count}>{counter}</div>
        <div className={styles.btn} onClick={decrease}>
          -
        </div>
      </div>
    </>
  );
};
