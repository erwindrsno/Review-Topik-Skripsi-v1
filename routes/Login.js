import express from 'express';
import bcrypt from 'bcrypt';

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

export default router;