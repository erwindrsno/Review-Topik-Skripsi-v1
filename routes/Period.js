import express from 'express';
import { getAllPeriods, addNewPeriod } from '../controllers/periodController.js';

const router = express.Router();

router.get("/", getAllPeriods);
router.post("/add", addNewPeriod);

export default router;