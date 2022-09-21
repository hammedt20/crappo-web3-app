import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionSix = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  }, [])

  return (
    <div className='market'>
      <div className='container market-container'>
        <h1 data-aos='zoom-in' data-aos-offset='280'>Market Sentiments, Portfolio, and Run the infrastructure of your choice</h1>
        <div className='market-features'>
          <div className='market-features-container'>
            <div className='market-features-details'>
              <h2 data-aos='fade-in' data-aos-offset='280'>Invest Smart</h2>
              <p data-aos='fade-in' data-aos-offset='286'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.</p>
              <button data-aos='zoom-in' data-aos-offset='290'>Learn More</button>
            </div>
            <div className='market-features-image' data-aos='zoom-in' data-aos-offset='300'>
              <img src='./image/feature-1-img.png' alt='' />
            </div>
          </div>
        </div>
        <div className='market-features'>
          <div className='market-features-container-2'>
            <div className='market-features-details'>
              <h2 data-aos='fade-in' data-aos-offset='305'>detailed statistics</h2>
              <p data-aos='fade-in' data-aos-offset='310'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur rem ducimus vitae maiores dolorum alias.</p>
              <button data-aos='zoom-in' data-aos-offset='310'>Learn More</button>
            </div>
            <div className='market-features-image'>
              <img src='./image/feature-2-img.png' alt='' data-aos='zoom-in' data-aos-offset='320' />
            </div>
          </div>
        </div>
        <div className='market-features'>
          <div className='market-features-container-3'>
            <div className='market-features-details'>
              <h2 data-aos='fade-in' data-aos-offset='316'>Grow your profit and track your investments</h2>
              <p data-aos='fade-in' data-aos-offset='318'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim odit distinctio dolore id incidunt?</p>
              <button data-aos='zoom-in' data-aos-offset='320'>Learn More</button>
            </div>
            <div className='market-features-image'>
              <img src='./image/feature-3-img.png' alt='' data-aos='zoom-in' data-aos-offset='325' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSix