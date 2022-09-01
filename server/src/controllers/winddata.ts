import { RequestHandler } from "express";
import { Sequelize } from "sequelize-typescript";
import { Op } from "sequelize";
import moment from "moment";
import { WindData } from "../models/winddata";
import { MaxNumberOfWindDirection } from "../utilities/maxspeedocc";
import { Json } from "sequelize/types/utils";
import { moveMessagePortToContext } from "worker_threads";

export const getAllWindData: RequestHandler = async (req, res, next) => {
  const winddata: WindData[] = await WindData.findAll();
  return res
    .status(200)
    .json({ message: "All Wind Data fetched successfully", data: winddata });
};
//Determine district


export const saveWindData: RequestHandler = async (req, res, next) => {
  try {
    var winddata = await WindData.create({ ...req.body });

    return res
      .status(200)
      .json({ message: "wind data updated successfully", data: winddata });
  } catch (error) {
    console.error(error)
  }

};

export const AverageWindSpeed: RequestHandler = async (req, res, next) => {
  const district = req.body?.district;
  const sourceDirection = req.body?.sourceDirection;
  const destinationDirection = req.body?.destinationDirection;
  //TODO: Between below time range
  const timeStart = req.body?.timeStart;
  const timeEnd = req.body?.timeEnd;

  const winddata = await WindData.findAll({
    attributes: [[Sequelize.fn("avg", Sequelize.col("speed")), "AverageSpeed"]],
    where: {
      district,
      sourceDirection,
      destinationDirection,
      date: {
        [Op.between]: [timeStart, timeEnd],
      },
    },
  });
  return res
    .status(200)
    .json({ message: "All Wind Data fetched successfully", data: winddata });
};

// select speed from winddata where date between '2022-08-15 00:00:00' and '2022-08-30 00:00:00';

export const getMaxWindSpeed: RequestHandler = async (req, res, next) => {
  //TODO: Determine range and number of occurance
  const maxSpeed = await WindData.findOne({
    attributes: [[Sequelize.fn("max", Sequelize.col("speed")), "MaxSpeed"]],
  });

  const allData = await WindData.findAll();

  //Calling function from utility



  let maxSpeed2 = -1;
  allData.forEach((element) => {
    maxSpeed2 = Math.max(Number(maxSpeed2), Number(element.speed));
  });

  const range1 = maxSpeed2 + 5;
  const range2 = maxSpeed2 - 5;
  let count = 0;
  allData.forEach((element) => {
    if (element.speed <= range1 && element.speed >= range2) count++;
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
};

export const getWindDirectionOccurance: RequestHandler = async (req, res, next) => {
  const winddata = await WindData.findAll();
  let result = MaxNumberOfWindDirection(winddata).join(" and ")
  return (res).status(200).json({
    message: "Data fetched successfully",
    data: {
      result
    }
  })

}
export const getProbability: RequestHandler = async (req, res, next) => {
  const sourceDirection = req.body?.sourceDirection;
  const destinationDirection = req.body?.destinationDirection;


  const format = "YYYY-MM-DD HH:mm:ss"
  const timeStart = moment(new Date()).startOf('month').format(format);
  const timeEnd = moment(new Date()).endOf('month').format(format);



  const winddata = await WindData.findAll({
    where: {
      sourceDirection,
      destinationDirection,
      date: {
        [Op.between]: [timeStart, timeEnd],
      }
    },
  })

  const allWinddata: WindData[] = await WindData.findAll({
    where: {
      date: {
        [Op.between]: [timeStart, timeEnd],
      }
    }
  });
  let countForGivenDirecton = winddata.length
  let countForAllDirection = allWinddata.length

  if (countForGivenDirecton === 0) {
    const message = "Insufficient Data"
    return res.status(200).json({
      data: {
        message
      }
    })
  }

  let message = String((countForGivenDirecton / countForAllDirection) * 100) + "%"

  return res.status(200).json({
    data: {
      message
    }

  })
}






