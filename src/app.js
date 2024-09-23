import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import session from 'express-session';
import passport from 'passport';
import cors from 'cors';
import './controllers/passport-config.js';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';
import db from './database/index.js';
import { handler } from './middlewares/errorHandler.js'
import { googleDriveInit } from './middlewares/googleDriveInit.js';

//import router
import userRouter from './routes/User.js';
import loginRouter from './routes/Login.js';
import periodRouter from './routes/Period.js';
import topikSkripsiRouter from './routes/TopikSkripsi.js';

//instantiate express
const app = express();
//to use dotenv variables
dotenv.config();

//resolve cors origin policy
app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

//session for authorization purpose
app.use(
    session({
        secret: `${process.env.SESSION_SECRET}`,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            maxAge: 60000 * 6,
            secure: false, // Set to true if using HTTPS
        },
    })
);

//cookieparser
app.use(cookieParser());

//resolving staticpath
const staticPath = path.resolve('public');
app.use(express.static(staticPath));

//parsing incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//overriding method
app.use(methodOverride('_method'));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', loginRouter);
app.use('/users', userRouter);
app.use('/periods', periodRouter);
app.use('/topik-skripsis', googleDriveInit, topikSkripsiRouter);

app.use(handler);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});