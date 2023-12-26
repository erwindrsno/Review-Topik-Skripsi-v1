import express from 'express';
import { tryCatch } from '../utils/tryCatch.js';
import { roleAuth } from '../middlewares/authorization.js';
import { addTopikSkripsi } from '../controllers/topik-skripsi.js';

const router = express.Router();

// router.get("/", getTopikSkripsi);

router.post("/", roleAuth("dosen"), addTopikSkripsi);

export default router;