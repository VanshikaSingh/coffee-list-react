import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Cart } from './Cart';

export default function Navigation() {
  const numberOfItemsInCartDisplay = useSelector(state => state?.cartItems?.length)
  const handleCartClick = (e) =>{
    
  //  e.preventDefault();
   console.log(numberOfItemsInCartDisplay, "33")
    
  }
  // useEffect(() =>{
  //   <Cart />
  // },[handleCartClick])
  
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="nav-item nav-link" to="/">
  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-coffee-addiction-flaticons-lineal-color-flat-icons.png"width="60" height="60"  alt="coffeeLogo" />
  </NavLink>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link active" to="/coffees">Menu</NavLink>
      <NavLink className="nav-item nav-link" to="signup">Sign up</NavLink>
    </div>
    
  </div>
 
    <NavLink className="btn btn-outline-success my-5 my-sm-0"to="/cart" onClick={handleCartClick}>
    <img src="https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/null/external-cart-supermarket-flatart-icons-flat-flatarticons.png"/>{numberOfItemsInCartDisplay}</NavLink>

</nav>

  )
}
