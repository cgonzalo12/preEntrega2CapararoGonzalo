import Row from "react-bootstrap/Row";
import { useState } from "react";
import userService from "../service/produc";
import Producto from "../components/Producto";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductosDest = () => {
  const [selectedItem, setSelectedItem] = useState();

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
            onClickDetalle={() => setSelectedItem(productos[index])}
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

      <Modal show={!!selectedItem} onHide={() => setSelectedItem(undefined)}>
        {selectedItem && (
          <>
            <Modal.Header closeButton>
              <Modal.Title>{selectedItem.nombre}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Card.Img
                variant="top"
                style={{ width: "18rem" } && { height: "18rem" }}
                src={selectedItem.img}
              />
              Precio: $ {selectedItem.precio}
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => setSelectedItem(undefined)}
              >
                Close
              </Button>
              <Button variant="primary">Agregar a Carrito</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </>
  );
};
export default ProductosDest;
