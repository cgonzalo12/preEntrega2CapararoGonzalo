import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import userService from "../service/produc";
import { Link, useNavigate } from "react-router-dom";

const ProductosDest = () => {
  const navigate = useNavigate();

  const renderProductos = () => {
    const productos = userService.getProductos();
    const rta = [];

    for (let index = 0; index < productos.length; index++) {
      if (productos[index].destacado === true) {
        rta.push(
          <Col md={4} className="my-2">
            <Card style={{ width: "18rem" }} className="mx-auto">
              <Card.Img
                variant="top"
                style={{ width: "18rem" } && { height: "18rem" }}
                src={productos[index].img}
              />
              <Card.Body>
                <Card.Title>{productos[index].nombre}</Card.Title>
                <Card.Text>
                  Precio: $ {productos[index].precio} <br />
                  Codigo de producto: {productos[index].id}
                </Card.Text>
                <Button variant="dark">Comprar</Button>
                <Button
                  variant="dark"
                  className="m-2"
                  onClick={() =>
                    navigate(`/ItemsListContainer/${productos[index].id}`)
                  }
                >
                  Ver detalle
                </Button>
                <Link
                  to={`/ItemsListContainer/${productos[index].id}`}
                  className="btn btn-dark m-2"
                >
                  Detalle Producto
                </Link>
              </Card.Body>
            </Card>
          </Col>
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
