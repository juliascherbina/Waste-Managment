import React from "react";
import '../../App.css'
import recycle from '../../images/recycle.png'
import { About } from "./About";
import { Services } from "./Services";
import { Projects } from "./Projects";





export const Main = () => {
    return <>
        <main className='main'>
            <div className='container'>
                <h1 className='title'> waste and recycling</h1>
                <p className='title-notes'>Веб-сайти, мобільні застосунки, UX / UI дизайн, логотипи та брендінг, SMM.</p>
                <a className='title-img' href='#header'></a>
            </div>
            <div className='container'>
               <About />
               <Services/>
               <Projects/>
            </div>
        </main>
    </>
}