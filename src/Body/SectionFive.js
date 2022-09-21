import React, { useEffect, useState } from 'react'
import { BsChevronRight} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css';

const SectionFive = () => {
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  }, [])

  const [hover, setHover] = useState([
    {
      id: 1,
      state: false
    },
    {
      id: 2,
      state: false
    },
    {
      id: 3,
      state: false
    }
  ])

  function handlehover(id){
    setHover(prevState => {
      const hoverEffect = prevState.map(effect => {
        if(effect.id === id){
          return ({
            id: effect.id,
            state: !effect.state
          })
        }else { 
          return effect
        }
      })
      return hoverEffect
    })
  }

  return (
    <div className='trade'>
      <div className='container trade-container'>
        <div className='trade-head'>
          <h2 data-aos='zoom-in' data-aos-offset='260'>trade securely and market the high growth cryptocurrencies.</h2>
        </div>
        <div className='trade-cards'>
          <div className='trade-card' onMouseOver={() => handlehover(1)} onMouseOut={() => handlehover(1)}>
            <div className='trade-img'>
              <img src='./image/bitcon.png' alt='' />
            </div>
            <div className='trade-card-title'>
              <h2>Bitcoin</h2>
              <p>BTC</p>
            </div>
            <p>Digital currency in which a record of transactions is maintained.</p>
            <div className='trade-card-button'>
              <button>{hover[0].state ? 'Start Mining' : ''} <BsChevronRight className='trade-card-span' /></button>
            </div>
          </div>
          <div className='trade-card' onMouseOver={() => handlehover(2)} onMouseOut={() => handlehover(2)}>
            <div className='trade-img'>
              <img src='./image/ethereum.png' alt='' />
            </div>
            <div className='trade-card-title'>
              <h2>Ethereum</h2>
              <p>ETH</p>
            </div>
            <p>Blockchain technology to create and run decentralized digital applications.</p>
            <div className='trade-card-button'>
              <button>{hover[1].state ? 'Start Mining' : ''} <BsChevronRight className='trade-card-span' /></button>
            </div>
          </div>
          <div className='trade-card' onMouseOver={() => handlehover(3)} onMouseOut={() => handlehover(3)}>
            <div className='trade-img'>
              <img src='./image/litecoin.png' alt='' />
            </div>
            <div className='trade-card-title'>
              <h2>Litecoin</h2>
              <p>LTC</p>
            </div>
            <p>Cryptocurrency that enables instant payments to anyone in the world.</p>
            <div className='trade-card-button'>
              <button>{hover[2].state ? 'Start Mining' : ''} <BsChevronRight className='trade-card-span' /></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SectionFive