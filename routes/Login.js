import express from 'express';
import { register } from '../controllers/loginController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
    }
    catch {
        res.status(500).send();
    }
});

router.get('/tes', (req,res) => {
    res.send("Hello world");
});

router.post('/register', register);

export default router;