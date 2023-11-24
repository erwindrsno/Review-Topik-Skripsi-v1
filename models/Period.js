import db from "../database/config.js";
import { Sequelize, DataTypes } from 'sequelize';

const Period = db.define('Period', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    isOddSemester: {
        type: DataTypes.BOOLEAN,
    },
    year:{
        type: DataTypes.STRING(9)
    }
});

export default Period;