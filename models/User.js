import db from "../database/config.js";
import { Sequelize, DataTypes } from 'sequelize';

const User = db.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING(128)
    },
    username: {
        type: DataTypes.STRING(64)
    },
    password: {
        type: DataTypes.TEXT() // hashed and salted passwords stored as text in DB for security
    },
    academicNum:{
        type: DataTypes.TEXT()
    }
});

export default User;