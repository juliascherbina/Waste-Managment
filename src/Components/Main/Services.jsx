import React, { useEffect, useRef, useState } from "react";
import '../../App.css'
import { Modal } from "./Modal";




export const Services = () => {
    const [modal, setModal] = useState([false, false, false, false, false, false])
    function readMore(i) {
        setModal(modal.map((el, index) => {
            if (index == i) {
                return true
            }
            else return false
        }));

    }
    function closeModal(i) {
        setModal(modal.map((el, index) => {
            return false
        }));
    }




    return <>
        <div className='services' id="services">
            <h2 className='services-title'>Our Services</h2>
            <ul className='services-list'>
                <li className='service-item ecology'>
                    <h3 className='service-name'>‍Feed-scrolling</h3>
                    <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                    <a className='service-more' onClick={() => readMore(0)}>Read more</a>
                    {modal[0] ? <Modal close={() => closeModal(0)} text={'While a lot has been said about heat emissions, carbon footprints, and environmental pollution from smartphone production itself, the daily usage of smartphones also plays a key role in climate change.172 g of CO2 emissions are produced from only one hour of smartphone usage per day. In a year, it exceeds the emissions of a flight from London to Paris. However, according to recent research, people use their smartphones (particularly for social media) twice as much: 2 hours and 24 minutes.'}
                    /> : ''}
                </li>

                <li className='service-item environment'>
                    <h3 className='service-name'>Digital Cleanup Day</h3>
                    <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                    <a className='service-more' onClick={() => readMore(1)}>Read more</a>
                    {modal[1] ? <Modal close={() => closeModal(1)}
                        text={'In the digital world, just as in our natural environment, there’s a huge amount of trash. Unnecessary emails, files, apps, duplicates of photos and videos, etc., are all digital wasteThis digital trash creates digital pollution that continues to consume energy, even when we have forgotten it’s there. Each year the internet (and its supporting systems) produces 900 million tons of CO2, which is more than the annual output of the whole country of Germany!'}
                    /> : ''}
                </li>

                <li className='service-item plastic-bag '>
                    <h3 className='service-name'>plastic-bag</h3>
                    <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                    <a className='service-more' onClick={() => readMore(2)}>Read more</a>
                    {modal[2] ? <Modal close={() => closeModal(2)}
                        text={'In just two years, enough digital waste has been deleted from electronic devices to prevent the production of over 3,000 tons of CO2 a year.The most recent Digital Cleanup Day was in 2022, which saw 2.7 million GB deleted, thus preventing the production of at least 683 tons of CO2.'}
                         /> : ''}
                </li>

                <li className='service-item recycle1'>
                    <h3 className='service-name'>recycle1</h3>
                    <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                    <a className='service-more' onClick={() => readMore(3)}>Read more</a>
                    {modal[3] ? <Modal close={() => closeModal(3)}
                        text={'Tip: You dont have to wait until World Cleanup Day – start an individual cleanup habit by carrying gloves and an empty trash bag with you every day and pick up trash along your regular routes!'}
                         /> : ''}
                </li>

                <li className='service-item recycle2'>
                    <h3 className='service-name'>recycle2</h3>
                    <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                    <a className='service-more' onClick={() => readMore(4)}>Read more</a>
                    {modal[4] ? <Modal close={() => closeModal(4)}
                        text={'Let’s Do It World’s vision is for a waste-free world. To achieve this, we need to take multiple actions – not just cleaning up, but also preventing waste production, as well managing the waste effectively afterwards.'}
                         /> : ''}
                </li>

                <li className='service-item trash'>
                    <h3 className='service-name'>trash</h3>
                    <p className='service-text'>Унікальних логотипи для вашого бізнесу, які будуть відображати його стиль та цінності.</p>
                    <a className='service-more' onClick={() => readMore(5)}>Read more</a>
                    {modal[5] ? <Modal close={() => closeModal(5)}
                        text={'We share educational tools about composting and segregating waste, establishing continual communication via virtual community spaces which enable the sharing of experiences and ideas across the entire region.'}
                         /> : ''}
                </li>
            </ul>
        </div>
    </>
}