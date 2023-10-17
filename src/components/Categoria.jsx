import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const Categoria = (img, nombre, id) => {
  const navigate = useNavigate();

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
            <Card.Text>Codigo de producto: {id}</Card.Text>
            <Button
              variant="dark"
              onClick={() => navigate(`/categorias/${id}`)}
            >
              Ver Categoria
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default Categoria;
