// const axios = require("axios").default;
import { Sequelize } from "sequelize";
// import { Product } from './Product';
import Database from "../../classes/database";
import { IProduct } from "./Product";
import Transaction from "../../classes/transaction";

export const getAllProducts = async () => {
    const { Product } = Database.models;
    console.log("Database.models", Database.models);
    try {
        const results = await Product.findAll();
        console.log(results);
        return results;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
};

export const getSingleProduct = async (productId: number) => {
    const { Product } = Database.models;
    console.log("Database.models", Database.models);
    try {
        const results = await Product.findByPk(productId);
        console.log(results);
        return results;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
};

export const postProduct = async (product: IProduct) => {
  const { Product } = Database.models;
  await Transaction.start();
	await Product.create({
    nombre: product.nombre,
    marca: product.marca,
  });
	await Transaction.commit();
};

export const putProduct = async (productId: number, attributes: Partial<IProduct>) => {
  const { Product } = Database.models;
  const { nombre, marca } = attributes;
  console.log("attributes", attributes);
  
  await Transaction.start();
	await Product.update({ nombre: nombre, marca: marca}, { where: { id_producto: productId } });
	await Transaction.commit();
};