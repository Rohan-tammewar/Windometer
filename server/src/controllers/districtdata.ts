import { RequestHandler } from "express";
import { DistrictData } from "../models/districtdata";

export const getAllDistrictData: RequestHandler = async (req, res, next) => {
  const districtData: DistrictData[] = await DistrictData.findAll();
  return res.status(200).json({
    message: "District Data fetched successfully",
    data: districtData,
  });
};

export const getAllDistrictList: RequestHandler = async (req, res, next) => {
  const districtData: DistrictData[] = await DistrictData.findAll({
    attributes: ["name"],
  });
  return res.status(200).json({
    message: "District Data fetched successfully",
    data: districtData,
  });
};

export const addDistrictData: RequestHandler = async (req, res, next) => {
  try {
    var districtdata = await DistrictData.create({ ...req.body });
    return res
      .status(200)
      .json({ message: "District data added successfully", data: districtdata });
  } catch (error) {
    //TODO: error handling
    return res.json({
      message: "Unable to add data"
    })

  }
};
