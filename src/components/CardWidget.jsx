import { Nav } from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "../App.scss";
import "../components/CardWidget.scss";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

const CardWidget = () => {
  const numero = 2;
  return (
    <Nav.Link href="#carrito">
      <IconButton aria-label="cart">
        <Badge badgeContent={numero} color="secondary">
          <ShoppingCartIcon className="carrito" />
        </Badge>
      </IconButton>
    </Nav.Link>
  );
};
export default CardWidget;
