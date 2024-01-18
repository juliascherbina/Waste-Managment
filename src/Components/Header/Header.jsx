import React from "react";
import '../../App.css'
import waste2 from '../../images/trash.png'






export const Header=()=>{
    return <>
      <header className='header'>
        <div className='container'>
          <nav className='header-nav'>
              <img className='logo' src={waste2}></img>
              <ul className='menu'>
                <li className='menu-item'>
                  <a className='menu-link'>About us</a>
                </li>
                <li className='menu-item'>
                  <a className='menu-link'>Services</a>
                </li>
                <li className='menu-item'>
                  <a className='menu-link'>Projects</a>
                </li>
                <li className='menu-item'>
                  <a className='menu-link'>Reviews</a>
                </li>
                <li className='menu-item'>
                  <a className='menu-link'>Contacts</a>
                </li>
              </ul>
            
          </nav>
        </div>
      </header>
    </>
}