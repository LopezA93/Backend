const Router = require("koa-router");
const ProductosDaoMongo = require("../daos/productos/ProductosDaoMongo");
const db = new ProductosDaoMongo();

const productKoaRouter = new Router({
  prefix: "/productos",
});

productKoaRouter.get("/", async (ctx) => {
  const productos = await db.getAll();
  ctx.body = productos;
});

productKoaRouter.get("/:id", async (ctx) => {
  const id = ctx.params.id;
  const producto = await db.getById(id);
  if (producto) {
    ctx.body = producto;
  } else {
    ctx.status = 404;
  }
});

productKoaRouter.post("/", async (ctx) => {
  const { nombre, descripcion, codigo, foto, precio, stock } = ctx.request.body;

  const newProduct = await db.save({
    nombre: nombre,
    descripcion: descripcion,
    codigo: codigo,
    foto: foto,
    precio: precio,
    stock: stock,
  });
  ctx.body = `New product saved ${nombre}`;
});

productKoaRouter.put("/:id", async (ctx) => {
  const { nombre, descripcion, codigo, foto, precio, stock } = ctx.request.body;
  const id = ctx.params.id;
  if (!id) {
    ctx.status = 404;
  } else {
    const newProduct = {
      nombre: nombre,
      descripcion: descripcion,
      codigo: codigo,
      foto: foto,
      precio: precio,
      stock: stock,
    };
    await db.updateById(id, newProduct);
    ctx.body = `Product updated`;
  }
});

productKoaRouter.delete("/:id", async (ctx) => {
  const id = ctx.params.id;
  if (!id) {
    ctx.status = 404;
  } else {
    const productDelete = await db.deleteById(id);
    ctx.body = `Producto eliminado`;
  }
});

module.exports = productKoaRouter;
