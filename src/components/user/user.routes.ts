import { Router } from "express";

import userController from "./user.controller";

const router = Router();

router.get("/users", [
	userController.getUsers,
]);

// router.put("/cuenta/:accountId/desactivar", [
// 	productController.postDeleteUserAccount,
// ]);

// // Signup
// router.post("/signup", [
// 	productController.postSignup,
// ]);

export default router;
