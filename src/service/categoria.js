import categorias from "../data/categorias";

const getCategorias = () => {
  const cat = categorias.map((producto) => ({
    id: producto.id,
    nombre: producto.nombre,
    img: producto.img,
  }));
  return cat;
};

const getCategoria = (id) => {
  return categorias.find((categoria) => categoria.id.toString() === id);
};

const categoriasService = {
  getCategorias,
  getCategoria,
};
export default categoriasService;
