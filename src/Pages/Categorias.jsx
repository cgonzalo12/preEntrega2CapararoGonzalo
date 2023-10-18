import categoriasService from "../service/categoria";

import Row from "react-bootstrap/Row";

import Categoria from "../components/Categoria";

const Categorias = () => {
  const cat = categoriasService.getCategorias();
  const rta = [];

  const renderCategorias = () => {
    for (let index = 0; index < cat.length; index++) {
      rta.push(
        <Categoria
          id={cat[index].id}
          img={cat[index].img}
          nombre={cat[index].nombre}
        ></Categoria>
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
