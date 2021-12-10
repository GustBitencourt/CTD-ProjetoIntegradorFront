import { Card, CardGroup, Container } from 'react-bootstrap';
import './style.scss';

const Valores = () => {
    const valores = [
        { 
            valor: 'Liberdade',
            description: 'Estude de onde e quando quiser',
            img: 'https://images.unsplash.com/photo-1514395659518-2e1c59302e99?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        { 
            valor: 'Professores Capacitados',
            description: 'Professores capacitados para ajudar com dúvidas',
            img: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        },
        { 
            valor: 'Certificados',
            description: 'Todos os cursos possuem certificados',
            img: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=916&q=80'
        },
    ]

    return (
        <>

            <Container  className="wrapper mt-5">
                <Container> 
                    <h2>Oferecemos</h2>
                </Container>
                {valores.map((valor, index) => {
                        if (index < 3) {
                            return (
                                <CardGroup>
                                    <Card className="space-between mt-5" style={{ width: '18rem' }} key={valor.id}>
                                        <Card.Img variant="top" src={valor.img} />
                                        <Card.Body>
                                            <Card.Title>{valor.valor}</Card.Title>
                                            <Card.Text>
                                                {valor.description}
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>

                                </CardGroup>
                            )
                        }
                        return <></>    
                })}
            </Container>
        </>
    )
}

export default Valores;
