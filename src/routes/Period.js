import express from 'express';
import { getAllPeriods, addNewPeriod } from '../controllers/period.js';
import { checkAuthenticated } from '../middlewares/authentication.js';
import { roleAuth } from '../middlewares/authorization.js';
import { tryCatch } from '../utils/tryCatch.js';
import { getCurrentPeriod } from '../controllers/period.js';

const router = express.Router();

router.use(checkAuthenticated);
router.use(roleAuth("admin"));

router.get("/", tryCatch(getAllPeriods));
router.post("/add", tryCatch(addNewPeriod));
router.get("/current", tryCatch(getCurrentPeriod));

export default router;