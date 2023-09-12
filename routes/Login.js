import express from 'express';
import { register } from '../controllers/loginController.js';
import passport from 'passport'

const router = express.Router();

router.get('/', (req, res) => {
    res.render('login');
});

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/login', passport.authenticate('local', { 
    successRedirect:'/success', 
    failureRedirect:'/failed'
}));

router.post('/register', register);

router.get('/success', (req, res) => {
    res.status(200);
    res.json({ message: "auth ok" });
});

router.get('/failed', (req, res) => {
    res.status(201);
    res.json({ message: "auth failed" });
});

export default router;