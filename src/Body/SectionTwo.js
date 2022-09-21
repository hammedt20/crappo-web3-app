import React, { useEffect } from 'react'
import {RiBarChartFill, RiSailboatFill, RiUser3Fill} from 'react-icons/ri'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  }, [])

  return (
    <div className='sectionTwo'>
      <div className='container st-container'>
        <div className='st-content' data-aos='fade-up' data-aos-offset='120'>
          <div className='st-icon'>
            <RiBarChartFill />
          </div>
          <div className='st-details'>
            <h1>$30B</h1>
            <p>Digital Currency Exchange</p>
          </div>
        </div>
        <div className='st-content' data-aos='fade-up' data-aos-offset='130'>
          <div className='st-icon'>
            <RiSailboatFill />
          </div>
          <div className='st-details'>
            <h1>190+</h1>
            <p>Countries Around The World</p>
          </div>
        </div>
        <div className='st-content' data-aos='fade-up' data-aos-offset='150'>
          <div className='st-icon'>
            <RiUser3Fill />
          </div>
          <div className='st-details'>
            <h1>$10M</h1>
            <p>Trusted Wallet Investors</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionTwo