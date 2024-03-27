// models/consult.js
import { Sequelize, DataTypes } from 'sequelize';
import db from '../database/db';

const Consult = db.define('Consult', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  createdAt: {
    type: DataTypes.DATE(3),
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)')
  },
  userId: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  medicId: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  motive: {
    type: DataTypes.STRING(191),
    allowNull: false
  }
}, {
  tableName: 'Consult',
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci'
});

export default Consult;
