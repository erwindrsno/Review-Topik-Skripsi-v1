import db from "../database/config.js";
import { Sequelize, DataTypes } from 'sequelize';

const TopikSkripsi = db.define('TopikSkripsi', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.BOOLEAN
  },
  code: {
    type: DataTypes.STRING
  },
  status: {
    type: DataTypes.STRING,
  }
});

export default TopikSkripsi;