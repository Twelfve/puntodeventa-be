/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model, DataTypes, Sequelize } from "sequelize";

export interface IProduct {
  id_producto?: number;
  nombre?: string;
  marca?: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class Product
  extends Model<IProduct, Partial<IProduct>>
  implements Model
{
  public id_producto?: number;
  public nombre?: string;
  public marca?: string;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;

  // public static associate(models: { [key: string]: any }) {
  // 	Product.belongsTo(models.ProductIncome);
  // 	Product.hasMany(models.Account, {
  // 		foreignKey: "userId",
  // 		as: "accounts",
  // 	});
  // 	Product.hasMany(models.Payment, {
  // 		foreignKey: "userId",
  // 		as: "payments",
  // 	});
  // }
}

export const ProductFactory = (sequelize: Sequelize) => {
  Product.init(
    {
      id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: { type: DataTypes.STRING },
      marca: { type: DataTypes.STRING },
    },
    { sequelize, tableName: "producto", timestamps: false, paranoid: true }
  );
  return Product;
};
