import React from 'react'
import './banner.scss'
import { Button, Container } from 'react-bootstrap'
import bannerImg from '../../../../images/bannerImg.jpg'
function Banner() {
    return (
        <Container className="banner">
            
            <Container className='banner-top'>
                <Container className="banner-info">
                    <p> Olá, <br/>
                    Bem vindo a <span className="info-name">House Digital</span>. <br/>
                    Os melhores cursos de Tecnologia! 
                    Da maior comunidade dentro da maior comunidade de Programação Do Brasil!</p>
                    <Button variant="primary" className="button">Acessar os cursos</Button>
                </Container>

                <Container className="banner-photo">
                    <img src={bannerImg} className="picture" alt="Banner do site"/>
                </Container>
            </Container>
        </Container>
    )
}

export default Banner
