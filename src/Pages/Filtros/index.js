import Swal from 'sweetalert2';
import api from '../../services/index';
import { useEffect, useState } from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useParams } from 'react-router-dom';


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
    <Container as="section">
      {filtros.map(categorias => (
        <ListGroup as="ul" className="col-xl-4 col-lg-6 col-6" key={categorias.id}>

          <ListGroup.Item as="li"><img src={categorias.imagem} alt={`Foto do ${categorias.titulo}`} title={categorias.titulo} /></ListGroup.Item>
          <ListGroup.Item as="li">Titulo: {categorias.titulo}</ListGroup.Item>
          <ListGroup.Item as="li">Preço: {categorias.preco}</ListGroup.Item>
          <ListGroup.Item as="li">Descrição: {categorias.descricao}</ListGroup.Item>
          <ListGroup.Item as="li">Categoria: {categorias.categoria.nome}</ListGroup.Item>
        </ListGroup>
      ))}
    </Container>
  )
}

export default Filtros;