import express from 'express';
import { getAllUsers, addUser } from '../controllers/user.js';
import { tryCatch } from '../utils/tryCatch.js';

const router = express.Router();

router.get("/", tryCatch(getAllUsers));

router.get("/new", addUser);

export default router;