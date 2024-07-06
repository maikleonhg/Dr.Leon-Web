// models/healthData.js
import { Sequelize, DataTypes } from 'sequelize';
import db from '../database/db.js'; // Ajusta la ruta de importación según la estructura de tu proyecto

const HealthData = db.define('HealthData', {

  userDataId: {
    type: DataTypes.STRING(191),
    allowNull: false,
    primaryKey: true,
    unique: true
  },
  comorbidity: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  isAlergic: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  useCigars: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  useDrugs: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  useMedication: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  useAlcohol: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  howManyCigars: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  alergics: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  howMuchAlcohol: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  howManyDrugs: {
    type: DataTypes.STRING(191),
    allowNull: false
  },
  whichMedications: {
    type: DataTypes.STRING(191),
    allowNull: false
  }
}, {
  tableName: 'Health_data',
  charset: 'utf8mb4',
  collate: 'utf8mb4_unicode_ci',
  timestamps: false
});

export default HealthData;
