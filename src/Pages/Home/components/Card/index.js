import { Card, CardGroup, Container } from 'react-bootstrap';
import './style.scss';
import Swal from 'sweetalert2';
import api from '../../../../services/index';
import { useEffect, useState } from 'react';


const Caard = () => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        async function loadCard() {
            try {
                const response = await api.get(`/produtos`);
                console.log(response.data);
                setCard(response.data);
            } catch (error) {
                Swal.fire({
                    title: error.response.status,
                    icon: 'error',
                    text: error.response.data.message
                })
            }
        }
        loadCard();
    }, [])

    return (
        <>

            <Container  className="wrapper">
                {card.map((cards, index) => {
                        if (index < 3) {
                            return (
                                <CardGroup>
                                    <Card style={{ width: '18rem' }} key={cards.id}>
                                        <Card.Img variant="top" src={cards.imagem} />
                                        <Card.Body>
                                            <Card.Title>{cards.titulo}</Card.Title>
                                            <Card.Text>
                                                {cards.descricao}
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

export default Caard;
