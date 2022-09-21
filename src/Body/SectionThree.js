import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionThree = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  }, [])

  return (
    <div className='why'>
      <div className='container why-container'>
        <div className='why-img' data-aos='zoom-in' data-aos-offset='200'>
          <img src='./image/why-img.png' alt='' />
        </div>
        <div className='why-details' data-aos='fade-up' data-aos-offset='180'>
          <h1>Why you should choose CHAPPO</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, laboriosam? Lorem ipsum dolor sit amet consectetur adipisicing elit. In, praesentium.</p>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  )
}

export default SectionThree