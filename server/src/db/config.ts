import { DistrictData } from "./../models/districtdata";
import { Sequelize } from "sequelize-typescript";
import { WindData } from "../models/winddata";
require("dotenv").config()


const connection = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: "brillio",
  logging: false,
  models: [WindData, DistrictData],
  timezone: '+05:30'
});

export default connection;
