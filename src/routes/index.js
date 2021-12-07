import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../Pages/components/Header';
import Footer from '../Pages/components/Footer';
import Home from '../Pages/Home';
import Categorias from '../Pages/Categorias';
import NotFound from '../Pages/NotFound';
import Produtos from '../Pages/Produtos';
import Detalhes from '../Pages/Detalhes';

const RouteList = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/cursos" element={<Produtos />} />
      <Route path="cursos/:cursoName" element={<Detalhes />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);

export default RouteList;