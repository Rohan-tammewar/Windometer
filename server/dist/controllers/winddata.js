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
exports.getMaxWindSpeed = exports.getAverageWindSpeed = exports.saveWindData = exports.getAllWindData = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const winddata_1 = require("../models/winddata");
const getAllWindData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const winddata = yield winddata_1.WindData.findAll();
    return res
        .status(200)
        .json({ message: "All Wind Data fetched successfully", data: winddata });
});
exports.getAllWindData = getAllWindData;
//Determine district
const saveWindData = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var winddata = yield winddata_1.WindData.create(Object.assign({}, req.body));
    return res
        .status(200)
        .json({ message: "wind data updated successfully", data: winddata });
});
exports.saveWindData = saveWindData;
const getAverageWindSpeed = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e;
    const district = (_a = req.query) === null || _a === void 0 ? void 0 : _a.district;
    const sourceDirection = (_b = req.query) === null || _b === void 0 ? void 0 : _b.sourceDirection;
    const destinationDirection = (_c = req.query) === null || _c === void 0 ? void 0 : _c.destinationDirection;
    //TODO: Between below time range
    const timeStart = (_d = req.query) === null || _d === void 0 ? void 0 : _d.timeStart;
    const timeEnd = (_e = req.query) === null || _e === void 0 ? void 0 : _e.timeEnd;
    const winddata = yield winddata_1.WindData.findAll({
        attributes: [[sequelize_typescript_1.Sequelize.fn("avg", sequelize_typescript_1.Sequelize.col("speed")), "AverageSpeed"]],
        where: {
            district,
            sourceDirection,
            destinationDirection,
            // date: {
            //   [Op.between]: [timeStart, timeEnd],
            // },
        },
    });
    return res
        .status(200)
        .json({ message: "All Wind Data fetched successfully", data: winddata });
});
exports.getAverageWindSpeed = getAverageWindSpeed;
// select speed from winddata where date between '2022-08-15 00:00:00' and '2022-08-30 00:00:00';
const getMaxWindSpeed = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    //TODO: Determine range and number of occurance
    const maxSpeed = yield winddata_1.WindData.findOne({
        attributes: [[sequelize_typescript_1.Sequelize.fn("max", sequelize_typescript_1.Sequelize.col("speed")), "MaxSpeed"]],
    });
    const allData = yield winddata_1.WindData.findAll();
    let maxSpeed2 = -1;
    allData.forEach((element) => {
        maxSpeed2 = Math.max(Number(maxSpeed2), Number(element.speed));
    });
    const range1 = maxSpeed2 + 5;
    const range2 = maxSpeed2 - 5;
    let count = 0;
    allData.forEach((element) => {
        if (element.speed <= range1 && element.speed >= range2)
            count++;
    });
    return res.status(200).json({
        message: "All Wind Data fetched successfully",
        data: {
            range1,
            range2,
            count,
            maxSpeed,
        },
    });
});
exports.getMaxWindSpeed = getMaxWindSpeed;
