/* eslint-disable no-case-declarations */
import { Request, Response } from "express";
// import {
// 	changeUserPassword,
// 	findUserAccountPayments,
// 	findCurrentUserInSession,
// 	login,
// 	signup,
// 	sendUserPasswordResetEmail,
// 	addUserAccount,
// 	deleteUserAccount,
// 	findUserAccounts,
// } from "./product.feature";
import ServerConstants from "../../classes/constants";
import asyncWrapper from "../../middleware/asyncWrapper";
import { getAllProducts } from "./product.feature";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { OK, BAD_REQUEST } = ServerConstants.HTTP_STATUS_CODES;

const getProducts = async (req: Request, res: Response) => {
	const products = await getAllProducts();
	return res.status(OK).json(products);
	// const user = req.user as User;
	// const { fullName, ...data } = await findCurrentUserInSession(user);
	// const msg = "Usuario de la sesión: " + fullName;
	// return res.status(OK).json({ msg, fullName, data });
};
  

export default {
	getProducts: asyncWrapper(getProducts),
};
