import express from 'express';
import { getAllUsers, addUser } from '../controllers/user.js';
import { tryCatch } from '../utils/tryCatch.js';
import { roleAuth } from '../middlewares/authorization.js';

const router = express.Router();

router.get("/", tryCatch(getAllUsers));

router.get("/new", roleAuth("admin"), addUser);

export default router;