import React from 'react'
import './CareerDetail.css'
import PageHeader from '../../components/header/pageheader/PageHeader'
import Footer from '../../components/footer/Footer'
const CareerDetail = () => {
    return (
        <>
            <PageHeader />
            <div className='container pt-5 mt-5'>
                <div className='row mt-5'>
                    <div className='col-lg-12'>
                        <h1>MEMAR-DİZAYNER</h1>
                        <p>Vəzifə : Memar-Dizayner</p>
                        <p>İş Növü : Tam İş vaxtı</p>
                        <p>İş Yeri : Bakı, Azərbaycan</p>
                        <p>Departament : Memarlıq-Dizayn</p>
                    </div>
                </div>
                <div className='row'>
                    <h4>
                        İş Təsviri & Məsuliyyətlər :
                    </h4>
                    <p>Memarlıq layihələrinin konsepsiyası və dizaynının hazırlanması<br></br>
                        Dizayn ideyalarını və konsepsiyalarını müştərilərə və komanda üzvlərinə effektiv şəkildə çatdırmaq üçün yüksək keyfiyyətli render və vizualizasiyaların hazırlanması<br></br>
                        Tikinti layihələrinin detallarını, spesifikasiyalarını və tələblərini müəyyənləşdirmək.<br></br>
                        Tikinti prosesinin nəzarət edilməsi və layihələrin keyfiyyətini, büdcəsini və icra cədvəlinin qorunması<br></br>
                        Müştərilər, mühəndislər, inşaatçılar və digər iş ortaqları ilə ünsiyyət qurulması və əməkdaşlıq edilməsi.</p>
                </div>
                <div className='row'>
                    <div className='col-lg-12'>
                        <h4>
                            Bacarıqlar & Kvalifikasiyalar :
                        </h4>
                        <p>
                            Memarlıq və dizayn sahəsi üzrə ən az 2 illik təcrübə.<br></br>
                            AutoCAD, SketchUp, Revit kimi dizayn proqramı və 3ds Max kimi vizualizasiya proqramı biliklərinə sahib olmaq.
                            <br></br>      Əla ünsiyyət və hesablama iş bacarıqları.<br></br>
                            Ali təhsil-Memarlıq və ya Dizayn<br></br>
                            Azərbaycan dili- Səlis, Rus dili və İngilis dili arzuolunandır.
                        </p>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default CareerDetail
