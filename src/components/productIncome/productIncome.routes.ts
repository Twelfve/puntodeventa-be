import { Router } from "express";

import productController from "./productIncome.controller";

const router = Router();

router.get("/productIncomes", [productController.getProductIncomes]);

router.post("/createProductIncome", [productController.createProductIncome]);

router.put("/updateProduct", [productController.updateProductIncome]);

// router.put("/cuenta/:accountId/desactivar", [
// 	productController.postDeleteUserAccount,
// ]);

// // Signup
// router.post("/signup", [
// 	productController.postSignup,
// ]);

export default router;
