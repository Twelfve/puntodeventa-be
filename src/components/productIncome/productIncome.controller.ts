/* eslint-disable no-case-declarations */
import { Request, Response } from "express";
import ServerConstants from "../../classes/constants";
import asyncWrapper from "../../middleware/asyncWrapper";
import {
  getAllProductIncomes,
  postProductIncome,
  putProductIncome,
} from "./productIncome.feature";
import { IProductIncome } from "./ProductIncome";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { OK, BAD_REQUEST } = ServerConstants.HTTP_STATUS_CODES;

const getProductIncomes = async (req: Request, res: Response) => {
  const products = await getAllProductIncomes();

  return res.status(OK).json(products);
};

const createProductIncome = async (req: Request, res: Response) => {
  console.log("req.params", req.body);
  const { id_producto, id_tienda, fecha_ingreso, cantidad_ingreso } = req.body;
  const productIncome: IProductIncome = {
    id_producto: id_producto,
    id_tienda: id_tienda,
    fecha_ingreso: fecha_ingreso,
    cantidad_ingreso: cantidad_ingreso,
  };

  try {
    await postProductIncome(productIncome);
  } catch (error) {
    console.log("error", error);
  }

  // const products = await postProduct();

  // return res.status(OK).json(products);
};

const updateProductIncome = async (req: Request, res: Response) => {
  const { id_producto, id_tienda, fecha_ingreso, cantidad_ingreso } = req.body;
  const product: Partial<IProductIncome> = {
    id_producto: id_producto,
    id_tienda: id_tienda,
    fecha_ingreso: fecha_ingreso,
    cantidad_ingreso: cantidad_ingreso,
  };

  try {
    await putProductIncome(product);
  } catch (error) {
    console.log("error", error);
  }

  // const products = await postProduct();

  // return res.status(OK).json(products);
};

export default {
  getProductIncomes: asyncWrapper(getProductIncomes),
  createProductIncome: asyncWrapper(createProductIncome),
  updateProductIncome: asyncWrapper(updateProductIncome),
};
