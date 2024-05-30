/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model, DataTypes, Sequelize } from "sequelize";
import { Product } from "../product/Product";

export interface IInventory {
  id_inventario?: number;
  id_producto?: number;
  id_tienda?: number;
  cantidad?: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export class Inventory
  extends Model<IInventory, Partial<IInventory>>
  implements Model
{
  public id_inventario?: number;
  public id_producto?: number;
  public id_tienda?: number;
  public cantidad?: number;
  public createdAt?: Date;
  public updatedAt?: Date;
  public deletedAt?: Date;

  public static associate(models: { [key: string]: any }) {
    // ProductIncome.belongsTo(models.Location, {
    // 	foreignKey: "locationId",
    // 	as: "location",
    // });
    Inventory.hasMany(models.Product, {
      foreignKey: "id_producto",
      as: "producto",
    });
    Inventory.hasMany(models.Store, {
      foreignKey: "id_tienda",
      as: "tienda",
    });
    // ProductIncome.hasMany(models.Payment, {
    // 	foreignKey: "userId",
    // 	as: "payments",
    // });
  }
}

export const InventoryFactory = (sequelize: Sequelize) => {
  Inventory.init(
    {
      id_inventario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_producto: { type: DataTypes.INTEGER },
      id_tienda: { type: DataTypes.INTEGER },
      cantidad: { type: DataTypes.INTEGER },
    },
    { sequelize, tableName: "inventario", timestamps: false, paranoid: true }
  );
  return Inventory;
};
