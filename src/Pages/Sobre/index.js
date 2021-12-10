import './style.scss';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';

const Sobrenos = () => {

  return (
    <>
      <Helmet>
        <title>
          CTD - Educational | Sobre Nós
        </title>
      </Helmet>
      <Container className="wrapper__about">
        <CardGroup className="about__container">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/85718153?v=4" alt="Felipe Rodrigues" />
            <Card.Body>
              <Card.Title>Felipe Rodrigues De Melo</Card.Title>
              <Card.Text>
                Desenvolvedor:
              </Card.Text>
              <Card.Text>
                 Front-End
              </Card.Text>
              <a href="https://github.com/Felipe00007">
              <img className="git" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github"></img>
              </a>
              <a href="https://www.linkedin.com/in/felipe-rodrigues-de-melo-b07a35141/">
              <img className="linkedin" src="https://t.ctcdn.com.br/o6YUYZNxhn1ob0FEjQo-a7KapYU=/400x400/smart/i490027.jpeg" alt="linkedin"></img>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/79281317?v=4" alt="Gustavo Bitencourt" />
            <Card.Body>
              <Card.Title>Gustavo Bitencourt</Card.Title>
              <Card.Text>
                Desenvolvedor:
              </Card.Text>
              <Card.Text>
                  Front-End
              </Card.Text>
              <a href="https://github.com/GustBitencourt">
              <img className="git" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"></img>
              </a>
              <a href="https://www.linkedin.com/in/gustavo-bitencourt-081615204/">
              <img className="linkedin" src="https://t.ctcdn.com.br/o6YUYZNxhn1ob0FEjQo-a7KapYU=/400x400/smart/i490027.jpeg" alt="Linkedin"></img>
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
              <img className="git" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"></img>
              </a>
              <a href="https://www.linkedin.com/in/david-silva-sousa-790a42225/">
              <img className="linkedin" src="https://t.ctcdn.com.br/o6YUYZNxhn1ob0FEjQo-a7KapYU=/400x400/smart/i490027.jpeg" alt="Linekdin"></img>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/C4D03AQEmgThrgPkJ8g/profile-displayphoto-shrink_800_800/0/1633190458680?e=1644451200&v=beta&t=8Lhv00MkjTXHgIbpmAlUFQZl56dGKxe_v0MhyR7Kshw" alt="Ruan"/>
            <Card.Body>
              <Card.Title>Ruan Araújo</Card.Title>
              <Card.Text>
               Desenvolvedor:
              </Card.Text>
              <Card.Text>
                Back-End
              </Card.Text>
        
              <a href="https://github.com/Ruan-Araujo">
              <img className="git" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"></img>
              </a>
              <a href="https://www.linkedin.com/in/ruan-damacena/">
              <img className="linkedin" src="https://t.ctcdn.com.br/o6YUYZNxhn1ob0FEjQo-a7KapYU=/400x400/smart/i490027.jpeg" alt="Linkedin"></img>
              </a>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://media-exp1.licdn.com/dms/image/D4E35AQHOnYWunabwVg/profile-framedphoto-shrink_800_800/0/1636069371339?e=1639231200&v=beta&t=Uuv75tpEYddKtmrlCkF8pRMLHRmxzke4FfytSdhnpTA" alt="Felipe Araujo"/>
            <Card.Body>
              <Card.Title>Felipe S.Araujo</Card.Title>
              <Card.Text>
               Responsalvel Por:
              </Card.Text>
              <Card.Text>
                Designer
              </Card.Text>
        
              <a href="">
              <img className="git" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub"></img>
              </a>
              <a href="https://www.linkedin.com/in/felipemotion/">
              <img className="linkedin" src="https://t.ctcdn.com.br/o6YUYZNxhn1ob0FEjQo-a7KapYU=/400x400/smart/i490027.jpeg" alt="Linkedin"></img>
              </a>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>

    </>
  );
}

export default Sobrenos;


