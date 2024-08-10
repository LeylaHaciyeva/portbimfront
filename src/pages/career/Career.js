import React from 'react'
import './Career.css'
import PageHeader from '../../components/header/pageheader/PageHeader.js'
import CareerCard from '../../components/careercard/CareerCard.js'
import Footer from '../../components/footer/Footer.js'
const Career = () => {
    return (
        <div>
            <PageHeader />
            <div className='container mt-5 pt-5  career-header'>
                <div className='row pt-5 pb-5'>
                    <div className='col-lg-6'>
                        <h3>Vakansiya</h3>
                    </div>
                    <div className='col-lg-6'>
                        <p>Karyera Səyahətinizə Bizimlə Başlayın</p>
                    </div>
                </div>
            </div>
            <CareerCard />
            <CareerCard />
            <CareerCard />
            <CareerCard />
            <Footer />
        </div>
    )
}

export default Career