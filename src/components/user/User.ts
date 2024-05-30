/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model, DataTypes, Sequelize } from "sequelize";
import { Product } from '../product/Product';

export interface IUser {
	id_usuario?: number;
	nombre?: string;
	id_tienda?: number;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
  

export class User extends Model<IUser, Partial<IUser>> implements Model {
	public id_usuario?: number;
	public nombre?: string;
	public id_tienda?: number;
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

export const UserFactory = (sequelize: Sequelize) => {
	User.init(
		{
			id_usuario: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
			nombre: { type: DataTypes.STRING },
			id_tienda: { type: DataTypes.INTEGER },
			createdAt: { type: DataTypes.DATE },
			updatedAt: { type: DataTypes.DATE },
			deletedAt: { type: DataTypes.DATE },
		},
		{ sequelize, tableName: "usuario", timestamps: true, paranoid: true }
	);
	return User;
};
