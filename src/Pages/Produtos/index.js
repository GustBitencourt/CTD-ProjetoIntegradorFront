import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import api from '../../services/index';
import { useEffect, useState, useContext , useParams} from 'react';
import { Container, Col, Form, ListGroup } from 'react-bootstrap';
import { CursoContext } from '../../contexts/CursoContext'

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
        <Col>
            <h2>Cursos</h2>
          <Form.Select aria-label="Default select example">
            <option value="frontend">frontend</option>
            <option value="backend">backend</option>
            <option value="desing">desing</option>
          </Form.Select>
        </Col>
        <Col>
          {produtos.map(curso => (
            <ListGroup as="ul" className="col-xl-4 col-lg-6 col-6" key={curso.id}>

              <ListGroup.Item as="li"><img src={curso.imagem} alt={`Foto do ${curso.titulo}`} title={curso.titulo} /></ListGroup.Item>
              <ListGroup.Item as="li">Titulo: {curso.titulo}</ListGroup.Item>
              <ListGroup.Item as="li">Preço: {curso.preco}</ListGroup.Item>
              <ListGroup.Item as="li">Descrição: {curso.descricao}</ListGroup.Item>
              <ListGroup.Item as="li">Categoria: {curso.categoria.nome}</ListGroup.Item>
              <Link to={`/cursos/${curso.titulo}`}>Mais detalhes sobre {curso.titulo}</Link>

            </ListGroup>
          ))}
        </Col>
      </Container>
    </>
  );

}
export default Produtos;