import Period from '../models/Period.js';

export const getAllPeriods = async (req, res, next) => {
  try{
    const periods = await Period.findAll();
    res.status(200).json(periods);
  }
  catch(err){
    console.log(err);
  }
}

export const addNewPeriod = async(req, res, next) => {
  //harus find or create
  try{
    const [period, created] = await Period.create({
      where: { academic_num: req.body.academic_num },
      defaults: {
          name: req.body.name,
          username: req.body.username,
          password: hashedPassword,
          academic_num: req.body.academic_num,
          specialization: req.body.specialization
      }
  });
  }
  catch(err){
    console.log(err);
  }
}