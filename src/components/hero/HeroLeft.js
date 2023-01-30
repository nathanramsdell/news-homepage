import React from 'react'

const HeroLeft = () => {
  return (
    <div className='hero__left'>
      {/* Hero left image */}
      <div className='hero__left__top'>
        
      </div>
      <div className='hero__left__bottom'>
        <div className='hero__left__bottom__left'>
         <h1 className='header--large'>The Bright Furture of Web 3.0?</h1>
        </div>
        <div className='hero__left__bottom__right'>
          <p>We dive into the next evolution of the web that claims to put the power of the platforms back back into the hands of the people. But is it really fulfilling its promise?</p>
          <button className='hero__cta'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default HeroLeft