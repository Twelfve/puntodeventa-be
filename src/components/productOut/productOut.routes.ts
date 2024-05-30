import { Router } from "express";

import productController from "./productOut.controller";

const router = Router();

router.get("/products", [productController.getProductOuts]);

router.post("/createProduct", [productController.createProductOut]);

router.put("/updateProduct", [productController.updateProductOut]);

// router.put("/cuenta/:accountId/desactivar", [
// 	productController.postDeleteUserAccount,
// ]);

// // Signup
// router.post("/signup", [
// 	productController.postSignup,
// ]);

export default router;
