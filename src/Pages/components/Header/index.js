import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';
import Cart from '../../../images/cart.png';

const Header = () => {

  return (
    <header>
      <Navbar bg="ligh" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"} >CTD - Educational</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link as={Link} to={"/categorias"}>Categorias</Nav.Link>

              <Nav.Link as={Link} to={"/cursos"}>Cursos</Nav.Link>              
              
              <Nav.Link as={Link} to={"/cursos"}>Sobre Nós</Nav.Link>
            </Nav>
            
            <Container className="containerCart">
              <Nav.Link as={Link} to={"/carrinhos"}> <img src={Cart} alt="Carrinho de compras" title="Carrinho de compras" /></Nav.Link>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;