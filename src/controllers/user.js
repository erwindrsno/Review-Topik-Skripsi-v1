import User from '../models/User.js';
import Role from '../models/Role.js';
import { Sequelize, Op } from 'sequelize';
import bcrypt from 'bcrypt'

export const getAllUsers = async (req, res, next) => {
    const users = await User.findAll();
    if (users.length === 0) throw new Error("No users were found");
    res.status(200).json(users);
}

export const addUser = async (req, res, next) => {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const roles = req.body.roles;

    const [user, created] = await User.findOrCreate({
        where: { academic_num: req.body.academic_num },
        defaults: {
            name: req.body.name,
            username: req.body.username,
            password: hashedPassword,
            academic_num: req.body.academic_num,
            specialization: req.body.specialization
        }
    });

    if (created) {
        roles.forEach(async (role) => {
            const result = await Role.findOne({
                where: { role_name: role }
            })
            await user.addRoles(result);
        })
        // const role = await Role.findAll({
        //     where: { role_name: req.body.roles }
        // })
        // if (role === null) {
        //     res.status(500).send("Role tidak ditemukan");
        // }
        // else {
        //     await user.addRoles(role);
        //     console.log('Role associated hehe ');
        // }
    }
    if (!created) throw new Error("failed to sign up");
    res.status(201).json(user);
}