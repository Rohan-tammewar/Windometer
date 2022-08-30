"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDistrictData = exports.getAllDistrictList = exports.getAllDistrictData = void 0;
const districtdata_1 = require("../models/districtdata");
const getAllDistrictData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const districtData = yield districtdata_1.DistrictData.findAll();
    return res.status(200).json({
        message: "District Data fetched successfully",
        data: districtData,
    });
});
exports.getAllDistrictData = getAllDistrictData;
const getAllDistrictList = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const districtData = yield districtdata_1.DistrictData.findAll({
        attributes: ["name"],
    });
    return res.status(200).json({
        message: "District Data fetched successfully",
        data: districtData,
    });
});
exports.getAllDistrictList = getAllDistrictList;
const addDistrictData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var districtdata = yield districtdata_1.DistrictData.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "District data added successfully", data: districtdata });
});
exports.addDistrictData = addDistrictData;
