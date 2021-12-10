import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';
/* import Cart from '../../images/cart.png'; */
import CursoList from './com/CursoList';

const Header = () => {

  return (
    <header>
      <Navbar bg="ligh" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"} ><h1>CTD - Educational</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link className="navs" as={Link} to={"/categorias"}>Categorias</Nav.Link>

              <Nav.Link as={Link} to={"/cursos"}>Cursos</Nav.Link>

              <Nav.Link as={Link} to={"/sobre"}>Sobre Nós</Nav.Link>
            </Nav>

            <Nav>
              <NavDropdown title="Carrinho" id="basic-nav-dropdown">
                <CursoList />
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;