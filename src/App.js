import './App.css';
import NavBar from './Components/Navbar/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuienesSomos from './pages/QuienesSomos';
import Catalogo from './pages/Catalogo';
import ProductoDetalle from './pages/ProductoDetalle';


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
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

