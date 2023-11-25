import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

//to use dotenv variables
dotenv.config();

//database
const db = new Sequelize(`${process.env.DB_NAME}`, `${process.env.MYSQL_USERNAME}`, `${process.env.MYSQL_PASSWORD}`, {
    host: `${process.env.DB_HOST}`,
    dialect: `${process.env.DB_DIALECT}`,
    define: { freezeTableName: true },
    logging: false
});

//establish db connection
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

export default db;