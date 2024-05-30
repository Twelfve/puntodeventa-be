// const axios = require("axios").default;
import { Sequelize } from "sequelize";
// import { Product } from './Product';
import Database from "../../classes/database";
import Transaction from "../../classes/transaction";
import { IProductIncome } from "./ProductIncome";

export const getAllProductIncomes = async () => {
  const { ProductIncome } = Database.models;
  console.log("Database.models", Database.models);
  try {
    const results = await ProductIncome.findAll({
      include: [
        {
          model: Database.models.Product,
        },
        {
          model: Database.models.Store,
        },
      ],
    });
    // console.log(results);
    return results;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

export const postProductIncome = async (product: IProductIncome) => {
  const { ProductIncome } = Database.models;
  await Transaction.start();
  await ProductIncome.create({
    id_producto: product.id_producto,
    id_tienda: product.id_tienda,
    fecha_ingreso: product.fecha_ingreso,
    cantidad_ingreso: product.cantidad_ingreso,
  });
  await Transaction.commit();
};

export const putProductIncome = async (attributes: Partial<IProductIncome>) => {
  const { Inventory, ProductIncome } = Database.models;
  const { id_producto, id_tienda, fecha_ingreso, cantidad_ingreso } =
    attributes;

  await Transaction.start();
  const inventory = await Inventory.findAll({
    where: { id_producto: id_producto, id_tienda: id_tienda },
  });

  const inventoryArray = JSON.parse(JSON.stringify(inventory));

  if (inventory.length == 0) {
    await ProductIncome.create({
      id_producto: id_producto,
      id_tienda: id_tienda,
      fecha_ingreso: fecha_ingreso,
      cantidad_ingreso: cantidad_ingreso,
    });
    await Inventory.create({
      id_producto: id_producto,
      id_tienda: id_tienda,
      cantidad: cantidad_ingreso,
    });
  } else {
    await ProductIncome.create({
      id_producto: id_producto,
      id_tienda: id_tienda,
      fecha_ingreso: fecha_ingreso,
      cantidad_ingreso: cantidad_ingreso,
    });
    await Inventory.update(
      {
        cantidad: inventoryArray[0].cantidad + cantidad_ingreso,
      },
      { where: { id_producto: id_producto, id_tienda: id_tienda } }
    );
  }

  await Transaction.commit();
};
