import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Home from '../Pages/Home';
import Categorias from '../Pages/Categorias';
import NotFound from '../Pages/NotFound';
import Produtos from '../Pages/Produtos';
import Detalhes from '../Pages/Detalhes';
import Filtros from '../Pages/Filtros';
import CursoContextProvider from '../contexts/CursoContext';

const RouteList = () => (
  <BrowserRouter>
    <CursoContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorias" element={<Categorias />} />
        <Route path="/cursos" element={<Produtos />} />
        <Route path="cursos/:cursoName" element={<Detalhes />} />
        <Route path="*" element={<NotFound />} />
        <Route path="categorias/:categoriaName" element={<Filtros />} />
      </Routes>
    <Footer />
    </CursoContextProvider>
  </BrowserRouter>
);

export default RouteList;