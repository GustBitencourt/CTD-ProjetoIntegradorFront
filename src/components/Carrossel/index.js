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

              <Card.ImgOverlay>
                <Card.Title>
                  
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />Card title</Card.Title>
                <Card.Text>

                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.ImgOverlay>

            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Ex2} />
              <Card.ImgOverlay>
                <Card.Title>
                 
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />Card title</Card.Title>
                <Card.Text>

                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.ImgOverlay>
              
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Ex3} />
              <Card.ImgOverlay>
                <Card.Title>
                 
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />Card title</Card.Title>
                <Card.Text>

                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.ImgOverlay>
             
            </Card>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <CardGroup>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Ex1} />

              <Card.ImgOverlay>
                <Card.Title>
                  
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />Card title</Card.Title>
                <Card.Text>

                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.ImgOverlay>

            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Ex2} />
              <Card.ImgOverlay>
                <Card.Title>
                  
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />Card title</Card.Title>
                <Card.Text>

                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.ImgOverlay>
              
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Ex3} />
              <Card.ImgOverlay>
                <Card.Title>
                 
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />Card title</Card.Title>
                <Card.Text>

                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.ImgOverlay>
             
            </Card>
          </CardGroup>
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <CardGroup>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Ex1} />

              <Card.ImgOverlay>
                <Card.Title>
                  
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />Card title</Card.Title>
                <Card.Text>

                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.ImgOverlay>

            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Ex2} />
              <Card.ImgOverlay>
                <Card.Title>
                 
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />Card title</Card.Title>
                <Card.Text>

                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.ImgOverlay>
              
            </Card>

            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={Ex3} />
              <Card.ImgOverlay>
                <Card.Title>
                  
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />Card title</Card.Title>
                <Card.Text>

                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This content is a little bit longer.
                </Card.Text>
                <Button variant="primary">Comprar</Button>
              </Card.ImgOverlay>
             
            </Card>
          </CardGroup>
        </Carousel.Item>

        
      </Carousel>


    </>
  )
}

export default Carrossel;

