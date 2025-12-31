import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css"


export const Header = ({cart}) => {
  return (
    <div className='navbar'>
        <div className="logo">Food Cart</div>
        <ul>
            <li className='home'>
                <Link to={"/"}>Order Now !</Link>
            </li>
            <li>
               <Link to={"/about"}>About Us</Link>
            </li>
            <li>
                <Link to={"/Cart"}>
                <span className='span'>{cart.length} </span>
                📃View Cart</Link> 
            </li>
        </ul>
    </div>
  )
}
