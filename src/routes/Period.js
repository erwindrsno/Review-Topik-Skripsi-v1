import express from 'express';
import { getAllPeriods, addNewPeriod } from '../controllers/periodController.js';
import { checkAuthenticated } from '../middlewares/authentication.js';
import { roleAuth } from '../middlewares/authorization.js';
import { tryCatch } from '../utils/tryCatch.js';

const router = express.Router();

router.use(checkAuthenticated);
router.use(roleAuth("admin"));

router.get("/", tryCatch(getAllPeriods));
router.post("/add", tryCatch(addNewPeriod));

export default router;