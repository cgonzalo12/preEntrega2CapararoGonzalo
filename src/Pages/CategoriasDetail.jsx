import { useParams } from "react-router-dom";
import categoriasService from "../service/categoria";
import productoService from "../service/produc";
import Row from "react-bootstrap/Row";
import Producto from "../components/Producto";
import { useState } from "react";
import { Button, Card, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const CategoriaDetail = () => {
  const [selectedItem, setSelectedItem] = useState();
  const params = useParams();
  const cat = categoriasService.getCategoria(params.id);
  const navigate = useNavigate();

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
      <h1>
        {" "}
        <Button className="btn btn-dark m-2" onClick={() => navigate(-1)}>
          {"<"}
        </Button>{" "}
        {cat.nombre}
      </h1>
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
export default CategoriaDetail;
