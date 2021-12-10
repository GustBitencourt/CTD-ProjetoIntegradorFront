import Swal from 'sweetalert2';
import api from '../../services/index';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Button, Container, Col} from 'react-bootstrap';
import './style.scss';


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

  const firstCapitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  


  return (
    <>
      <section id="sectionCategoria">
        <Container sm={{span:10, offset: 1}} className="my-5">
          <Col id="colButton">
            <h2>Categorias</h2>
            {categoria.map(nomeCategoria => (
              /*       <ul className="col-xl-4 col-lg-6 col-6" key={d.id}>
                      <li>Nome: {d.nome}</li>
                    </ul> */
              <Button id="button__categorias" as={Link} to={`/categorias/${nomeCategoria.nome}`} className="button" key={nomeCategoria.id}>
               {firstCapitalize(nomeCategoria.nome)}
              </Button>
            ))}
          </Col>
        </Container>
      </section>
    </>
  );

}
export default Categorias;