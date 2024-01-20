import React, { useState } from "react";
import '../../App.css'
import { Modal } from "./Modal";




export const Services = () => {
    const [modal, setModal] = useState(false)
    function readMore() {
        setModal(true)
    }

    return <>
        <div className='services' id="services">
            <h2 className='services-title'>Our Services</h2>
            <ul className='services-list'>
                <li className='service-item ecology'>
                    <h3 className='service-name'>ecology</h3>
                    <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                    <a className='service-more' onClick={() => readMore()}>Read more</a>
                    {modal ? <Modal/>
                        : ''}

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
    </>
}