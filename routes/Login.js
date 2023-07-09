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

router.get('/tes', (req,res) => {
    res.send("HEllo world");
});

router.post('/register', async(req,res) => {
    let user;
    try{
        const salt = await bcrypt.genSalt();

        const name = req.body.name;
        const username = req.body.username;
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const academicNum = req.body.academicNum;
        const specialization = req.body.specialization;
    } catch{
        res.status(500).send();
    }
    res.json(user);
});

// const register = async(req,res) => {
//     let user;
//     try{
//         const salt = await bcrypt.genSalt();

//         const name = req.body.name;
//         const username = req.body.username;
//         const hashedPassword = await bcrypt.hash(req.body.password, salt);
//         const academicNum = req.body.academicNum;
//         const specialization = req.body.specialization;
//     } catch{
//         res.status(500).send();
//     }
// }

export default router;