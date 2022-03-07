import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Cargador from './firebase/Cargador';
import Catalogo from './pages/Catalogo';
import CatalogoPulsera from './pages/CatalogoPulsera';
import CatalogTobillera from './pages/CatalogoTobillera';
import CatalogoPanuelo from './pages/CatalogoPanuelo';
import CatalogoCollar from './pages/CatalogoCollar';
import Error404 from './pages/Error404';
import { UserAutProvider } from './Context/UserAutContext'
import Carrito from './Components/Carrito/Carrito'
import { CartContextProvider } from './Context/CartContext';
import ItemDetailContainer from "./Components/itemDetailContainer/itemDetailContainer";
import GenerarOrden from "./Components/Carrito/Orden";
import Footer from "./Components/Footer/Footer"





function App() {




  return (
    <>
      <UserAutProvider>
        <CartContextProvider>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="catalogo">
                  <Route index element={<Catalogo />} />
                  <Route path=":catalogoId" element={<ItemDetailContainer />} />
                  <Route path="catalogoPulsera" element={<CatalogoPulsera />} />
                  <Route
                    path="catalogoTobillera"
                    element={<CatalogTobillera />}
                  />
                  <Route path="catalogoPanuelo" element={<CatalogoPanuelo />} />
                  <Route path="catalogoCollar" element={<CatalogoCollar />} />
                </Route>

                <Route path="Carrito" element={<Carrito />} />
                <Route path="Cargador" element={<Cargador />} />
                <Route path="Orden/:ordenId" element={<GenerarOrden />} />
                <Route path="*" element={<Error404 />} />
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </CartContextProvider>
      </UserAutProvider>
    </>
  );
}

export default App;

