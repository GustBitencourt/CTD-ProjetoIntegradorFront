import {  ListGroup, Button } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useContext, useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import { CursoContext } from '../../contexts/CursoContext';
import Swal from 'sweetalert2';
import api from '../../services/index';
import { Link } from 'react-router-dom';

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
      <div className="Detalhes">
        {curso.map(produto => (
          <ListGroup as="ul" className="Flex col-xl-4 col-lg-6 col-6" key={produto.id}>

            <ListGroup.Item as="li"><img className="Curso" src={produto.imagem} alt={`Foto do ${produto.titulo}`} title={produto.titulo} /></ListGroup.Item>
            <ListGroup.Item as="li">Titulo: {produto.titulo}</ListGroup.Item>
            <ListGroup.Item as="li">Preço: {produto.preco}</ListGroup.Item>
            <ListGroup.Item as="li">Descrição: {produto.descricao}</ListGroup.Item>
            <ListGroup.Item as="li">Categoria: {produto.categoria.nome}</ListGroup.Item>
          </ListGroup>
        ))}
      </div>
    </>
  )
}
export default Carrinho; 