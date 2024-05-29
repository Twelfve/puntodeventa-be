/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { Sequelize } from "sequelize";
import { environment } from "../../environments/environment";
import { ProductFactory } from "../components/product/Product";

const MYSQL_PORT: any = process.env.MYSQL_PORT ? process.env.MYSQL_PORT : 3306;

class Database {
	public static instance: Sequelize;
	public static models: { [key: string]: any };

	public static init() {
		this.instance = new Sequelize(
			process.env.DB || "",
			process.env.DB_USER || "",
			process.env.DB_PASSWORD || "",
			{
				host: process.env.DB_IP || "",
				port: 3306,
				dialect: "mysql",
				logging: console.log,
				dialectOptions: {
				  dateStrings: true,
				  typeCast: (field: any, next: any) => {
					if (field.type === "DATETIME") {
					  return new Date(field.string() + "Z");
					}
					return next();
				  },
				},
				pool: {
				  max: 5,
				  min: 0,
				  idle: 10000,
				},
			}
		);
	}

	public static async authenticate() {
		await this.instance.authenticate();
	}

	public static async initModels() {
		this.models = {
			Product: ProductFactory(this.instance),
		};
		for (const key in this.models) {
			if (this.models[key].associate) {
				this.models[key].associate(this.models);
			}
		}
	}
}

export default Database;