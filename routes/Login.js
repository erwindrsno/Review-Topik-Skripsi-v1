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
    successRedirect:'/tes', 
    failureRedirect:'/login'
}));

router.post('/register', register);

router.get('/tes', (req, res) => {
    res.send("Hello world");
});

export default router;