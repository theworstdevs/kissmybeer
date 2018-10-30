import React, { Component } from 'react';
import Menu from "./Menu";
import Slider from "react-slick";
import Slide1 from "../img/slide1.jpg";
import Slide2 from "../img/slide2.jpg";
import Slide3 from "../img/slide3.jpg";
import Slide4 from "../img/slide4.jpg";
import icon from "../img/delivery-truck.png";

class Homepage extends React.Component {
   constructor() {
   super();

   }
   render(){
       const settings = {
           dots: true,
           fade: true,
           infinite: true,
           autoplay: true,
           speed: 500,
           slidesToShow: 1,
           slidesToScroll: 1,
           autoplaySpeed: 3000,
           cssEase: "linear"
       };
     return (
         <div>
             <div className="main-slider">
                 <Slider {...settings}>
                     <div>
                         <div className="single-slide flex">
                             <div className="desc">
                                 <h1>Lorem ipsum</h1>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aspernatur assumenda atque blanditiis commodi consequatur consequuntur corporis cum dolore dolores eius eligendi est illum iste magnam molestiae molestias numquam possimus praesentium quod recusandae sapiente tempore totam voluptates, voluptatibus voluptatum?</p>
                             </div>
                             <figure><img src={Slide1} alt=""/></figure>
                         </div>
                     </div>
                     <div>
                         <div className="single-slide flex">
                             <div className="desc">
                             <h1>Adipisci aliquam aspernatur</h1>
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aspernatur assumenda atque blanditiis commodi consequatur consequuntur corporis cum dolore dolores eius eligendi est illum iste magnam molestiae molestias.</p>
                             </div>
                             <figure><img src={Slide2} alt=""/></figure>
                         </div>
                     </div>
                     <div>
                         <div className="single-slide flex">
                             <div className="desc">
                                 <h1>Adipisci aliquam aspernatur</h1>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aspernatur assumenda atque blanditiis commodi consequatur consequuntur corporis cum dolore dolores eius eligendi est illum iste magnam molestiae molestias.</p>
                             </div>
                             <figure><img src={Slide3} alt=""/></figure>
                         </div>
                     </div>
                     <div>
                         <div className="single-slide flex">
                             <div className="desc">
                                 <h1>Corporis cum dolore</h1>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aspernatur assumenda atque blanditiis commodi consequatur consequuntur corporis cum dolore dolores eius eligendi est illum iste magnam molestiae molestias.orem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aliquam aspernatur assumenda atque blanditiis commodi consequatur.</p>
                             </div>
                             <figure><img src={Slide4} alt=""/></figure>
                         </div>
                     </div>
                 </Slider><br/><br/>
             </div>

             <div className="benefits flex">
                 <div className="icon">
                     <img src={icon} alt=""/>
                     <h2>Lorem ipsum</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores debitis reiciendis repudiandae ut voluptatibus!</p>
                 </div>
                 <div className="icon">
                     <img src={icon} alt=""/>
                     <h2>Lorem ipsum</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores debitis reiciendis repudiandae ut voluptatibus!</p>
                 </div>
                 <div className="icon">
                     <img src={icon} alt=""/>
                     <h2>Lorem ipsum</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores debitis reiciendis repudiandae ut voluptatibus!</p>
                 </div>
             </div>

         </div>
     )
   }
 }

export default Homepage;