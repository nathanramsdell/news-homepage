import React from 'react'
import { posts } from '../../data/posts'

const Posts = () => {
  return (
    <section className='posts'>
     {posts.map((post, index) => {
      return(
        <div className='posts__item' key={`post-${index}`}>
          <img src={`/images/${post.previewImgLink}`} alt='post preview image' className='posts__item__img' />
          <div className='posts__item__content'>
            <span className='posts__number'>0{index + 1}</span>
            <a href="#" className='posts__link'>{post.title}</a>
            <p>{post.subTitle}</p>
          </div>
        </div>
      )
     })}
    </section>
  )
}

export default Posts