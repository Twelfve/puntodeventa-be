/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model, DataTypes, Sequelize } from "sequelize";
import { Product } from '../product/Product';

export interface IProductIncome {
	id_ingreso?: number;
	id_producto?: number;
	id_tienda?: number;
	fecha_ingreso?: Date;
	cantidad_ingreso?: number;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
  

export class ProductIncome extends Model<IProductIncome, Partial<IProductIncome>> implements Model {
	public id_ingreso?: number;
	public id_producto?: number;
	public id_tienda?: number;
	public fecha_ingreso?: Date;
	public cantidad_ingreso?: number;
	public createdAt?: Date;
	public updatedAt?: Date;
	public deletedAt?: Date;

	public static associate(models: { [key: string]: any }) {
		// ProductIncome.belongsTo(models.Location, {
		// 	foreignKey: "locationId",
		// 	as: "location",
		// });
		ProductIncome.hasOne(models.Product, {
			foreignKey: "id_producto",
			as: "producto",
		});
		ProductIncome.hasOne(models.Store, {
			foreignKey: "id_tienda",
			as: "tienda",
		});
		// ProductIncome.hasMany(models.Payment, {
		// 	foreignKey: "userId",
		// 	as: "payments",
		// });
	}
}

export const ProductIncomeFactory = (sequelize: Sequelize) => {
	ProductIncome.init(
		{
			id_ingreso: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
			id_producto: { type: DataTypes.INTEGER },
			id_tienda: { type: DataTypes.INTEGER },
			fecha_ingreso: { type: DataTypes.DATE },
			cantidad_ingreso: { type: DataTypes.INTEGER },
			createdAt: { type: DataTypes.DATE },
			updatedAt: { type: DataTypes.DATE },
			deletedAt: { type: DataTypes.DATE },
		},
		{ sequelize, tableName: "ingresoproducto", timestamps: true, paranoid: true }
	);
	return ProductIncome;
};
