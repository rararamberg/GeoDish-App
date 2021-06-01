import { Router } from "express";
import * as controllers from "../controllers/dishes.js";
import restrict from "../helper/restrict.js";

const router = Router();

router.get("/dishes", controllers.getDishes);
router.get("/dishes/:id", controllers.getDish);
router.post("/dishes", restrict, controllers.createDish);
router.put("/dishes/:id", restrict, controllers.updateDish);
router.delete("/dishes/:id", restrict, controllers.deleteDish);

export default router;
