import { Router } from "express";

import inventoryController from "../inventory/inventory.controller";

const router = Router();

router.get("/inventory", [inventoryController.getProductsInventory]);

router.put("/inventory", [inventoryController.removeProductInventory]);


// router.post("/updateProduct/:id", [productController.updateProduct]);

// router.put("/cuenta/:accountId/desactivar", [
// 	productController.postDeleteUserAccount,
// ]);

// // Signup
// router.post("/signup", [
// 	productController.postSignup,
// ]);

export default router;
