import React from 'react'
import '../Footer/Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                    <img src={assets.logo} alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit voluptatum quod harum quas exercitationem soluta sequi aspernatur omnis natus, quos fuga eum sint consequatur, molestias optio porro cum obcaecati illum?</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon}alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+994 77 594 00 80</li>
                <li>contact@yashar.com</li>
            </ul>

            </div>
      
        </div>
            <hr />
         <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.  </p>
    </div>
  )
}

export default Footer