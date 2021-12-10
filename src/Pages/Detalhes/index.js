import { ListGroup } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { CursoContext } from '../../contexts/CursoContext';
import api from '../../services/index';
import Swal from 'sweetalert2';
import './style.scss';



const Detalhes = () => {
  const [cursos, setcursos] = useState([]);
  const { cursoName } = useParams();
  const [curso] = cursos.filter(curso => curso.titulo === cursoName);
  
  useEffect(() => {
    async function loadProdutos() {
      try {
        const response = await api.get(`/produtos/${cursoName}`);
        console.log(response.data);
        setcursos(response.data);
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
        <title>CTD - Educational | {cursoName}</title>
      </Helmet>
      <div className="Detalhes">
        {curso && (
          <ListGroup as="ul" className="Flex col-xl-4 col-lg-6 col-6" key={curso.id}>

            <ListGroup.Item as="li"><img className="Curso" src={curso.imagem} alt={`Foto do ${curso.titulo}`} title={curso.titulo} /></ListGroup.Item>
            <ListGroup.Item as="li">Titulo: {curso.titulo}</ListGroup.Item>
            <ListGroup.Item as="li">Preço: {curso.preco}</ListGroup.Item>
            <ListGroup.Item as="li">Descrição: {curso.descricao}</ListGroup.Item>
            <ListGroup.Item as="li">Categoria: {curso.categoria.nome}</ListGroup.Item>
            <Button className="btn" to={`/carrinho/${curso.titulo}`} as={Link}>Adicionar ao Carrinho</Button>
          </ListGroup>
        )}
      </div>
    </>
  )
}
export default Detalhes;

