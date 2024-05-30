/* eslint-disable no-case-declarations */
import { Request, Response } from "express";
import ServerConstants from "../../classes/constants";
import asyncWrapper from "../../middleware/asyncWrapper";
import { getAllProductsInventory, postProductInventory } from "./inventory.feature";
import { IInventory } from "./Inventory";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { OK, BAD_REQUEST } = ServerConstants.HTTP_STATUS_CODES;

const getProductsInventory = async (req: Request, res: Response) => {
	const products = await getAllProductsInventory();
	
	return res.status(OK).json(products);
};

const createProductInventory = async (req: Request, res: Response) => {
	console.log("req.params", req.body);
	const { id_producto, id_tienda, cantidad } = req.body;
	const productInventory: IInventory = {
		"id_producto": id_producto,
		"id_tienda": id_tienda,
		"cantidad": cantidad,
	}

	try {
		await postProductInventory(productInventory)
	} catch (error) {
		console.log("error", error);	
	}

	// const products = await postProduct();
	
	// return res.status(OK).json(products);
};

export default {
	getProductsInventory: asyncWrapper(getProductsInventory),
	createProductInventory: asyncWrapper(createProductInventory)
};
