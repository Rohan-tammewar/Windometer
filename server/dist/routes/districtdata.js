"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const districtdata_1 = require("../controllers/districtdata");
const router = (0, express_1.Router)();
router.get("/getAllDistrictData", districtdata_1.getAllDistrictData);
router.get("/getAllDistrictList", districtdata_1.getAllDistrictList);
router.post("/save", districtdata_1.addDistrictData);
exports.default = router;
