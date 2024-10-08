import express from 'express';
import { register, logout } from '../controllers/login.js';
import passport from 'passport';
import { tryCatch } from '../utils/tryCatch.js';

const router = express.Router();

// router.get('/', (req, res) => {
//     res.render('login');
// });

// router.get('/register', (req, res) => {
//     res.render('register');
// });

router.post('/login', passport.authenticate('local', { 
    successRedirect:'/success', 
    failureRedirect:'/failed'
}));

router.delete('/logout', logout);

router.post('/register', tryCatch(register));

router.get('/success', (req, res) => { 
    const user = {
      name: req.user.name,
      academic_num: req.user.academic_num,
      specialization: req.user.specialization
    };
    res.status(200).json({ message: "auth ok", user }); 
});

router.get('/failed', (req, res) => { res.status(401).json({ message: "auth NOT ok" }); });

export default router;