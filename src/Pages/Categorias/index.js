import { Component } from 'react';
/* import { Link } from 'react-router-dom'; */
import { Formik, Form, Field } from 'formik';
import Swal from 'sweetalert2';
import api from '../../services/index';

export default class Categorias extends Component {
  constructor() {
    super();
    this.state = {
      categoria: {}
    }
  }

  handleSubmit = async ({ nomeCategoria }) => {
    try {
      const response = await api.get(`/categorias/${nomeCategoria}`);
      this.setState({ categoria: response.data });
      console.log(response.data)
    } catch (error) {
      Swal.fire({
        title: error.response.status,
        icon: 'error',
        text: error.response.data.message
      });
    }
  }

  render() {
    return (
      <>
        <main>
          <div className="col-md-4 col-sm-6 my-3 container text-center">
            <h2>Categorias</h2>
            <Formik initialValues={{ nomeCategoria: '' }} onSubmit={this.handleSubmit}>
              <Form>
                <Field placeholder="Inserir categoria" required type="text" name="nomeCategoria" id="nomeCategoria" className="form-control my-3" />
                <button type="submit" className="btn btn-primary">Pesquisar</button>
              </Form>
            </Formik>
            {this.state.categoria && (
              <ul className="list-group my-3">
                <li>{this.state.categoria.nome}</li>
              </ul>
            )}
          </div>
        </main>
      </>
    );
  }
}