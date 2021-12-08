import {  ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/index';

const Detalhes = () => {
  const [cursos, setCursos] = useState([]);
  const { cursoName } = useParams();

  useEffect(() => {
    if (cursoName) {
      getUserData({ tituloProduto: cursoName });
    };
  }, [cursoName])

  const getUserData = async ({ tituloProduto }) => {
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
      {cursos.map(produtos => (
        <ListGroup as="ul" className="col-xl-4 col-lg-6 col-6" key={produtos.id}>

          <li><img src={produtos.imagem} alt={`Foto do ${produtos.titulo}`} title={produtos.titulo} /></li>
          <li>Titulo: {produtos.titulo}</li>
          <li>Preço: {produtos.preco}</li>
          <li>Descrição: {produtos.descricao}</li>
          <li>Categoria: {produtos.categoria.nome}</li>

        </ListGroup>
      ))}
    </>
  )
}
export default Detalhes;