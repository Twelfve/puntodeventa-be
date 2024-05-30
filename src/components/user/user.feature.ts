// const axios = require("axios").default;
import { Sequelize } from "sequelize";
// import { Product } from './Product';
import Database from "../../classes/database";
import { IUser } from "./User";
import Transaction from "../../classes/transaction";

export const getAllUsers = async () => {
    const { User } = Database.models;
    // console.log("Database.models", Database.models);
    try {
        const results = await User.findAll();
        console.log(results);
        return results;
      } catch (error) {
        console.error('Error fetching products:', error);
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