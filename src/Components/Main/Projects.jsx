import React, { useState } from "react";
import agency from '../../images/agency.jpg'
import agency2 from '../../images/agency2.jpg'
import agency3 from '../../images/agency3.jpg'
import agency4 from '../../images/agency4.jpg'
import agency5 from '../../images/agency5.jpg'
import agency6 from '../../images/agency6.jpg'






export const Projects = () => {


  const [works, useworks] = useState([
    {
      img: agency,
      title: 'Words and Ideas for World Earth Day',
      text: 'Conserve natural resources: Recycling reduces the need to extract resources such as timber, water, and minerals for new products.',
      type: 'OurBrand'
    },
    {
      img: agency2,
      title: 'Words and Ideas for World Earth Day',
      text: 'Conserve natural resources: Recycling reduces the need to extract resources such as timber, water, and minerals for new products.',
      type: 'OurApp'
    },
    {
      img: agency3,
      title: 'Words and Ideas for World Earth Day',
      text: 'Conserve natural resources: Recycling reduces the need to extract resources such as timber, water, and minerals for new products.',
      type: 'OurApp'

    },
    {
      img: agency4,
      title: 'Words and Ideas for World Earth Day',
      text: 'Conserve natural resources: Recycling reduces the need to extract resources such as timber, water, and minerals for new products.',
      type: 'OurBrand'
    },
    {
      img: agency5,
      title: 'Words and Ideas for World Earth Day',
      text: 'Conserve natural resources: Recycling reduces the need to extract resources such as timber, water, and minerals for new products.',
      type: 'OurBrand'
    },
    {
      img: agency6,
      title: 'Words and Ideas for World Earth Day',
      text: 'Conserve natural resources: Recycling reduces the need to extract resources such as timber, water, and minerals for new products.',
      type: 'OurApp'
    },
  ])
  const [workType, setWorkType] = useState('')
  const [showMore, setShowMore] = useState(false)
  function toggleShowMore() {
    setShowMore(!showMore)
  }
  return <>
    <section className='projects' id="projects">
      <div className='container'>
        <h1 className='projects-header'>Our Projects</h1>
        <div className='projects-list'>
          <ul className='projects-items'>
            <li className='projects-item'>
              <a onClick={() => { setWorkType('') }}>All works</a>
            </li>
            <li className='projects-item'>
              <a onClick={() => { setWorkType('OurBrand') }}>Our brends</a>
            </li>
            <li className='projects-item'>
              <a onClick={() => { setWorkType('OurApp') }}>Our Apps</a>
            </li>
          </ul>
        </div>
        <div className='works-list' >
          <ul className='work-list-items'>


            {works
              .filter((work) => workType == work.type || workType == '')
              .slice(0, showMore ? 100 : 3)
              .map((work) => {
                return <li className='work-list-item' id="apps">
                  <img src={work.img} className='work-img'></img>
                  <h3 className='work-heder'>{work.title}</h3>
                  <p className='work-title'>{work.text}</p>
                </li>
              })}
          </ul>
        </div>
        <button className='work-btn' onClick={() => toggleShowMore(true)}> Show more...</button>
      </div>
    </section>
  </>
}