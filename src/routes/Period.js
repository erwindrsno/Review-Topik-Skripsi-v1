import express from 'express';
import { getAllPeriods, addNewPeriod } from '../controllers/periodController.js';
import { checkAuthenticated } from '../middlewares/authentication.js';
import { roleAuth } from '../middlewares/authorization.js';

const router = express.Router();

router.use(checkAuthenticated);
router.use(roleAuth("admin"));

router.get("/", getAllPeriods);
router.post("/add", addNewPeriod);

export default router;