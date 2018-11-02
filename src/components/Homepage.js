import React, { Component } from 'react';
import Menu from "./Menu";
import Slider from "react-slick";
import Slide1 from "../img/slide1.jpg";
import Slide2 from "../img/slide2.jpg";
import Slide3 from "../img/slide3.jpg";
import Slide4 from "../img/slide4.jpg";
import iconTruck from "../img/delivery-truck.png";
import iconQuality from "../img/quality.png";
import iconBeer from "../img/beer.png";
import WOW from "wowjs";

class Homepage extends React.Component {

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

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

             <div className="benefits flex wow fadeIn" data-wow-delay="0.3s" data-wow-offset="100">
                 <div className="icon">
                     <img src={iconTruck} alt=""/>
                     <h2>Lorem ipsum</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores debitis reiciendis repudiandae ut voluptatibus!</p>
                 </div>
                 <div className="icon">
                     <img src={iconBeer} alt=""/>
                     <h2>Lorem ipsum</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores debitis reiciendis repudiandae ut voluptatibus!</p>
                 </div>
                 <div className="icon">
                     <img src={iconQuality} alt=""/>
                     <h2>Lorem ipsum</h2>
                     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias asperiores debitis reiciendis repudiandae ut voluptatibus!</p>
                 </div>
             </div>

             <section className="container description">
                 <div className="left wow fadeInLeft" data-wow-offset="200">
                     <h1>Donec elit massa</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque enim orci, rhoncus sed ante quis, blandit suscipit sapien. Aliquam erat volutpat. Vestibulum placerat interdum lobortis. In malesuada erat tortor, facilisis auctor nisi pretium eu. Pellentesque egestas risus velit, eget vehicula ex lobortis a. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
                 </div>
                 <div className="right wow fadeInRight" data-wow-offset="200">
                     <img src="https://mbtskoudsalg.com/images/draft-beer-png-4.png" alt=""/>
                 </div>
             </section>

         </div>
     )
   }
 }

export default Homepage;