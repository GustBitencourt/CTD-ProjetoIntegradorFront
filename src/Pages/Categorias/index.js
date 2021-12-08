
import Swal from 'sweetalert2';
import api from '../../services/index';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Container} from 'react-bootstrap';


const Categorias = () => {
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    async function loadCategoria() {
      try {
        const response = await api.get(`/categorias`);
        console.log(response.data);
        setCategoria(response.data);
      } catch (error) {
        Swal.fire({
          title: error.response.status,
          icon: 'error',
          text: error.response.data.message
        })
      }
    }
    loadCategoria();
  }, [])


  return (
    <>
      <div>
        {categoria.map(nomeCategoria => (
          /*       <ul className="col-xl-4 col-lg-6 col-6" key={d.id}>
                  <li>Nome: {d.nome}</li>
                </ul> */
          <Button variant="primary" as={Link} to={`/categorias/${nomeCategoria.nome}`} className="button" key={nomeCategoria.id}>
           Categoria : {nomeCategoria.nome}
          </Button>
        ))}
      </div>
    </>
  );

}
export default Categorias;