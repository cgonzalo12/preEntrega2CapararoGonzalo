import { useParams } from "react-router-dom";
import productoService from "../service/produc";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const ProductoDetail = () => {
  const params = useParams();
  console.log(params.id);
  const product = productoService.getProducto(params.id);
  console.log(product);

  return (
    <>
      <h1>Producto Detail</h1>
      <div className="d-flex justify-content-center">
        <Card style={{ width: "18rem" }} className="">
          <Card.Img variant="top" src={product.img} />
          <Card.Body>
            <Card.Title>{product.nombre}</Card.Title>
            <Card.Text>{product.descripcion}</Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="d-flex justify-content-center">
                Cantidad:
              </Form.Label>
              <Form.Control type="email" placeholder="1,2,3..." />
            </Form.Group>
            <Form.Label
              htmlFor="exampleColorInput"
              className="d-flex justify-content-center"
            >
              {" "}
              Color
            </Form.Label>
            <Form.Control
              type="color"
              id="exampleColorInput"
              defaultValue="#000000"
              title="Choose your color"
            />
          </ListGroup>
          <Card.Body>
            <Link to={`/`} className="btn btn-dark m-2">
              Favorito
            </Link>
            <Link to={`/`} className="btn btn-dark m-2">
              Comprar
            </Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};
export default ProductoDetail;
