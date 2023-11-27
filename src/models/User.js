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
    academic_num:{
        type: DataTypes.TEXT()
    },
    specialization:{
        type: DataTypes.STRING(2)
    }
});

export default User;