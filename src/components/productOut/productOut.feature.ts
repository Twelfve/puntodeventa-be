// const axios = require("axios").default;
import { Sequelize } from "sequelize";
// import { Product } from './Product';
import Database from "../../classes/database";
import { IProductOut } from "./ProductOut";
import Transaction from "../../classes/transaction";

export const getAllProductOuts = async () => {
  const { Product } = Database.models;
  console.log("Database.models", Database.models);
  try {
    const results = await Product.findAll();
    console.log(results);
    return results;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const postProductOut = async (productOut: IProductOut) => {
  const { ProductOut } = Database.models;
  await Transaction.start();
  await ProductOut.create({
    id_producto: productOut.id_producto,
    id_tienda: productOut.id_tienda,
    fecha_salida: productOut.fecha_salida,
    cantidad_salida: productOut.cantidad_salida,
  });
  await Transaction.commit();
};

export const putProductOut = async (attributes: Partial<IProductOut>) => {
  const { Inventory, ProductOut } = Database.models;
  const { id_producto, id_tienda, fecha_salida, cantidad_salida } = attributes;

  await Transaction.start();
  const inventory = await Inventory.findAll({
    where: { id_producto: id_producto, id_tienda: id_tienda },
  });

  const inventoryArray = JSON.parse(JSON.stringify(inventory));

  if (inventory.length != 0) {
    await ProductOut.create({
      id_producto: id_producto,
      id_tienda: id_tienda,
      fecha_salida: fecha_salida,
      cantidad_salida: cantidad_salida,
    });
    if (cantidad_salida) {
      await Inventory.update(
        {
          cantidad: inventoryArray[0].cantidad - cantidad_salida,
        },
        { where: { id_producto: id_producto, id_tienda: id_tienda } }
      );
    }
  }
  await Transaction.commit();
};
