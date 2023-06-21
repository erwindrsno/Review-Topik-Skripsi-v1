import express from 'express';
import dotenv from 'dotenv';
import path from 'path'

const app = express();
dotenv.config();

const staticPath = path.resolve('public');
app.use(express.static(staticPath));



app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});