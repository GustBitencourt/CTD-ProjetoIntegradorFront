import { Card, Button } from 'react-bootstrap';
import './style.scss';




const Box = () => {




    return (
        <>
            <Card className="text-center">
                <Card.Header>Destaque</Card.Header>
                <Card.Body>
                    <Card.Title>Programador Full Stack 2022</Card.Title>
                    <Card.Text>
                        O Melhor Cursos de Programação do Brasil !
                        Da maior Cominidade de Programação Do Brasil !
                        Dentro Da maior Comunidade de Programação Do Brasil !
                    </Card.Text>
                    <Button variant="primary">Acessar Agora</Button>
                </Card.Body>
                <Card.Footer className="text-muted">01/01/2022</Card.Footer>
            </Card>
        </>
    )
}

export default Box;