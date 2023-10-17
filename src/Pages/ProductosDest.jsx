import Row from "react-bootstrap/Row";

import userService from "../service/produc";

import Producto from "../components/Producto";

const ProductosDest = () => {
  const renderProductos = () => {
    const productos = userService.getProductos();
    const rta = [];

    for (let index = 0; index < productos.length; index++) {
      if (productos[index].destacado === true) {
        rta.push(
          <Producto
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
      <h2 className="container text-center">Productos Destacados</h2>

      <Row>{renderProductos()}</Row>
    </>
  );
};
export default ProductosDest;
