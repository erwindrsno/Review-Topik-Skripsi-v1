import express from 'express';
import { tryCatch } from '../utils/tryCatch.js';
import { roleAuth } from '../middlewares/authorization.js';
import { addTopikSkripsi } from '../controllers/topik-skripsi.js';
import { checkAuthenticated } from '../middlewares/authentication.js';
import multer from 'multer';

const router = express.Router();

const storage = multer.memoryStorage({
  destination: function (req, file, callback) {
    callback(null, '');
  }
});

const upload = multer( {storage : storage} );

// router.get("/", getTopikSkripsi);
router.use(checkAuthenticated);

router.post("/", roleAuth(["dosen", "admin"]), upload.single('file'), tryCatch(addTopikSkripsi));

export default router;