import express from 'express';
import { register } from '../controllers/loginController.js';
import passport from 'passport'
// import methodOverride from 'method-override';

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

router.delete('/logout', (req,res,next) => {
    console.log('logout endpoint');
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});

router.post('/register', register);

router.get('/success', (req, res) => {
    res.redirect('/tes');
    // res.status(200).json({ message: "auth ok" });
});

router.get('/failed', (req, res) => {
    // res.status(201);
    res.status(401).json({ message: "wrong credentials" });
});

router.get('/tes', (req,res) => {
    res.render('home');
});

export default router;