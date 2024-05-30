import { Router } from "express";

import storeController from "./store.controller";

const router = Router();

router.get("/stores", [
	storeController.getStores,
]);

// router.put("/cuenta/:accountId/desactivar", [
// 	productController.postDeleteUserAccount,
// ]);

// // Signup
// router.post("/signup", [
// 	productController.postSignup,
// ]);

export default router;
