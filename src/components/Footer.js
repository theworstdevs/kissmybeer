import React, { Component } from 'react';
import Homepage from "./Homepage";
import { SocialIcon } from 'react-social-icons';
import Popup from "reactjs-popup";

class Footer extends React.Component {
   constructor() {
   super();

   this.state = {
       display: "none",
       display2: "none",
       value: ''
   }

   }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleClick = (e) => {
        e.preventDefault();
        if(this.state.value.length > 5 && this.state.value.indexOf('@') != -1){
            this.setState({
                display: "block",
                display2: "none"
            })
        }else{
            this.setState({
                display2: "block",
            })
        }
    }


   render(){


     return (
        <footer>



            <div className="container flex">

                <div className="newsletter">
                    <div className="popup" style={{display: this.state.display}}>
                        <h3>Zostałeś zapisany do newslettera</h3>
                    </div>
                    <div className="error" style={{display: this.state.display2}}>
                        <h3>Wpisz poprawny adres e-mail</h3>
                    </div>
                    <h2>Zapisz się do newslettera</h2>
                    <input type="email" value={this.state.value} onChange={this.handleChange} placeholder="Podaj adres email" required/>
                    <a href="#" onClick={this.handleClick} className="myButton">ZAPISZ SIĘ</a>
                </div>

                <div className="account flex flex-column">
                    <h3>Twoje konto</h3>
                    <a href="#">Twoje konto</a>
                    <a href="#">Twoje zamówienia</a>
                    <a href="#">Rejestracja</a>
                    <a href="#">Logowanie</a>
                </div>

                <div className="account flex flex-column">
                    <h3>Informacje</h3>
                    <a href="#">Regulamin</a>
                    <a href="#">Faq</a>
                    <a href="#">O firmie</a>
                    <a href="#">Dostawa</a>
                </div>

                <div className="social">
                <SocialIcon url="http://twitter.com/#" color="#fff" style={{ height: 35, width: 35, marginRight:"15px" }} />
                    <SocialIcon url="http://facebook.com/#" color="#fff" style={{ height: 35, width: 35, marginRight:"15px" }} />
                    <SocialIcon url="http://instagram.com/#" color="#fff" style={{ height: 35, width: 35, marginRight:"15px" }} />
                </div>
            </div>
        </footer>
     )
   }
 }

export default Footer;