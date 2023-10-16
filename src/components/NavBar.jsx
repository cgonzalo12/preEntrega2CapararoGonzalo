import logo from "../assets/logo.png";
import CardWidget from "./CardWidget";
import { NavLink } from "react-router-dom";
import {
  Container,
  Nav,
  Navbar as BSNavBar,
  Form,
  Button,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <BSNavBar expand="md" bg="dark" data-bs-theme="dark">
      <Container>
        <BSNavBar.Brand>
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Logo de DecoHome"
          />
        </BSNavBar.Brand>
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link">
            Home Deco
          </NavLink>
          <NavLink to="/categorias" className="nav-link">
            Categorias
          </NavLink>
          <NavLink className="nav-link" to="/ItemsListContainer">
            Productos Destacados
          </NavLink>
          <Nav.Link href="#pricing">Contacto</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Buscar..."
            className="me-2"
            aria-label="Search"
          />
          <Button variant="light">Buscar</Button>
        </Form>
        <CardWidget />
      </Container>
    </BSNavBar>
  );
};
export default NavBar;
