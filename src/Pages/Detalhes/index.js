import { Helmet } from 'react-helmet';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CursoContext } from '../../contexts/CursoContext';
import api from '../../services/index';
import Swal from 'sweetalert2';
import './style.scss';


const Detalhes = () => {
  const [cursos, setcursos] = useState([]);
  const { cursoName } = useParams();
  const [curso] = cursos.filter(curso => curso.titulo === cursoName);
  
  useEffect(() => {
    async function loadProdutos() {
      try {
        const response = await api.get(`/produtos/${cursoName}`);
        console.log(response.data);
        setcursos(response.data);
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
        <title>CTD - Educational | {cursoName}</title>
      </Helmet>

      <Container className="Detalhes">
        <Container as="ul" className="Flex col-xl-4 col-lg-6 col-6">
          {curso && (
            <Card style={{ width: '18rem' }} key={curso.id}>
              <Card.Img variant="top" src={curso.imagem} alt={curso.titulo} title={curso.titulo} />
              <Card.Body className="align-center">
                <Card.Title>{curso.titulo}</Card.Title>
                <Card.Text>
                  {curso.descricao}
                  <p>Preço R$ <span className="price">{curso.preco}</span> </p>
                </Card.Text>
                <Button as={Link} to={`/carrinho/${curso.titulo}`} variant="success" className="btn" >Adicionar ao Carrinho</Button>
              </Card.Body>
            </Card>
          )}
          </Container>
      </Container>
    </>
  )
}
export default Detalhes;
