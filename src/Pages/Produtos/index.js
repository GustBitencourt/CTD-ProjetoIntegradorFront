import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import api from '../../services/index';
import { useEffect, useState } from 'react';
import { Container, Col, FormControl, Form, Row } from 'react-bootstrap';


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
        <Container>
          <h2>Cursos</h2>
        </Container>


        <Form.Select aria-label="Default select example">
          <option>Escolha a Categoria</option>
          <option value="frontend">frontend</option>
          <option value="backend">backend</option>
          <option value="desing">desing</option>
        </Form.Select>
      </Container>


      <Container>
        {produtos.map(curso => (
          <ul className="col-xl-4 col-lg-6 col-6" key={curso.id}>
            <li><img src={curso.imagem} alt={`Foto do ${curso.titulo}`} title={curso.titulo} /></li>
            <li>Titulo: {curso.titulo}</li>
            <li>Preço: {curso.preco}</li>
            <li>Descrição: {curso.descricao}</li>
            <li>Categoria: {curso.categoria.nome}</li>
            <Link to={`/cursos/${curso.titulo}`}>Mais detalhes sobre {curso.titulo}</Link>
          </ul>
        ))}
      </Container>
    </>
  );

}
export default Produtos;