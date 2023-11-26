import express from 'express';
import { getAllPeriods, addNewPeriod } from '../controllers/periodController.js';
import { checkAuthenticated } from '../middlewares/authentication.js';
import { isAdmin } from '../middlewares/authorization.js';

const router = express.Router();

router.use(checkAuthenticated);

router.get("/", getAllPeriods);
router.post("/add", addNewPeriod);

export default router;