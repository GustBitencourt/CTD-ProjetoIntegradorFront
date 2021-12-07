
import Swal from 'sweetalert2';
import api from '../../services/index';
import { useEffect, useState } from 'react';

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
    <div>
    {produtos.map(d => (
      <ul className="col-xl-4 col-lg-6 col-6" key={d.id}>
        <li><img src={d.imagem} alt={`Foto do ${d.titulo}`} /></li>
        <li>Titulo: {d.titulo}</li>
        <li>Preço: {d.preco}</li>
        <li>Descrição: {d.descricao}</li>
        <li>Categoria: {d.categoria.nome}</li>
      </ul>
    
    ))} 
    </div>
    </>
  );

}
export default Produtos;