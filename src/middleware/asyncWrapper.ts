/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";

export default function asyncWrapper(
	fn: (reqType: Request, resType: Response, next: NextFunction) => any
) {
	return function asyncUtilWrap(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		return Promise.resolve(fn(req, res, next)).catch(next);
	};
}
