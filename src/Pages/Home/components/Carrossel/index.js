import { useState, useEffect } from 'react'
import { Carousel, Card, Col, Row, Button, CardGroup } from 'react-bootstrap';
import Swal from 'sweetalert2';
import api from '../../../../services';
import './style.scss';

const Carrossel = () => {
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
      <Carousel>
        {produtos.map(curso => {
          return (
            <Carousel.Item interval={1500} key={curso.id}>
              <img
                className="d-block w-100 h-90"
                src={curso.imagem}
                alt={`Foto do ${curso.titulo}`}
                title={curso.titulo}
              />
              <Carousel.Caption>
                <h3>{curso.titulo}</h3>
                <p>{curso.descricao}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )})}
      </Carousel>
    </>

  )
}

export default Carrossel;

/*
              
*/