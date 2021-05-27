import { Router } from "express";
import * as controllers from "../controllers/dishes.js";
import restrict from "../helpers/restrict.js";

const router = Router();

router.get("/dishes", controllers.getDishes);
router.get("/dishes/:id", controllers.getDish);
router.post("/dishes", controllers.createDish);
router.put("/dishes/:id", controllers.updateDish);
router.delete("/dishes/:id", controllers.deleteDish);

export default router;
