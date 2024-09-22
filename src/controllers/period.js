import Period from '../models/Period.js';
import { generateCode } from '../utils/generator.js';
import { CustomError } from '../utils/CustomError.js';
import { Op } from 'sequelize';

export const getAllPeriods = async (req, res) => {
    const periods = await Period.findAll();
    if (periods.length === 0) throw new CustomError("No periods are found");
    res.status(200).json(periods);
}

export const addNewPeriod = async (req, res) => {
    //sisa error handling
    const [period, created] = await Period.findOrCreate({
        where: {
            [Op.and]: [
                { isOddSemester: req.body.isOddSemester },
                { year: req.body.year }
            ]
        },
        defaults: {
            isOddSemester: req.body.isOddSemester,
            year: req.body.year
        }
    });
    if (!created) throw new CustomError("failed to create period");
    res.status(201).json(period);
}

export const getCurrentPeriod = async (req, res) => {
    const current = await Period.findOne({
        order: [['createdAt', 'DESC']]
    })
    if (!current) throw new CustomError("No current period is found");
    // res.status(200).json(current);
    return current;
}