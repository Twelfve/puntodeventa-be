// const axios = require("axios").default;
import { Sequelize } from "sequelize";
// import { Product } from './Product';
import Database from "../../classes/database";
import { IStore } from "./Store";
import Transaction from "../../classes/transaction";

export const getAllStores = async () => {
  const { Store, User } = Database.models;
  // console.log("Database.models", Database.models);
  try {
    const stores = await Store.findAll();
    const user = await User.findAll();
    const results = { stores: stores, user: user };
    console.log(results);
    return results;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};

// export const getSingleProduct = async (productId: number) => {
//     const { Product } = Database.models;
//     console.log("Database.models", Database.models);
//     try {
//         const results = await Product.findByPk(productId);
//         console.log(results);
//         return results;
//       } catch (error) {
//         console.error('Error fetching products:', error);
//       }
// };
