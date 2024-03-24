import express from 'express';
import { getAllUsers, addUser } from '../controllers/user.js';
import { tryCatch } from '../utils/tryCatch.js';
import { roleAuth } from '../middlewares/authorization.js';
import { checkAuthenticated } from '../middlewares/authentication.js';

const router = express.Router();

router.use(checkAuthenticated);

router.get("/", tryCatch(getAllUsers));

router.post("/new", roleAuth(["admin"]), addUser);
// router.get("/new", addUser);

export default router;