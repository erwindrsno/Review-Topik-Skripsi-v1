import bcrypt from 'bcrypt';
import db from '../database/index.js'
import User from '../models/User.js'
import Role from '../models/Role.js'

export const register = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        try {
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
                const role = await Role.findOne({ where: { role_name: 'mahasiswa' } })
                if (role === null) {
                    res.status(500).send("Role tidak ditemukan");
                }
                else {
                    try {
                        await user.addRole(role);
                        console.log('Role associated: ' + role.role_name);
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
            }
        } catch (err) {
            console.log(err);
            res.status(500).send();
        }
        res.status(200).send();

    } catch {
        res.status(500).send();
    }
}

export const login = async (req, res) => {
    //harusnya validation dulu di frontend
    const loginUser = await User.findOne({ where: { username: req.body.username } });
    if (loginUser === null) {
        console.log("Login failed");
    }
    else {
        try {
            const validUser = await bcrypt.compare(req.body.password,loginUser.password);
            if(validUser){
                // console.log("Logged in!");
                res.send("Login OK");
            }
            else{
                // console.log("login failed");
                res.send("Login failed");
            }

        } catch (err) {
            console.log(err);
            res.status(500).send();
        }
    }
}