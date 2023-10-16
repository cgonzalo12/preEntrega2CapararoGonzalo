import Productos from "../data/products.js";

const getProductos = () => {
  const productos = Productos.map((producto) => ({
    id: producto.id,
    precio: producto.precio,
    nombre: producto.nombre,
    img: producto.img,
    categoria: producto.categoria,
    descripcion: producto.descripcion,
    destacado: producto.destacado,
  }));
  return productos;
};
const getProducto = (id) => {
  return Productos.find((categoria) => categoria.id.toString() === id);
};
const createProducto = () => {};
const removeProducto = () => {};
const actualizarProducto = () => {};

const productoService = {
  getProductos,
  getProducto,
  createProducto,
  removeProducto,
  actualizarProducto,
};
export default productoService;
