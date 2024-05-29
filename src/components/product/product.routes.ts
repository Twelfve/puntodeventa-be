import { Router } from "express";

import productController from "./product.controller";

const router = Router();

router.get("/products", [
	productController.getProducts,
]);

// router.put("/cuenta/:accountId/desactivar", [
// 	productController.postDeleteUserAccount,
// ]);

// // Signup
// router.post("/signup", [
// 	productController.postSignup,
// ]);

export default router;
