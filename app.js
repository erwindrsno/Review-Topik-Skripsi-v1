import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import db from './database/index.js'; //harusnya ga boleh import db langsung, db harus import ke controller;

//import router
import userRouter from './routes/User.js';
import loginRouter from './routes/Login.js';

//instantiate express
const app = express();
//to use dotenv variables
dotenv.config();

//resolving staticpath
const staticPath = path.resolve('public');
app.use(express.static(staticPath));

//template engine = .ejs
app.set("view engine", "ejs");

//parsing incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', loginRouter);
app.use('/user', userRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});