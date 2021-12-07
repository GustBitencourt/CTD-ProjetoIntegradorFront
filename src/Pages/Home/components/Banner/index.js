import React from 'react'
import './banner.scss'
import {Button, Container} from 'react-bootstrap'
import bannerImg from '../../../../images/bannerImg.jpg'
function Banner() {
    return (
        <Container className="banner">
            
            <div className='banner-top'>
                <div className="banner-info">
                    <p> Olá, <br/>
                    Bem vindo a <span className="info-name">House Digital</span>. <br/>
                    Os melhores cursos de Tecnologia! 
                    Da maior comunidade dentro da maior comunidade de Programação Do Brasil!</p>
                    <Button variant="primary" className="button">Acessar os cursos</Button>
                </div>

                <div className="banner-photo">
                    <img src={bannerImg} className="picture" alt="Banner do site"/>
                </div>
            </div>
        </Container>
    )
}

export default Banner
