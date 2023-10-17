import { useParams } from "react-router-dom";
import categoriasService from "../service/categoria";
import productoService from "../service/produc";
import Row from "react-bootstrap/Row";
import Producto from "../components/Producto";

const CategoriaDetail = () => {
  const params = useParams();
  const cat = categoriasService.getCategoria(params.id);

  const renderProductos = () => {
    const productos = productoService.getProductos();
    const rta = [];
    for (let index = 0; index < productos.length; index++) {
      if (productos[index].categoria === cat.nombre) {
        rta.push(
          <Producto
            key={productos[index].id}
            id={productos[index].id}
            nombre={productos[index].nombre}
            img={productos[index].img}
            precio={productos[index].precio}
          ></Producto>
        );
      }
    }
    return rta;
  };
  return (
    <>
      <h1>{cat.nombre}</h1>
      <Row>{renderProductos()}</Row>
    </>
  );
};
export default CategoriaDetail;
