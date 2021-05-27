import { Router } from "express";
import dishesRoutes from "./dishes.js";
import usersRoutes from "./users.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", usersRoutes);
router.use("/", dishesRoutes);

export default router;
