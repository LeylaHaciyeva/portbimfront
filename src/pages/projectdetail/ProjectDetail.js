import React from 'react'
import './ProjectDetail.css'
import detailImage from '../../images/details.jpg'
import PageHeader from '../../components/header/pageheader/PageHeader'
import DetailSlider from '../../components/detailslider/DetailSlider'
import Footer from '../../components/footer/Footer'
const ProjectDetail = () => {
    return (
        <>
            <PageHeader />
            <div className='project-header'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6'>
                            <div className='project-header-text d-flex'>
                                <span className='p-0 m-0'>
                                    PROJECTS /
                                </span>
                                <span className='project-name'>
                                    SEA BREEZE – LIGHT HOUSE 4
                                </span>
                            </div>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end'>

                        </div>
                    </div>
                </div>
            </div>
            <div className='project-details'>
                <div className='detail-image'>
                    <img src={detailImage} title='' srcSet='' />
                    <p> SEA BREEZE – LIGHT HOUSE 4</p>
                    <div className='overlay'></div>
                </div>
                <div className='project-detail-text'>
                    <p>
                        The Edge is a luxury residential development, located on the Rambla Tomas Berreta in Montevideo’s Carrasco neighbourhood, which runs along the coast up to the eastern limits of Montevideo. Stretching across 60-metres of picturesque coastline, the project consists of eight residential units that wrap around a circular glass-walled courtyard, each with spectacular views of the water.

                        Connections with nature are established from the moment of arrival. Residents and visitors enter a light-filled lobby that opens onto the courtyard and shared garden beyond. The building’s split core allows for a natural separation to the apartment entrances, which are located on either side of the leafy central space with private access to the floors above.

                        The building features eight residential units in total, including two duplex apartments on the east and west edges. Breath-taking private rooftop gardens crown the top and every apartment is cross-ventilated and dual aspect, with views towards the beach and the lush gardens to the south. Located at the heart of the building, the glass-walled courtyard intersects with the central apartments, bringing natural light and greenery directly into their living spaces. The courtyard’s walls are made from textured cast glass that filters natural light into the living spaces, while maintaining privacy for residents.

                        A basement level provides a pool, sauna and gym, with steps up to the courtyard and shared garden.

                        White concrete is expressed on the building’s façade, reflecting the pale tones of Carrasco’s sandy beachfront. Terraces emphasise the low-rise building’s horizontality and provide private spaces to take in the views.

                        This unique project is being developed by Betalba Capital with Ponce de Leon Architects as the co-architects.
                    </p>
                </div>
                <DetailSlider/>
                <Footer/>
            </div>
        </>
    )
}

export default ProjectDetail