import { Card, Button, CardGroup } from 'react-bootstrap';
import './style.scss';

import Ex1 from '../../images/ex1.jpg'
import Ex2 from '../../images/ex2.jpg'
import Ex3 from '../../images/ex3.jpg'


const Caard = () => {




    return (
        <>
            <div className="container">
                <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex1} />
                        <Card.Body>
                            <Card.Title>Front-End</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex2} />
                        <Card.Body>
                            <Card.Title>Ux/Ui</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex3}/>
                        <Card.Body>
                            <Card.Title>Back-end</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </div>
        </>
    )
}

export default Caard;
