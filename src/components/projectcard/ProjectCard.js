import React from 'react'
import './ProjectCard.css'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import cardImage from '../../images/card.jpg'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
const ProjectCard = () => {
    return (
        <Card className='col-lg-4 col-md-6 col-sm-12 col-12 b-none project-card' >
            <Link to='/detail'>
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                    <Card.Title>HOTEL</Card.Title>
                    <Card.Text>
                        SEA BREEZE – LIGHT HOUSE 4
                        <Card.Link className='gotoproject'>
                            <GoArrowRight color='#1a1a1a' />
                        </Card.Link>
                    </Card.Text>
                    <Card.Text>
                        Azerbaijan, Baku
                    </Card.Text>

                </Card.Body>
            </Link>

        </Card>
    )
}

export default ProjectCard