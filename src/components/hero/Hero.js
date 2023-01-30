import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <section className='hero'>
        {/* Hero Left */}
        <HeroLeft />
        {/* Hero Right */}
        <HeroRight />
    </section>
  )
}

export default Hero