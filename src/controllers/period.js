import Period from '../models/Period.js';
import { generateCode } from '../utils/generator.js';
import { CustomError } from '../utils/CustomError.js';

export const getAllPeriods = async (req, res) => {
  const periods = await Period.findAll();
  if(periods.length === 0) throw new CustomError("No periods are found");
  res.status(200).json(periods);
}

export const addNewPeriod = async(req, res, next) => {
  //sisa error handling
  const [period, created] = await Period.findOrCreate({
    where: { year: req.body.year },
    defaults: {
        isOddSemester: req.body.isOddSemester
    }
  });
  if(!created) throw new Error("failed to create period");
  res.status(201).json(period);
}