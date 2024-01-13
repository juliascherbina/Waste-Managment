import React from "react";
import '../../App.css'
import recycle from '../../images/recycle.png'





export const Main = () => {
    return <>
        <main className='main'>
            <div className='container'>
                <h1 className='title'> waste and recycling</h1>
                <p className='title-notes'>Веб-сайти, мобільні застосунки, UX / UI дизайн, логотипи та брендінг, SMM.</p>
                <a className='title-img' href=''></a>
            </div>
            <div className='container'>
                <div className='about'>
                    <h2 className='about-title'>About Us:</h2>
                    <p>Наша IT-агенція - це команда професіоналів, які працюють в галузі веб-розробки, брендування, дизайну та маркетингу.
                        Ми маємо досвід роботи з різними компаніями та бізнесами, надаючи їм інноваційні технології та креативні рішення для досягнення їх цілей. Наша мета
                        - створення унікального та привабливого веб-продукту для наших клієнтів, який буде відображати їхні бренди та перевершувати їх очікування.
                    </p>
                </div>
                <div className='services'>
                    <h2 className='services-title'>Our Services</h2>
                    <ul className='services-list'>
                        <li className='service-item ecology'>
                            <h3 className='service-name'>ecology</h3>
                            <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                            <a className='service-more' href=''>Read more</a>
                        </li>

                        <li className='service-item environment'>
                            <h3 className='service-name'>environment</h3>
                            <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                            <a className='service-more' href=''>Read more</a>
                        </li>

                        <li className='service-item plastic-bag '>
                            <h3 className='service-name'>plastic-bag</h3>
                            <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                            <a className='service-more' href=''>Read more</a>
                        </li>

                        <li className='service-item recycle1'>
                            <h3 className='service-name'>recycle1</h3>
                            <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                            <a className='service-more' href=''>Read more</a>
                        </li>

                        <li className='service-item recycle2'>
                            <h3 className='service-name'>recycle2</h3>
                            <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                            <a className='service-more' href=''>Read more</a>
                        </li>

                        <li className='service-item trash'>
                            <h3 className='service-name'>trash</h3>
                            <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                            <a className='service-more' href=''>Read more</a>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    </>
}