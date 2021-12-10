import { Container, Card, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/index';


const Carrinho = () => {
  const [cursos, setCursos] = useState([]);
  const { cursoName } = useParams();

  useEffect(() => {
    if (cursoName) {
      getCursoData({ tituloProduto: cursoName });
    };
  }, [cursoName])

  const getCursoData = async ({ tituloProduto }) => {
    try {
      const response = await api.get(`/produtos/${tituloProduto}`);
      setCursos(response.data);
      console.log(response.data)
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      })
    }
  }

  return (
    <>
      <Helmet>
        <title>CTD - Educational | {cursos[0] ? cursos[0].titulo : 'Home'}</title>
      </Helmet>

      <Container className="carrinho__container">
      {cursos.map(produtos => (
          <Card style={{ width: '18rem', margin: '20px' }} key={produtos.id}>
            <Card.Img variant="top" src={produtos.imagem} alt={produtos.titulo} title={produtos.titulo} />
            <Card.Body className="align-center">
              <Card.Title>{produtos.titulo}</Card.Title>
              <Card.Text>
                {produtos.descricao} 
                <p>Preço R$ <span className="price">{produtos.preco}</span> </p>
              </Card.Text>
            </Card.Body>
          </Card>
      ))}
      </Container>
    </>
  )
}
export default Carrinho;