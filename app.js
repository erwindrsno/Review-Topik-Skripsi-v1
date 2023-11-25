import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import session from 'express-session';
import passport from 'passport';
import initializePassport from './controllers/passport-config.js';
import methodOverride from 'method-override';

//import router
import userRouter from './routes/User.js';
import loginRouter from './routes/Login.js';
import periodRouter from './routes/Period.js';

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

//overriding method
app.use(methodOverride('_method'));

//session for authorization purpose
app.use(session({
    secret: `${process.env.SESSION_SECRET}`,
    resave: false,
    saveUninitialized: false
}));

initializePassport(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use('/', loginRouter);
app.use('/users', userRouter);
app.use('/periods', periodRouter);

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});