import React from "react";
import photo from '../../images/woman.png'
import right from '../../images/icon-right.svg'
import left from '../../images/icon-left.svg'



export const Feedback=()=>{
    return <>
     <section className='feedback' id="feedback">
        <div className='container'>
          <h1 className='feedback-header'>customer feedback</h1>
          <div className='feedback-items'>
            <div className='feedback-item'>
              <img src={photo} className='feedback-img'></img>
              <h3 className='feedback-name'>July Frojenko</h3>
              <span className='feedback-span'>Sale manager</span>
              <p className='feedback-text'>Команда фахівців виявилася професійною та креативною,
                їхній підхід був індивідуальним та спрямованим на досягнення наших бізнес-цілей.</p>
            </div>
            <div className='feedback-item'>
              <img src={photo} className='feedback-img'></img>
              <h3 className='feedback-name'>July Frojenko</h3>
              <span className='feedback-span'>Sale manager</span>
              <p className='feedback-text'>Команда фахівців виявилася професійною та креативною,
                їхній підхід був індивідуальним та спрямованим на досягнення наших бізнес-цілей.</p>            </div>
            <div className='feedback-item'>
              <img src={photo} className='feedback-img'></img>
              <h3 className='feedback-name'>July Frojenko</h3>
              <span className='feedback-span'>Sale manager</span>
              <p className='feedback-text'>Команда фахівців виявилася професійною та креативною,
                їхній підхід був індивідуальним та спрямованим на досягнення наших бізнес-цілей.</p>            </div>
            <div className='feedback-item'>
              <img src={photo} className='feedback-img'></img>
              <h3 className='feedback-name'>July Frojenko</h3>
              <span className='feedback-span'>Sale manager</span>
              <p className='feedback-text'>Команда фахівців виявилася професійною та креативною,
                їхній підхід був індивідуальним та спрямованим на досягнення наших бізнес-цілей.</p>            </div>
            <button className='left-arrow'><img src={left}></img></button>
            <button className='right-arrow'><img src={right}></img></button>
            <button className='point-btn'></button>
          </div>
        </div>
      </section>
    </>
}