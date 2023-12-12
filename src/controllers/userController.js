import User from '../models/User.js';

export const getAllUsers = async (req, res, next) => {
  const users = await User.findAll();
  if(users.length === 0) throw new Error("No users were found");
  res.status(200).json(users);
}

export const addUser = async(req, res, next) => {

}