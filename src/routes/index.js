import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Categorias from '../Pages/Categorias';
import NotFound from '../Pages/NotFound';
import Produtos from '../Pages/Produtos';


const RouteList = () => (
  <BrowserRouter>    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categorias" element={<Categorias />} />
      <Route path="/cursos" element={<Produtos />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;