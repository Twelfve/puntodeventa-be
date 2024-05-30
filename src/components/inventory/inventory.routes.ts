import { Router } from "express";

import productController from "./product.controller";

const router = Router();

router.get("/products", [
	productController.getProducts,
]);

router.get("/product/:id", [
	productController.getProduct,
]);

router.post("/createProduct", [
	productController.createProduct,
]);

router.post("/updateProduct/:id", [
	productController.updateProduct,
]);

// router.put("/cuenta/:accountId/desactivar", [
// 	productController.postDeleteUserAccount,
// ]);

// // Signup
// router.post("/signup", [
// 	productController.postSignup,
// ]);

export default router;
