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
  const [cursos, setProdutos] = useState([]);
  const { addCurso } = useContext(CursoContext);
  const { cursoName } = useParams();


  useEffect(() => {
    async function loadProdutos() {
      try {
        const response = await api.get(`/produtos/${cursoName}`);
        console.log(response.data);
        setProdutos(response.data);
        addCurso(response.data[0]);
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
        <title>CTD - Educational | {cursos[0] ? cursos[0].titulo : 'Curso'}</title>
      </Helmet>

      <Container className="Detalhes">
          {cursos.map(produtos => (
        <Container as="ul" className="Flex col-xl-4 col-lg-6 col-6">
            <Card style={{ width: '18rem' }} key={produtos.id}>
              <Card.Img variant="top" src={produtos.imagem} alt={produtos.titulo} title={produtos.titulo} />
              <Card.Body className="align-center">
                <Card.Title>{produtos.titulo}</Card.Title>
                <Card.Text>
                  {produtos.descricao}
                </Card.Text>
                <Button variant="success" className="align-center" >Adicionar ao Carrinho</Button>
              </Card.Body>
            </Card>
        </Container>
          ))}
      </Container>
    </>
  )
}
export default Detalhes;



/*
<ListGroup.Item as="li"><img className="Curso" src={produtos.imagem} alt={`Foto do ${produtos.titulo}`} title={produtos.titulo} /></ListGroup.Item>
      <ListGroup.Item as="li">Titulo: {produtos.titulo}</ListGroup.Item>
      <ListGroup.Item as="li">Preço: {produtos.preco}</ListGroup.Item>
      <ListGroup.Item as="li">Descrição: {produtos.descricao}</ListGroup.Item>
      <ListGroup.Item as="li">Categoria: {produtos.categoria.nome}</ListGroup.Item>
      <Button className="btn" to={`/carrinho`} as={Link}>Adicionar ao Carrinho</Button>
*/