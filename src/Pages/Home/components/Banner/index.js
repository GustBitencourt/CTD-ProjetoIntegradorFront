import React from 'react'
import './banner.scss'
import { Link } from 'react-router-dom'
import { Button, Container, Col } from 'react-bootstrap'
import bannerImg from '../../../../images/ban2.jpg'

const Banner = () => {
    return (
        <section>
            <Container className="banner d-flex h-100 my-2" sm={{span:10, offset: 1}}>
            
                    <Col md={{span: 4}}>
                        <p>Olá! <br />
                        Bem vindo a <span className="info-name">House Digital</span>.<br />
                        Os melhores cursos de Tecnologia! <br />
                        Da maior comunidade dentro da maior comunidade de Programação Do Brasil!</p>
                        <Button variant="primary" as={Link} to={"/cursos"} className="button">
                            Acessar Cursos
                        </Button>
                    </Col>
                    <Col sm={{span: 5, offset: 1}}>
                        <img src={bannerImg} className="picture" alt="Banner do site"/>
                    </Col>
            </Container>
        </section>
    )
}

export default Banner
