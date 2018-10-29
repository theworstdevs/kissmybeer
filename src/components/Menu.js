import React, { Component } from 'react';
import logo from "../img/logo.png";
import shoppingCart from "../img/shopping-cart.png";

class Menu extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <section id="menu">
             <nav className="container flex">

                 <div className="left-section">
                 <img src={logo} alt=""/>
                 </div>

                 <div className="right-section flex">
                 <ul className="flex">
                     <li><a href="">Katalog</a></li>
                     <li><a href="">O nas</a></li>
                     <li><a href="">Nowości</a></li>
                     <li><a href="">Kontakt</a></li>
                 </ul>
                 <img src={shoppingCart} alt=""/>
                 <h4>l.jakimov</h4>

                 </div>
             </nav>
         </section>

     )
   }
 }

export default Menu;