import Period from '../models/Period.js';

export const getAllPeriods = async (req, res, next) => {
  try{
    console.log(req.user.roles);
    const periods = await Period.findAll();
    res.status(200).json(periods);
  }
  catch(err){
    console.log(err);
  }
}

export const addNewPeriod = async(req, res, next) => {
  //sisa error handling
  
  try{
    const [period, created] = await Period.findOrCreate({
      where: { year: req.body.year },
      defaults: {
          isOddSemester: req.body.isOddSemester
      }
    });
    res.status(201).json(period);
  }
  catch(err){
    console.log(err);
  }
}