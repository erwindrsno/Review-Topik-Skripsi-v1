import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import bcrypt from 'bcrypt';

//instantiate express
const app = express();
//to use dotenv variables
dotenv.config();

//resolving staticpath
const staticPath = path.resolve('public');
app.use(express.static(staticPath));

//template engine = .ejs
app.set("view engine", "ejs");

//parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
app.get('/', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        console.log(hashedPassword);
    }
    catch {
        res.status(500).send();
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});