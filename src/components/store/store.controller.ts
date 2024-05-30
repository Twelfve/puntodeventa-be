/* eslint-disable no-case-declarations */
import { Request, Response } from "express";
import ServerConstants from "../../classes/constants";
import asyncWrapper from "../../middleware/asyncWrapper";
import { getAllStores } from "./store.feature";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { OK, BAD_REQUEST } = ServerConstants.HTTP_STATUS_CODES;

const getStores = async (req: Request, res: Response) => {
	const stores = await getAllStores();
	
	return res.status(OK).json(stores);
};

export default {
	getStores: asyncWrapper(getStores)
};
