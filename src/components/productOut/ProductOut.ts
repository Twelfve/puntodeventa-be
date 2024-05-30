/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model, DataTypes, Sequelize } from "sequelize";
import { Product } from "../product/Product";

export interface IProductOut {
  id_salida?: number;
  id_producto?: number;
  id_tienda?: number;
  fecha_salida?: Date;
  cantidad_salida?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class ProductOut
  extends Model<IProductOut, Partial<IProductOut>>
  implements Model
{
  public id_salida?: number;
  public id_producto?: number;
  public id_tienda?: number;
  public fecha_salida?: Date;
  public cantidad_salida?: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;

  public static associate(models: { [key: string]: any }) {
    // ProductIncome.belongsTo(models.Location, {
    // 	foreignKey: "locationId",
    // 	as: "location",
    // });
    ProductOut.hasMany(models.Product, {
      foreignKey: "id_producto",
      as: "producto",
    });
    ProductOut.hasMany(models.Store, {
      foreignKey: "id_tienda",
      as: "tienda",
    });
    // ProductIncome.hasMany(models.Payment, {
    // 	foreignKey: "userId",
    // 	as: "payments",
    // });
  }
}

export const ProductOutFactory = (sequelize: Sequelize) => {
  ProductOut.init(
    {
      id_salida: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_producto: { type: DataTypes.INTEGER },
      id_tienda: { type: DataTypes.INTEGER },
      fecha_salida: { type: DataTypes.DATE },
      cantidad_salida: { type: DataTypes.INTEGER },
    },
    {
      sequelize,
      tableName: "salidaproducto",
      timestamps: false,
      paranoid: true,
    }
  );
  return ProductOut;
};
