import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuienesSomos from './pages/QuienesSomos';
import Catalogo from './pages/Catalogo';
import ProductoDetalle from './pages/ProductoDetalle';
import CatalogoPulsera from './pages/CatalogoPulsera';
import CatalogTobillera from './pages/CatalogoTobillera';
import CatalogoPanuelo from './pages/CatalogoPanuelo';
import Error404 from './pages/Error404';
import Carrito from './pages/Carrito'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="QuienesSomos" element={<QuienesSomos />} />
          <Route path="catalogo">
            <Route index element={<Catalogo />} />
            <Route path=":catalogoId" element={<ProductoDetalle />} />
            <Route path="catalogoPulsera" element={<CatalogoPulsera />} />
            <Route path="catalogoTobillera" element={<CatalogTobillera />} />
            <Route path="catalogoPanuelo" element={<CatalogoPanuelo />} />
          </Route>
          <Route path="/Carrito" element={<Carrito/>}></Route>
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

