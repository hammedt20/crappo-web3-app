import React from 'react'
import { ImYoutube } from 'react-icons/im'
import { RiWhatsappFill, RiInstagramLine, RiTwitterFill, RiLinkedinBoxFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer-container'> 
        <div className='footer-detail'>
          <div className='footer-logo-div'>
            <a href='/' className='footer-logo'>
              <img src='./image/logo.svg' alt='' />
            </a>
          </div>
          <div className='footer-links'>
            <div className='footer-links-detail'>
              <h2>Quick Links</h2>
              <ul>
                <li>Home</li>
                <li>Products</li>
                <li>About</li>
                <li>Feature</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className='footer-links-detail'>
              <h2>Resources Links</h2>
              <ul>
                <li>Download Whitepaper</li>
                <li>Smart Token</li>
                <li>Blockchain Explore</li>
                <li>Crypto Api</li>
                <li>Interest</li>
              </ul>
            </div>
          </div>
          <div className='footer-payment'>
            <h3>We accept following payment systems</h3>
            <div className='footer-imgs'>
              <img src='./image/visa.png'  alt=''/>
              <img src='./image/mastercard.png'  alt=''/>
              <img src='./image/bitcoin.png'  alt=''/>
            </div>
          </div>
        </div>
        <div className='footer-icons-container'>
          <div className='footer-icons-title'>© 2022 CRAPPO. All rights reserved.</div>
          <div className='footer-icons'>
            <a href='/'><ImYoutube /></a>
            <a href='/'><RiWhatsappFill /></a>
            <a href='/'><RiInstagramLine /></a>
            <a href='/'><RiTwitterFill /></a>
            <a href='/'><RiLinkedinBoxFill /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer