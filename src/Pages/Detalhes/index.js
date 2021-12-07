import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import api from '../../services/index';

const Detalhes = () => {
  const [cursos, setCursos] = useState([]);
  const { userName } = useParams();

  useEffect(() => {
    if (userName) {
      getUserData({ tituloProduto: userName });
    };
  }, [userName])

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
      {cursos.map(produtos => (
        <ul className="col-xl-4 col-lg-6 col-6" key={produtos.id}>
          <li><img src={produtos.imagem} alt={`Foto do ${produtos.titulo}`} /></li>
          <li>Titulo: {produtos.titulo}</li>
          <li>Preço: {produtos.preco}</li>
          <li>Descrição: {produtos.descricao}</li>
          <li>Categoria: {produtos.categoria.nome}</li>
        </ul>
      ))}
    </>
  )
}
export default Detalhes;