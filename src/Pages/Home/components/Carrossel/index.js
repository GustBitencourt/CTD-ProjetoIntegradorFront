import { useState, useEffect } from 'react'
import { Carousel, Card, CardGroup } from 'react-bootstrap';
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
      <h2>Em Destaque</h2>
      <Carousel variant="dark">
        <Carousel.Item interval={1500}>
          <CardGroup className="container__card__carrossel">
            {produtos.map(curso => {
              return (
                <>
                <Card  key={curso.id}>
                  <Card.Img variant="top" src={curso.imagem} alt={curso.title} title={curso.title} />
                  <Card.Body>
                    <Card.Title>{curso.titulo}</Card.Title>
                    <Card.Text>
                      {curso.descricao}
                    </Card.Text>
                  </Card.Body>
                </Card>                
                  </>
              )
            }).slice(0, 3)}
          </CardGroup>          
        </Carousel.Item>

        <Carousel.Item interval={1500}>
          <CardGroup className="container__card__carrossel">
            {produtos.map(curso => {
              return (
                <>
                <Card  key={curso.id}>
                  <Card.Img variant="top" src={curso.imagem} alt={curso.title} title={curso.title} />
                  <Card.Body>
                    <Card.Title>{curso.titulo}</Card.Title>
                    <Card.Text>
                      {curso.descricao}
                    </Card.Text>
                  </Card.Body>
                </Card>                
                  </>
              )
            }).slice(4, 7)}
          </CardGroup>          
        </Carousel.Item>
      </Carousel>
    </>

  )
}

export default Carrossel;

/*
    <Carousel.Item interval={1500} key={curso.id}>
              <img
                className="d-block w-100 h-90"
                id="image"
                src={curso.imagem}
                alt={`Foto do ${curso.titulo}`}
                title={curso.titulo}
              />
              <Carousel.Caption>
                <h3>{curso.titulo}</h3>
                <p>{curso.descricao}</p>
              </Carousel.Caption>
            </Carousel.Item>
          )}).slice(0,4)}          
*/