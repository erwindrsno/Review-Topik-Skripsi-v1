import TopikSkripsi from '../models/TopikSkripsi.js';
import { CustomError } from '../utils/CustomError.js';

// export const getAllPeriods = async (req, res) => {
//   const periods = await Period.findAll();
//   if(periods.length === 0) throw new CustomError("No periods are found");
//   res.status(200).json(periods);
// }

export const addTopikSkripsi = async(req, res, next) => {
  //sisa error handling
  
  if(!created) throw new Error("failed to create period");
  res.status(201).json(period);
}