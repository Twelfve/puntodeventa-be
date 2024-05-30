/* eslint-disable no-case-declarations */
import { Request, Response } from "express";
import ServerConstants from "../../classes/constants";
import asyncWrapper from "../../middleware/asyncWrapper";
import {
  getAllProductOuts,
  postProductOut,
  putProductOut,
} from "./productOut.feature";
import { IProductOut } from "./ProductOut";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { OK, BAD_REQUEST } = ServerConstants.HTTP_STATUS_CODES;

const getProductOuts = async (req: Request, res: Response) => {
  const productOuts = await getAllProductOuts();

  return res.status(OK).json(productOuts);
};

const createProductOut = async (req: Request, res: Response) => {
  console.log("req.params", req.body);
  const { id_producto, id_tienda, fecha_salida, cantidad_salida } = req.body;
  const productOut: IProductOut = {
    id_producto: id_producto,
    id_tienda: id_tienda,
    fecha_salida: fecha_salida,
    cantidad_salida: cantidad_salida,
  };

  try {
    await postProductOut(productOut);
  } catch (error) {
    console.log("error", error);
  }

  // const products = await postProduct();

  // return res.status(OK).json(products);
};

const updateProductOut = async (req: Request, res: Response) => {
  const { id_producto, id_tienda, fecha_salida, cantidad_salida } = req.body;
  const productOut: Partial<IProductOut> = {
    id_producto: id_producto,
    id_tienda: id_tienda,
    fecha_salida: fecha_salida,
    cantidad_salida: cantidad_salida,
  };

  try {
    await putProductOut(productOut);
  } catch (error) {
    console.log("error", error);
  }

  // const products = await postProduct();

  // return res.status(OK).json(products);
};

export default {
  getProductOuts: asyncWrapper(getProductOuts),
  createProductOut: asyncWrapper(createProductOut),
  updateProductOut: asyncWrapper(updateProductOut),
};
