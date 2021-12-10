import React from 'react'
import './banner.scss'
import { Link } from 'react-router-dom'
import { Button, Container, Col } from 'react-bootstrap'
import bannerImg from '../../../../images/ban2.jpg'

const Banner = () => {
    return (
        <section>
            <Container className="banner d-flex h-100 my-2 wrapper__banner" id sm={{span:10, offset: 1}}>
                <Col md={{span: 4}}>
                    <p>
                    Bem vindo ao <h1><span className="info-name">CTD-Educational</span></h1><br />
                    Os melhores cursos de Tecnologia! <br />
                    Liberdade para você estudar de onde estiver.</p>
                    <Button id="butto__banner" as={Link} to={"/curso"} className="button">
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
