/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model, DataTypes, Sequelize } from "sequelize";
import { Product } from '../product/Product';

export interface IStore {
	id_tienda?: number;
	nombre_tienda?: string;
	ubicacion?: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
  

export class Store extends Model<IStore, Partial<IStore>> implements Model {
	public id_tienda?: number;
	public nombre_tienda?: string;
	public ubicacion?: string;
	public createdAt?: Date;
	public updatedAt?: Date;
	public deletedAt?: Date;

	public static associate(models: { [key: string]: any }) {
		// ProductIncome.belongsTo(models.Location, {
		// 	foreignKey: "locationId",
		// 	as: "location",
		// });
		// Store.hasMany(models.Product, {
		// 	foreignKey: "id_producto",
		// 	as: "producto",
		// });
		// ProductIncome.hasMany(models.Payment, {
		// 	foreignKey: "userId",
		// 	as: "payments",
		// });
	}
}

export const StoreFactory = (sequelize: Sequelize) => {
	Store.init(
		{
			id_tienda: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
			nombre_tienda: { type: DataTypes.STRING },
			ubicacion: { type: DataTypes.STRING },
			createdAt: { type: DataTypes.DATE },
			updatedAt: { type: DataTypes.DATE },
			deletedAt: { type: DataTypes.DATE },
		},
		{ sequelize, tableName: "tienda", timestamps: true, paranoid: true }
	);
	return Store;
};
