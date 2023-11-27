import express from 'express';
import { getAllUsers } from '../controllers/userController.js';

const router = express.Router();

router.get("/", getAllUsers);

router.get("/new", (req,res) => {
    res.send("New user");
});

export default router;