import User from '../models/User.js';
import Role from '../models/Role.js';

export const getAllUsers = async (req, res, next) => {
  const users = await User.findAll();
  if(users.length === 0) throw new Error("No users were found");
  res.status(200).json(users);
}

export const addUser = async(req, res, next) => {
  const salt = await bcrypt.genSalt();
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

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
      const role = await Role.findOne({ where: { role_name: 'dosen' } })
      if (role === null) {
          res.status(500).send("Role tidak ditemukan");
      }
      else {
          await user.addRole(role);
          console.log('Role associated: ' + role.role_name);
      }
  }
  if(!created) throw new Error("failed to sign up");
  res.status(201).json(user);
}