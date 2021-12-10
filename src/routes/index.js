import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../Pages/Home';
import Categorias from '../Pages/Categorias';
import Sobrenos from '../Pages/Sobre';
import NotFound from '../Pages/NotFound';
import Produtos from '../Pages/Produtos';
import Detalhes from '../Pages/Detalhes';
import Carrinho from '../Pages/Carrinho';
import Filtros from '../Pages/Filtros';
import CursoContextProvider from '../contexts/CursoContext';

const RouteList = () => (
  <BrowserRouter>
    <CursoContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/curso" element={<Produtos />} />
        <Route path="curso/:cursoName" element={<Detalhes />} />
        <Route path="/carrinho/:compraName" element={<Carrinho />} />
        <Route path="*" element={<NotFound />} />
        <Route path="categorias/:categoriaName" element={<Filtros />} />
        <Route path="/sobre" element={<Sobrenos />} />
      </Routes>
      <Footer />
    </CursoContextProvider>
  </BrowserRouter>
);

export default RouteList;