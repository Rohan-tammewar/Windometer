import { Router } from "express";

import {
  getAllWindData,
  getAverageWindSpeed,
  saveWindData,
  getMaxWindSpeed
} from "../controllers/winddata";

const router = Router();
router.post("/save", saveWindData);

router.get("/getAllWindData", getAllWindData);

router.get("/getAverageWindSpeed", getAverageWindSpeed);

router.get("/getMaxWindSpeed", getMaxWindSpeed);

export default router;
