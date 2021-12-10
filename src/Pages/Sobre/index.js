import './style.scss';
import { Card, CardGroup, Button } from 'react-bootstrap';
import felipe from '../../images/felipe.jpg'



const Sobrenos = () => {

  return (
    <>
      <CardGroup>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/85718153?v=4" />
          <Card.Body>
            <Card.Title>Felipe Rodrigues De Melo</Card.Title>
            <Card.Text>
              Desenvolvedor:
            </Card.Text>
            <Card.Text>
               Front-End
            </Card.Text>
            <a href="https://portifolio-fyyq71vhd-felipe00007.vercel.app/">
            <Button variant="primary">Acessar Portfolio</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/79281317?v=4" />
          <Card.Body>
            <Card.Title>Gustavo Bitencourt</Card.Title>
            <Card.Text>
              Desenvolvedor:
            </Card.Text>
            <Card.Text>
                Front-End
            </Card.Text>
            <a href="https://github.com/GustBitencourt">
            <Button variant="primary">Acessar Portfolio</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4D03AQEOwmSo2Gnnuw/profile-displayphoto-shrink_800_800/0/1636930282386?e=1644451200&v=beta&t=OOsTsXX1hNnrDMoYGOuHNaUpK880hGIFVCu1O1AcX_U" />
          <Card.Body>
            <Card.Title>David Silva</Card.Title>
            <Card.Text>
             Desenvolvedor:
            </Card.Text>
            <Card.Text>
               Full Stack
            </Card.Text>
            <a href="https://github.com/david115x0">
            <Button variant="primary">Acessar Portfolio</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Ruan Araújo</Card.Title>
            <Card.Text>
             Desenvolvedor:
            </Card.Text>
            <Card.Text>
              Back-End
            </Card.Text>
           
            <a href="https://www.linkedin.com/in/felipe-rodrigues-de-melo-a9a8b5a4/">
            <Button variant="primary">Acessar Portfolio</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Felipe S.Araujo</Card.Title>
            <Card.Text>
             Desenvolvedor:
            </Card.Text>
            <Card.Text>
              Front-End
            </Card.Text>
           
            <a href="https://www.linkedin.com/in/felipe-rodrigues-de-melo-a9a8b5a4/">
            <Button variant="primary">Acessar Portfolio</Button>
            </a>
          </Card.Body>
        </Card>
      </CardGroup>

    </>
  );
}

export default Sobrenos;


