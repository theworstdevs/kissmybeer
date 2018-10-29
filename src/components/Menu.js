import React, { Component } from 'react';
import logo from "../img/logo.jpeg"

class Menu extends React.Component {
   constructor(props) {
   super(props);

   }
   render(){
     return (
         <section id="menu">
             <nav className="container flex">
                 <img src={logo} alt=""/>
                 <ul className="flex">
                     <li><a href="">Katalog</a></li>
                     <li><a href="">O nas</a></li>
                     <li><a href="">Nowości</a></li>
                     <li><a href="">Kontakt</a></li>
                 </ul>
             </nav>
         </section>

     )
   }
 }

export default Menu;