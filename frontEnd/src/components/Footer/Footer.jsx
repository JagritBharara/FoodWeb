import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img className="logo1-img" src={assets.logo1} alt=""  />               
                <p>Lorem ipsum dolor sit Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam exercitationem possimus omnis ad at sint, voluptatem ullam veritatis ab illum. amet consectetur, adipisicing elit. Maiores porro a laboriosam ipsum veniam omnis!</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt=""  />
                    <img src={assets.linkedin_icon} alt=""  />
                    <img src={assets.twitter_icon} alt=""  />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delievery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91-9392233212</li>
                    <li>contact@me.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">compyright Lorem ipsum dolor Corporis libero reiciendis eaque.</p>
    </div>
  )
}

export default Footer