import React, { useState } from "react";
import agency from '../../images/agency.jpg'
import agency2 from '../../images/agency2.jpg'
import agency3 from '../../images/agency3.jpg'
import agency4 from '../../images/agency4.jpg'
import agency5 from '../../images/agency5.jpg'
import agency6 from '../../images/agency6.jpg'






export const Projects = () => {

  const [filterProjects, setFilterProjects] = useState({
    item1: 'All works',
    item2: 'Our brends',
    item3: 'Our Apps'
  })
function projectFilter(id){
if(filterProjects.item1==true){
  
}
}
  return <>
    <section className='projects' id="projects">
      <div className='container'>
        <h1 className='projects-header'>Our Projects</h1>
        <div className='projects-list'>
          <ul className='projects-items'>
            <li className='projects-item'>
              <a onClick={()=>{}}>{filterProjects.item1}</a>
            </li>
            <li className='projects-item'>
              <a href=''>{filterProjects.item2}</a>
            </li>
            <li className='projects-item'>
              <a href=''>{filterProjects.item3}</a>
            </li>
          </ul>
        </div>
        <div className='works-list' >
          <ul className='work-list-items'>
            <li className='work-list-item' id="brands">
              <img src={agency} className='work-img'></img>
              <h3 className='work-heder'>Words and Ideas for World Earth Day</h3>
              <p className='work-title'>Conserve natural resources: Recycling reduces the need to extract resources such as timber, water, and minerals for new products.</p>
            </li>
            <li className='work-list-item' id="apps">
              <img src={agency2} className='work-img'></img>
              <h3 className='work-heder'>Recycling Basics and Benefits</h3>
              <p className='work-title'>Recycling is the process of collecting and processing materials that would otherwise be thrown away as trash and turning them into new products.</p>
            </li>
            <li className='work-list-item' id="apps">
              <img src={agency3} className='work-img'></img>
              <h3 className='work-heder'>Climate change</h3>
              <p className='work-title'>According to the most recent EPA data, the recycling and composting of municipal solid waste (MSW or trash) saved over 193 million metric tons of carbon dioxide equivalent in 2018. </p>
            </li>
            <li className='work-list-item' id="brands">
              <img src={agency4} className='work-img'></img>
              <h3 className='work-heder'>Energy savings</h3>
              <p className='work-title'>Recycling conserves energy. For example, recycling just 10 plastic bottles saves enough energy to power a laptop for more than 25 hours.</p>
            </li>
            <li className='work-list-item' id="brands">
              <img src={agency5} className='work-img'></img>
              <h3 className='work-heder'>Waste and pollution reduction</h3>
              <p className='work-title'>Recycling diverts waste away from landfills and incinerators, which reduces the harmful effects of pollution and emissions. </p>
            </li>
            <li className='work-list-item' id="apps">
              <img src={agency6} className='work-img'></img>
              <h3 className='work-heder'>Environment</h3>
              <p className='work-title'>Recycling provides many benefits to our environment</p>
            </li>
          </ul>
        </div>
        <button className='work-btn'> Show more...</button>
      </div>
    </section>
  </>
}