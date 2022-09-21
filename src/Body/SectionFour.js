import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionFour = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  }, [])

  return (
    <div className='how'>
      <div className='container how-container'>
        <div className='how-head'>
          <h1 data-aos='fade-up' data-aos-offset='220'>How much can you earn with us</h1>
          <p data-aos='fade-up' data-aos-offset='230'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, id similique temporibus dignissimos tempore odio?</p>
        </div>
        <div className='how-card' data-aos='zoom-in' data-aos-offset='240'>
          <form>
            <input type='text' placeholder='Enter your hash rate' />
            <select className="select">
              <option value="">TH/s</option>
              <option value="">H/s</option>
              <option value="">KH/s</option>
              <option value="">MH/s</option>
              <option value="">GH/s</option>
            </select>
            <button>Calculate</button>
          </form>
          <div className='how-card-details'>
            <h2>estimated 24 hour revenue</h2>
            <h1>0.055 130 59 ETH <span>($1275)</span></h1>
            <p>Revenue will change based on mining difficulty and Ethereum price.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFour