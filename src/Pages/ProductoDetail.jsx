import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductoDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.id);

  return (
    <>
      <h1>
        {" "}
        <Button className="btn btn-dark m-2" onClick={() => navigate(-1)}>
          {"<"}
        </Button>{" "}
        Producto Detail
      </h1>
      <Detail id={params.id}></Detail>
    </>
  );
};
export default ProductoDetail;
