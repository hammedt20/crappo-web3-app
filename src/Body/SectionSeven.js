import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionSeven = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  }, [])

  return (
    <div className='mining'>
      <div className='container mining-container'>
        <div className='mining-card' data-aos='zoom-in' data-aos-offset='320'>
          <div className='mining-card-details'>
            <div className='mining-card-detail'>
              <h1>start mining now</h1>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste, ipsum. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad, saepe.</p>
            </div>
            <form className='mining-card-form'>
              <input type='text' placeholder='enter message' />
              <button>subscribe</button>
            </form>
          </div>
          <div className='mining-img'>
            <img src='./image/newsletter-box.png' alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionSeven