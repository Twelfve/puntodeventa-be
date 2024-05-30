// const axios = require("axios").default;
import { Sequelize } from "sequelize";
// import { Product } from './Product';
import Database from "../../classes/database";
import { IInventory } from "./Inventory";
import Transaction from "../../classes/transaction";

export const getAllProductsInventory = async () => {
    const { Inventory } = Database.models;
    console.log("Database.models", Database.models);
    try {
        const results = await Inventory.findAll();
        console.log(results);
        return results;
      } catch (error) {
        console.error('Error fetching products:', error);
      }
};

export const postProductInventory = async (productInventory: IInventory) => {
  const { Inventory } = Database.models;
  await Transaction.start();
	await Inventory.create({
    id_producto: productInventory.id_producto,
    id_tienda: productInventory.id_tienda,
    cantidad: productInventory.cantidad
  });
	await Transaction.commit();
};

// export const putProduct = async (productId: number, attributes: Partial<IProduct>) => {
//   const { Product } = Database.models;
//   const { nombre, marca } = attributes;
//   console.log("attributes", attributes);
  
//   await Transaction.start();
// 	await Product.update({ nombre: nombre, marca: marca}, { where: { id_producto: productId } });
// 	await Transaction.commit();
// };