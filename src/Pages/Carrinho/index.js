import {  Card, Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useContext, useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { CursoContext } from '../../contexts/CursoContext';
import Swal from 'sweetalert2';
import api from '../../services/index';
import './style.scss'

const Carrinho = () => {
  const [curso, setCursos] = useState([]);
  const { addCurso } = useContext(CursoContext);
  const { compraName } = useParams();

  useEffect(() => {
    async function loadProdutos() {
      try {
        const response = await api.get(`/produtos/${compraName}`);
        console.log(response.data);
        setCursos(response.data);
        addCurso(response.data[0])
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
        <title>CTD - Educational | {compraName}</title>
      </Helmet>

      <Container className="carrinho__container">
      {curso.map(produtos => (
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