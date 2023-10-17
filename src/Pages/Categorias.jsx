import categoriasService from "../service/categoria";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

const Categorias = () => {
  const cat = categoriasService.getCategorias();
  const rta = [];
  const navigate = useNavigate();

  const renderCategorias = () => {
    for (let index = 0; index < cat.length; index++) {
      rta.push(
        <Col md={4} className="my-2">
          <Card style={{ width: "18rem" }} className="mx-auto">
            <Card.Img
              variant="top"
              style={{ width: "18rem" } && { height: "18rem" }}
              src={cat[index].img}
            />
            <Card.Body>
              <Card.Title>{cat[index].nombre}</Card.Title>
              <Card.Text>Codigo de producto: {cat[index].id}</Card.Text>
              <Button
                variant="dark"
                onClick={() => navigate(`/categorias/${cat[index].id}`)}
              >
                Ver Categoria
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    }
    return rta;
  };

  return (
    <>
      <h1>Categorias</h1>
      <Row>{renderCategorias()}</Row>
    </>
  );
};
export default Categorias;
