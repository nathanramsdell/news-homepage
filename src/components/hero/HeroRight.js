import React from 'react'
import { newPosts } from '../../data/posts'

const HeroRight = () => {

  return (
    <div className='hero__right'>
      <h3 className='header--medium'>New</h3>
      {newPosts.map((post, index) => {
        return (
          <div key={`post-${index}`} className="hero__right__item">
            <a href="#" className='hero__right__item__link header--small'>{post.title}</a>
            <p>{post.subTitle}</p>
          </div>
        )
      })}
    </div>
  )
}

export default HeroRight