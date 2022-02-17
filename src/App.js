import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuienesSomos from './pages/QuienesSomos';
import Catalogo from './pages/Catalogo';
import CatalogoPulsera from './pages/CatalogoPulsera';
import CatalogTobillera from './pages/CatalogoTobillera';
import CatalogoPanuelo from './pages/CatalogoPanuelo';
import Error404 from './pages/Error404';
import Carrito from './Components/Carrito/Carrito'
import { CartContextProvider } from './Context/CartContext';
import ItemDetailContainer from "./Components/itemDetailContainer/itemDetailContainer";
import GenerarOrden from "./Components/Carrito/Orden";
import Footer from "./Components/Footer/Footer"
import ProcesaOrden from './Components/Carrito/ProcesaOrden';

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/">
            <Route index element={<HomePage />} />
            <Route path="QuienesSomos" element={<QuienesSomos />} />
            <Route path="catalogo">
              <Route index element={<Catalogo />} />
              <Route path=":catalogoId" element={<ItemDetailContainer />} />
              <Route path="catalogoPulsera" element={<CatalogoPulsera />} />
              <Route path="catalogoTobillera" element={<CatalogTobillera />} />
              <Route path="catalogoPanuelo" element={<CatalogoPanuelo />} />
            </Route>
            <Route path="Carrito" element={<Carrito />} />
            <Route path="Orden" element={<GenerarOrden />} />
            <Route path="procesaOrden" element={<ProcesaOrden/>}/>
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;

