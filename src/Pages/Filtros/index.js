import Swal from 'sweetalert2';
import api from '../../services/index';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
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
    <Container>
      {filtros.map(categorias => (
        <ul className="col-xl-4 col-lg-6 col-6" key={categorias.id}>
          <li><img src={categorias.imagem} alt={`Foto do ${categorias.titulo}`} title={categorias.titulo} /></li>
          <li>Titulo: {categorias.titulo}</li>
          <li>Preço: {categorias.preco}</li>
          <li>Descrição: {categorias.descricao}</li>
          <li>Categoria: {categorias.categoria.nome}</li>
        </ul>
      ))}
    </Container>
  )
}

export default Filtros;