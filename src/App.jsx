import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import ItemsListContainer from "./components/ItemsListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Categorias from "./Pages/Categorias";
import CategoriasDetail from "./Pages/CategoriasDetail";
import ProductoDetail from "./Pages/ProductoDetail";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route path="/categorias" element={<Categorias />} />
            <Route path="/categorias/:id" element={<CategoriasDetail />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/ItemsListContainer/:id"
              element={<ProductoDetail />}
            />
            <Route
              path="/ItemsListContainer"
              element={<ItemsListContainer />}
            />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
