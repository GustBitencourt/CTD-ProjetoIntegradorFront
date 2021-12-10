import Swal from 'sweetalert2';
import api from '../../services/index';
import './style.scss';
import { useEffect, useState } from 'react';
import { Container, CardGroup, Card, Button  } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';


const Filtros = () => {

  const [filtros, setFiltros] = useState([])
  const { categoriaName } = useParams();

  useEffect(() => {
    if (categoriaName) {
      getUserData({ tituloProduto: categoriaName });
    };
  }, [categoriaName])

  const getUserData = async ({ tituloProduto }) => {
    try {
      const response = await api.get(`/produtos/categorias/${tituloProduto}`);
      setFiltros(response.data);
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
    <Container className="produto__container">
        {filtros.map(categorias => (
          <Card style={{ width: '18rem' }} key={categorias.id}>
            <Card.Img variant="top" src={categorias.imagem} alt={categorias.titulo} title={categorias.titulo} />
            <Card.Body className="align-center">
              <Card.Title>{categorias.titulo}</Card.Title>
              <Card.Text>
                {categorias.descricao}
                <p>Preço R$ <span className="price">{categorias.preco}</span> </p>
              </Card.Text>
              <Button as={Link} to={`/carrinho`} variant="success" className="btn" >Adicionar ao Carrinho</Button>
            </Card.Body>
          </Card>
        ))}
    </Container>
  )
}

export default Filtros;