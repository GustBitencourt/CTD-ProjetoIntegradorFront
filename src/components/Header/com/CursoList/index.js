import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import {CursoContext} from '../../../../contexts/CursoContext'

const CursoList = () => {
  const { cursos } = useContext(CursoContext);

  return cursos.length ? (
    cursos.map(curso => (
      <NavDropdown.Item key={curso.id} as={Link} to={`/curso/${curso.titulo}`}>{curso.titulo}</NavDropdown.Item>
    ))
  ) : (
    <NavDropdown.Item>Não nenhum curso aqui</NavDropdown.Item>
  )
}

export default CursoList;