import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';
/* import Cart from '../../images/cart.png'; */
import CursoList from './com/CursoList';

const Header = () => {

  return (
    <header>
      <Navbar bg="dark" expand="lg">
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

<<<<<<< HEAD
              <Nav.Link className="navs" as={Link} to={"/cursos"}>Cursos</Nav.Link>

              <Nav.Link className="navs" as={Link} to={"/cursos"}>Sobre Nós</Nav.Link>
=======
              <Nav.Link as={Link} to={"/curso"}>Cursos</Nav.Link>

              <Nav.Link as={Link} to={"/sobre"}>Sobre Nós</Nav.Link>
>>>>>>> 49b2d9af81abdac6a72b1a08993802853b2e7c3c
            </Nav>

            <Nav>
              <NavDropdown title="Carrinho" bg="White" id="basic-nav-dropdown">
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