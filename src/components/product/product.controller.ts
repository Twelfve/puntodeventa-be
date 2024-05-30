/* eslint-disable no-case-declarations */
import { Request, Response } from "express";
import ServerConstants from "../../classes/constants";
import asyncWrapper from "../../middleware/asyncWrapper";
import { getAllProducts, getSingleProduct, postProduct, putProduct } from "./product.feature";
import { IProduct } from "./Product";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { OK, BAD_REQUEST } = ServerConstants.HTTP_STATUS_CODES;

const getProducts = async (req: Request, res: Response) => {
	const products = await getAllProducts();
	
	return res.status(OK).json(products);
};

const getProduct = async (req: Request, res: Response) => {
	console.log("req.params", req.params);
	
	const { id } = req.params;
	const products = await getSingleProduct(parseInt(id, 10));
	
	return res.status(OK).json(products);
};

const createProduct = async (req: Request, res: Response) => {
	console.log("req.params", req.body);
	const { nombre, marca } = req.body;
	const product: IProduct = {
		"nombre": nombre,
		"marca": marca,
	}

	try {
		await postProduct(product)
	} catch (error) {
		console.log("error", error);	
	}

	// const products = await postProduct();
	
	// return res.status(OK).json(products);
};

const updateProduct = async (req: Request, res: Response) => {
	console.log("req.params", req.body);
	const { id } = req.params;
	const { nombre, marca } = req.body;
	const product: Partial<IProduct> = {
		"nombre": nombre,
		"marca": marca,
	}

	try {
		await putProduct(parseInt(id, 10), product);
	} catch (error) {
		console.log("error", error);	
	}

	// const products = await postProduct();
	
	// return res.status(OK).json(products);
};

export default {
	getProducts: asyncWrapper(getProducts),
	getProduct: asyncWrapper(getProduct),
	createProduct: asyncWrapper(createProduct),
	updateProduct: asyncWrapper(updateProduct),
};
