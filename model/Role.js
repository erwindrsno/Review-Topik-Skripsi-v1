import db from "../database/index.js";
import { Sequelize, DataTypes } from 'sequelize';

const Role = db.define('Role', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    roleName: {
        type: DataTypes.STRING(50),
    }
});

// sync model to db
(async () => {
    await db.sync();
    console.log("The table for model Role were created!");
})();

export default Role;