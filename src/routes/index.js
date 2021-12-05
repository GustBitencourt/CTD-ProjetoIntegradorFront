import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import NotFound from '../Pages/NotFound';

const RouteList = () => (
  <BrowserRouter>    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default RouteList;