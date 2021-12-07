import { Card, Row, Col } from 'react-bootstrap';
import './style.scss';



const Card4 = () => {
    return (
        <>
            
                <Row xs={1} md={2} className="g-4">
                    {Array.from({ length: 4 }).map((_, idx) => (
                        <Col>
                            <Card >
                                <Card.Img variant="top"  />
                                <Card.Body>
                                    <Card.Title></Card.Title>
                                    <Card.Text>
                                        
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                    ))}
                </Row>
            
        </>
    )
}

export default Card4;