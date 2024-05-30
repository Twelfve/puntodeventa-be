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
        const results = await ProductIncome.findAll({ include: [
          {
            model: Database.models.Product,
          },
          {
            model: Database.models.Store,
          }
      ]});
        // console.log(results);
        return results;
      } catch (error) {
        console.error('Error fetching products:', error);
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

export const putProductIncome = async (productIncomeId: number, attributes: Partial<IProductIncome>) => {
  const { ProductIncome } = Database.models;
  const { id_producto, id_tienda, fecha_ingreso, cantidad_ingreso } = attributes;
  console.log("attributes", attributes);
  
  await Transaction.start();
	await ProductIncome.update({
    id_producto: id_producto,
    id_tienda: id_tienda,
    fecha_ingreso: fecha_ingreso,
    cantidad_ingreso: cantidad_ingreso
  },
  {where: { id_ingreso: productIncomeId } });
	await Transaction.commit();
};