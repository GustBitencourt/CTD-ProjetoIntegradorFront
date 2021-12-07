import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import api from '../../services/index';
import { useEffect, useState } from 'react';
import { Container,  Form} from 'react-bootstrap';



const Produtos = () => {
  const [produtos, setProdutos] = useState([]);
  const [filteredCategoria, setFilteredCategoria] = useState(produtos);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    console.log(value);
    result = produtos.filter((data) => {
      return data.categoria.nome.search(value) !== -1;
    });
    setFilteredCategoria(result);
  }

  useEffect(() => {
    async function loadProdutos() {
      try {
        const response = await api.get(`/produtos`);
        console.log(response.data);
        setProdutos(response.data);
        setFilteredCategoria(response.data);
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
        <title>
          CTD - Educational | Cursos
        </title>
      </Helmet>



      <Container>
        <Container>
          <h2>Cursos</h2>
        </Container>



        {filteredCategoria.map((value, index) => {
          return (
            <Form.Select aria-label="Default select example" key={value.id} onChange={(event) => handleSearch(event)}>
              <option>Escolha a Categoria</option>
              <option >{value.categoria.nome}</option>
            </Form.Select>
          )
        })}
      </Container>


      <Container>
        {produtos.map(curso => (
          <ul className="col-xl-4 col-lg-6 col-6" key={curso.id}>
            <li><img src={curso.imagem} alt={`Foto do ${curso.titulo}`} title={curso.titulo} /></li>
            <li>Titulo: {curso.titulo}</li>
            <li>Preço: {curso.preco}</li>
            <li>Descrição: {curso.descricao}</li>
            <li>Categoria: {curso.categoria.nome}</li>
            <Link to={`/cursos/${curso.titulo}`}>Mais detalhes sobre {curso.titulo}</Link>
          </ul>
        ))}
      </Container>
    </>
  );

}
export default Produtos;