import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Home.module.css'

export const Cart = () => {
    //const cartItems = useSelector(state => state.cartItems);
    //console.log(cartItems, "carttt")
//     useEffect((e) =>{
// e.preventDefault()
//     },[])
  return (
    <div className={styles.CartContainer}>
    <div className={styles.Header}>
        <h3 className={styles.Heading}>Shopping Cart</h3>
        <h5 className={styles.Action}>Remove all</h5>
    </div>


        <div className={styles.CartItems}>
        <div className={styles.imageBox}>
        <img src="https://img.icons8.com/bubbles/100/null/coffee-to-go.png" />
        </div>
        <div className={styles.about}>
            <h1 className={styles.title}>Abc</h1>
            <h3 className={styles.subtitle}>250ml</h3>
            <img src="https://img.icons8.com/dusk/64/null/organic-food.png" style={{ height:"30px" }}/>
        </div>
        <div className={styles.counter}>
            <div className={styles.btn}>+</div>
            <div className={styles.count}>2</div>
            <div className={styles.btn}>-</div>
        </div>
        <div className={styles.prices}>
            <div className={styles.amount}>$2.99</div>
            <div className={styles.save}><u>Save for later</u></div>
            <div className={styles.remove}><u>Remove</u></div>
        </div>
  </div>
    )
   

    {/* <div className={styles.CartItemsPad}>
          <div className={styles.imageBox}>

          <img src="https://img.icons8.com/doodle/48/null/coffee-to-go.png" style={{ height:"120px" }} />
          </div>
          <div className={styles.about}>
              <h1 className={styles.title}>Grapes Juice</h1>
              <h3 className={styles.subtitle}>250ml</h3>
              <img src="https://img.icons8.com/doodle/48/null/coffee-to-go.png" style={{ height:"30px" }}/>
          </div>
          <div className={styles.counter}>
              <div className={styles.btn}>+</div>
              <div className={styles.count}>1</div>
              <div className={styles.btn}>-</div>
          </div>
          <div className={styles.prices}>
              <div className={styles.amount}>$3.19</div>
              <div className={styles.save}><u>Save for later</u></div>
              <div className={styles.remove}><u>Remove</u></div>
          </div>
    </div> */}
  <hr/> 
  <div className={styles.checkout}>
  <div className={styles.total}>
      <div>
          <div className={styles.Subtotal}>Sub-Total</div>
          <div className={styles.items}>2 items</div>
      </div>
      <div className={styles.totalAmount}>$6.18</div>
  </div>
  <button className={styles.button}>Checkout</button></div>
</div>
  )
}
