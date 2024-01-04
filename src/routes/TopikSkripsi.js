import express from 'express';
import { tryCatch } from '../utils/tryCatch.js';
import { roleAuth } from '../middlewares/authorization.js';
import { addTopikSkripsi } from '../controllers/topik-skripsi.js';
import { checkAuthenticated } from '../middlewares/authentication.js';
import { generateCode } from '../utils/generator.js';

const router = express.Router();

// router.get("/", getTopikSkripsi);
router.use(checkAuthenticated);

router.post("/", roleAuth("admin"), tryCatch(addTopikSkripsi));

export default router;