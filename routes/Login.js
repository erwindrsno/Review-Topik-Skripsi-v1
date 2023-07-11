import express from 'express';
import { register,login } from '../controllers/loginController.js';

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/register', (req,res) => {
    res.render('register');
});

router.post('/login', login);

router.post('/register', register);

router.get('/tes', (req,res) => {
    res.send("Hello world");
});

export default router;