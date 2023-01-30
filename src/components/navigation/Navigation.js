import React from 'react'
import logo from '../../images/logo.svg'
import { navLinks } from '../../data/navigation'
const Navigation = () => {
  return (
    <header className='navigation'>
      <div className='navigation__logo'>
        <img src={logo} />
      </div>
      <nav>
        <ul className='navigation__list'>
          {navLinks.map((link, i) => {
            return (
              <li key={`link-${i}`}><a href={link.link}>{link.value}</a></li>
            )
          })}

        </ul>
      </nav>
    </header>
  )
}

export default Navigation