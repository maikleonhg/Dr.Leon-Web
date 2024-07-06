// models/userData.js
import { Sequelize, DataTypes } from 'sequelize';
import db from '../database/db.js';

const UserData = db.define('UserData', {

  userId: {
    type: DataTypes.STRING(191),
    allowNull: false,
    primaryKey: true, 
    unique: true
  },
  fullname: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  sex: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  race: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  height: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  weight: {
    type: DataTypes.DOUBLE,
    allowNull: false
  }
}, {
  tableName: 'User_data',
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
  timestamps: false
});

export default UserData;
