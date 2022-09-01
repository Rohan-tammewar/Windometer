import { Router } from "express";


import {
  getAllWindData,
  AverageWindSpeed,
  saveWindData,
  getMaxWindSpeed,
  getWindDirectionOccurance,
  getProbability
} from "../controllers/winddata";

const router = Router();
router.post("/save", saveWindData);

router.get("/getAllWindData", getAllWindData);

router.post("/AverageWindSpeed", AverageWindSpeed);

router.post("/getProbability", getProbability);

router.get("/getMaxWindSpeed", getMaxWindSpeed);

router.get("/getWindDirectionOccurance", getWindDirectionOccurance)




export default router;
