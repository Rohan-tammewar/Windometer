"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const districtdata_1 = require("./../models/districtdata");
const sequelize_typescript_1 = require("sequelize-typescript");
const winddata_1 = require("../models/winddata");
require("dotenv").config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "mysql",
    host: "localhost",
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "brillio",
    logging: false,
    models: [winddata_1.WindData, districtdata_1.DistrictData],
    timezone: '+05:30'
});
exports.default = connection;
