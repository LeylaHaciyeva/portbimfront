import React from 'react'
import './Contact.css'
import PageHeader from '../../components/header/pageheader/PageHeader'
import Footer from '../../components/footer/Footer'
const Contact = () => {
    return (
        <div>
            <PageHeader />
            <div className='contact-image'>
                <div></div>
                <p>Contact</p>
            </div>
            <div className='contact'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6'>
                            <h2>Contact</h2>
                            <p className='adress'>
                                Selskokhozyaistvennaya street 17/2, Moscow
                            </p>
                            <p className='number'>+7 495 973-08-16</p>
                            <p className='mail'>portbim2121@.com
                                <span className='line'></span>
                            </p>
                            <p className='working-hours'>Monday–friday from 09:00 to 18:00</p>
                        </div>
                        <div className='col-lg-6'>
                        </div>
                    </div>
                </div>
            </div>
            <div className='map'>
                <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17184.858350154645!2d49.87861495316862!3d40.4114544126472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d52be6c8699%3A0x6505ee210ccd92c0!2zNTVhIMaPbGl5YXIgxo9saXlldiwgQmFrxLE!5e0!3m2!1saz!2saz!4v1722507437752!5m2!1saz!2saz" 
                width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <Footer/>
        </div>
    )
}

export default Contact