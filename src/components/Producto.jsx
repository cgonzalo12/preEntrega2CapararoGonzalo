import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Producto = ({ id, nombre, img, precio }) => {
  const navigate = useNavigate();
  Producto.propTypes = {
    id: PropTypes.number.isRequired,
    nombre: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    precio: PropTypes.number.isRequired,
  };
  return (
    <>
      <Col md={4} className="my-2">
        <Card style={{ width: "18rem" }} className="mx-auto">
          <Card.Img
            variant="top"
            style={{ width: "18rem" } && { height: "18rem" }}
            src={img}
          />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>
              Precio: $ {precio} <br />
              Codigo de producto: {id}
            </Card.Text>
            <Button variant="dark">Comprar</Button>
            <Button
              variant="dark"
              className="m-2"
              onClick={() => navigate(`/ItemsListContainer/${id}`)}
            >
              Ver detalle
            </Button>
            <Link to={`/ItemsListContainer/${id}`} className="btn btn-dark m-2">
              Detalle Producto
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default Producto;
