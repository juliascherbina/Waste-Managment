import React from "react";
import agency from '../../images/agency.jpg'





export const Projects=()=>{
    return<>
     <section className='projects'>
        <div className='container'>
          <h1 className='projects-header'>Our Projects</h1>
          <div className='projects-list'>
            <ul className='projects-items'>
              <li className='projects-item'>
                <a href=''>All works</a>
              </li>
              <li className='projects-item'>
                <a href=''>Our Brends</a>
              </li>
              <li className='projects-item'>
                <a href=''>Our Apps</a>
              </li>
            </ul>
          </div>
          <div className='works-list'>
            <ul className='work-list-items'>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Креативне агентство</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Соціальна мережа</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Планувальник справ</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Digital-агентство</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Цифровий маркетинг</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
              <li className='work-list-item'>
                <img src={agency} className='work-img'></img>
                <h3 className='work-heder'>Онлайн-бухгалтерія</h3>
                <p className='work-title'>Брендінг, веб-сайт, застосунок</p>
              </li>
            </ul>
          </div>
          <button className='work-btn'> Show more...</button>
        </div>
      </section>
    </>
}