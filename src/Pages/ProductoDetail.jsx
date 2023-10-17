import { useParams } from "react-router-dom";
import Detail from "../components/Detail";

const ProductoDetail = () => {
  const params = useParams();
  console.log(params.id);

  return (
    <>
      <h1>Producto Detail</h1>
      <Detail id={params.id}></Detail>
    </>
  );
};
export default ProductoDetail;
