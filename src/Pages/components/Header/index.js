import { Button, Container, Form, FormControl, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './style.scss';

const Header = () => {

  return (
    <header>
      <Navbar bg="ligh" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">CTD - Educational</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >

              <Nav.Link>
                <Link className="noneStyle" to="/categorias" >Categorias</Link>
              </Nav.Link>

              <NavDropdown title="Cursos" id="navbarScrollingDropdown" >
                <NavDropdown.Item href="/cursos">Cursos</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action3">Front-end</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Ux/Ui</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Back-end
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#">Sobre Nós</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Pesquiser Cursos"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Buscar</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;