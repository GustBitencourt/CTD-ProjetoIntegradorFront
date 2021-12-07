import { Card, Button, CardGroup } from 'react-bootstrap';
import './style.scss';
import Swal from 'sweetalert2';
import api from '../../../../services/index';
import { useEffect, useState } from 'react';

/* import Ex1 from '../../../../images/ex1.jpg'; */
/* import Ex2 from '../../../../images/ex2.jpg';
import Ex3 from '../../../../images/ex3.jpg'; */


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

            <div className="container">
                {card.map((c, index) => {
                        if (index < 3) {
                            return (
                                <CardGroup>
                                    <Card style={{ width: '18rem' }} key={c.id}>
                                        <Card.Img variant="top" src={c.imagem} />
                                        <Card.Body>
                                            <Card.Title>{c.titulo}</Card.Title>
                                            <Card.Text>
                                                {c.descricao}
                                            </Card.Text>
                                            <Button variant="primary">Comprar</Button>
                                        </Card.Body>
                                    </Card>

                                </CardGroup>
                            )
                        }
                        return <></>    
                })}
            </div>
        </>
    )
}

export default Caard;
