/* eslint-disable no-case-declarations */
import { Request, Response } from "express";
import ServerConstants from "../../classes/constants";
import asyncWrapper from "../../middleware/asyncWrapper";
import { getAllUsers } from "./user.feature";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { OK, BAD_REQUEST } = ServerConstants.HTTP_STATUS_CODES;

const getUsers = async (req: Request, res: Response) => {
	const users = await getAllUsers();
	
	return res.status(OK).json(users);
};

export default {
	getUsers: asyncWrapper(getUsers)
};
