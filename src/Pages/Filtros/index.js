import Swal from 'sweetalert2';
import api from '../../services/index';
import { useEffect, useState } from 'react';


const Filtros = () => {
  
     const [filtros, setFiltros] = useState([])
        useEffect(() => {
            async function loadCategoria() {
              try {
                const response = await api.get(`/produtos`);
                console.log(response.data);
                setFiltros(response.data);
              } catch (error) {
                Swal.fire({
                  title: error.response.status,
                  icon: 'error',
                  text: error.response.data.message
                })
              }
            }
            loadCategoria();


          }, [])

        return (
            <div>
                <h1>Filtros</h1>
            </div>
        )
}

export default Filtros;