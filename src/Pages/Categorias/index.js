import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import api from '../../services/index'


const Categorias = () => {
    const [categorias, setCategorias] = useState([]);
    useEffect(() => {
        try {
            const response = api.get(`categorias`);
            setCategorias(response.data);
            console.log(response)
        } catch (error) {
            Swal.fire({
                title: error.response.status,
                icon: 'error',
                text: error.response.data.message
            });
        }
    }, [])

    return (
        <>
            <Header />
            {categorias.nome && (
                <main className="text-center">
                    <h1>Categorias</h1>
                    <li>{categorias.nome}</li>
                </main>
            )}
            <Footer />
        </>
    )
}

export default Categorias;