import { Carousel, Card, Button, CardGroup } from 'react-bootstrap';
import './style.scss';

import Ex1 from '../../images/ex1.jpg'
import Ex2 from '../../images/ex2.jpg'
import Ex3 from '../../images/ex3.jpg'


const Carrossel = () => {

  


    return (
      <>
        <Carousel className="d-flex w-100">

            <Carousel.Item interval={1500}>
            <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex1} />
                        <Card.Body>
                           
                            
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex2} />
                        <Card.Body>
                          
                           
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex3}/>
                        <Card.Body>
                           
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
            <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex1} />
                        <Card.Body>
                           
                            
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex2} />
                        <Card.Body>
                          
                           
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex3}/>
                        <Card.Body>
                           
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
            <CardGroup>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex1} />
                        <Card.Body>
                           
                            
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex2} />
                        <Card.Body>
                          
                           
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Ex3}/>
                        <Card.Body>
                           
                            <Button variant="primary">Comprar</Button>
                        </Card.Body>
                    </Card>
                </CardGroup>
            </Carousel.Item>                  
        </Carousel>

        
      </>
    )
}

export default Carrossel;

