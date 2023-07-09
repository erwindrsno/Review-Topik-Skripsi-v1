import bcrypt from 'bcrypt';
import db from '../database/index.js'
import User from '../models/User.js'

export const register = async(req,res) => {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const user = await User.findOrCreate({
            where : {academic_num: req.body.academic_num},
            defaults: {
                name: req.body.name,
                username: req.body.username,
                password: hashedPassword,
                role: req.body.role, //must be an array
                academic_num: req.body.academic_num,
                specialization: req.body.specialization
            }
        });

        res.status(200).send();

    } catch{
        res.status(500).send();
    }
}