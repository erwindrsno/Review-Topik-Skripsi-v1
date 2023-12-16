import db from "../database/config.js";
import { Sequelize, DataTypes } from 'sequelize';

const TopikSkripsi = db.define('TopikSkripsi', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    status: {
        type: DataTypes.STRING,
    },
    
});

export default TopikSkripsi;