import React, { useState } from "react";
import '../../App.css'
import waste2 from '../../images/trash.png'






export const Header = () => {
  const [toggle, setToggle] = useState(false)
  function openMenu() {
    setToggle(!toggle)
  }

  return <>
    <header className='header' id="header">
      <div className='container'>
        <nav className='header-nav'>
          <img className='logo' src={waste2}></img>
          <button onClick={openMenu} className="burger">
            <span className="burger-span"></span>
          </button>
          <ul className={`${toggle ? 'menu-open' : 'menu'}`} >
            <li className='menu-item'>
              <a href="#about" className='menu-link'>About us</a>
            </li>
            <li className='menu-item'>
              <a href="#services" className='menu-link'>Services</a>
            </li>
            <li className='menu-item'>
              <a href="#projects" className='menu-link'>Projects</a>
            </li>
            <li className='menu-item'>
              <a href="#feedback" className='menu-link'>Reviews</a>
            </li>
            <li className='menu-item'>
              <a href="#connect" className='menu-link'>Contacts</a>
            </li>
          </ul>

        </nav>
      </div>
    </header>
  </>
}