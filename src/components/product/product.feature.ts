// const axios = require("axios").default;
import { Sequelize } from "sequelize";
// import { Product } from './Product';
import Database from "../../classes/database";

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
