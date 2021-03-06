import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import api from '../../services/index';
import { useEffect, useState} from 'react';
import { Container, Col, CardGroup, Card, Button } from 'react-bootstrap';
import './style.scss';

const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  
  

  useEffect(() => {
    async function loadProdutos() {
      try {
        const response = await api.get(`/produtos`);
        console.log(response.data);
        setProdutos(response.data);
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        })
      }
    }

    loadProdutos();
  }, [])


  return (
    <>
      <Helmet>
        <title>
          CTD - Educational | Cursos
        </title>
      </Helmet>
      <Container>
        <Col >
          <CardGroup>
            <Container className="curso__container">
              {produtos.map(curso => (
                <Card style={{ width: '18rem', margin: '20px' }} key={curso.id}>
                  <Card.Img variant="top" src={curso.imagem} alt={curso.titulo} title={curso.titulo} />
                  <Card.Body className="align-center">
                    <Card.Title>{curso.titulo} {produtos.preco}</Card.Title>
                    <Card.Text>
                      {curso.descricao} 
                      <p>Preço R$ <span className="price">{curso.preco}</span> </p>
                    </Card.Text>
                    <Button as={Link} to={`/curso/${curso.titulo}`} variant="success" className="btn" >Mais Detalhes</Button>
                  </Card.Body>
                </Card>
              ))}
            </Container>
          </CardGroup>
        </Col>
      </Container>
    </>
  );

}
export default Produtos;

