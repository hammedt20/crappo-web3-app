import React, { useEffect } from 'react'
import { AiFillCaretRight } from 'react-icons/ai'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionOne = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  }, [])

  return (
    <section className='hero'>
      <div className='container hero-container'>
        <div className='hero-text'>
          <div className='hero-btns'>
            <button data-aos='zoom-in' data-aos-offset='50'>70% Save</button>
            <p>for the best black friday deals</p>
          </div>
          <h1 data-aos='fade-up' data-aos-offset='80'>
            Fastest & secure platform to invest in crypto
          </h1>
          <p data-aos='fade-up' data-aos-offset='100'>buy and sell cryptocurrencies by trusted 10m wallets, in over 100m transactions</p>
          <button data-aos='zoom-in' data-aos-offset='100'>Try for free <span data-aos='fade-right' data-aos-offset='100'><AiFillCaretRight /></span></button>
        </div>
        <div className='hero-img' data-aos='zoom-in' data-aos-offset='100'>
          <img src='./image/hero-img.png' alt='' />
        </div>
      </div>
    </section>
  )
}

export default SectionOne

