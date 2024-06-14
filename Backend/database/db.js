import Sequelize from 'sequelize';

const db = new Sequelize('drleonweb', 'wsl_user', 'wsl_password', {
    host: '172.28.208.1', // Dirección IP del host de Windows
    dialect: 'mysql', // Utilizamos el dialecto de MySQL
    logging: console.log,
});

db.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida exitosamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

export default db;
