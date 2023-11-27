import db from "../database/config.js";
import { Sequelize, DataTypes } from 'sequelize';

const Role = db.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    role_name: {
        type: DataTypes.STRING(10),
    }
});

export default Role;