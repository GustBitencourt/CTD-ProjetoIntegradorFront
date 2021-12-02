import { Carousel, Row, Container, Col  } from 'react-bootstrap';
import './style.scss';

import Ex1 from '../../images/ex1.jpg'
import Ex2 from '../../images/ex2.jpg'
import Ex3 from '../../images/ex3.jpg'


const Carrossel = () => {

  


    return (
      <>
        <Carousel className="d-flex w-25">

            <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src={Ex3}
                  alt="Second slide"
                  />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src={Ex2}
                  alt="Third slide"
                  />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src={Ex1}
                  alt="Second slide"
                  />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>                  
        </Carousel>

        <Carousel className="d-flex w-25">

            <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src={Ex3}
                  alt="Second slide"
                  />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src={Ex2}
                  alt="Third slide"
                  />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src={Ex1}
                  alt="Second slide"
                  />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>                  
        </Carousel>

        <Carousel className="d-flex w-25">
            <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src={Ex3}
                  alt="Second slide"
                  />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src={Ex2}
                  alt="Third slide"
                  />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={1500}>
                <img
                  className="d-block w-100"
                  src={Ex1}
                  alt="Second slide"
                  />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>                  
        </Carousel>
      </>
    )
}

export default Carrossel;

