// models/user.js
import { Sequelize, DataTypes } from 'sequelize';
import db from '../database/db.js'; // Asegúrate de ajustar la ruta de importación según tu estructura de proyecto

const User = db.define('User', {
  id: {
    type: DataTypes.STRING(191),
    allowNull: false,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(191),
    allowNull: false,
    unique: true
  },
  email: {
    type: DataTypes.STRING(191),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  role: {
    type: DataTypes.ENUM('USER', 'MEDIC'),
    defaultValue: 'USER'
  }
}, {
  tableName: 'Users',
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

export default User;
