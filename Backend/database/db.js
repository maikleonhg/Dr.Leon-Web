import Sequelize from 'sequelize';

const db = new Sequelize('DrLeonWeb', 'root', 'Gibson321', {
    host: 'localhost',
    dialect: 'mysql', // Utilizamos el dialecto de MySQL
    logging: console.log,
});

// Crear una nueva instancia de Sequelize
export default db;
