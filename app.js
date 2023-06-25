import express from 'express';
import dotenv from 'dotenv';
import path from 'path'

//instantiate express
const app = express();
//to use dotenv variables
dotenv.config();

//resolving staticpath
const staticPath = path.resolve('public');
app.use(express.static(staticPath));

//template engine = .ejs
app.set("view engine", "ejs");

//routes
app.get('/', (req,res) => {
    res.render('login');
})

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});