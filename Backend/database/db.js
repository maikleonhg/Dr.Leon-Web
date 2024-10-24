import Sequelize from 'sequelize';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' }); 

const dbname = process.env.DB_NAME
const dbuser = process.env.DB_USER
const dbpassword = process.env.DB_PASSWORD
const dbhost = process.env.DB_HOST
const dbdialect = process.env.DB_DIALECT

const db = new Sequelize(dbname, dbuser, dbpassword, {
    host: dbhost, // Dirección IP del host de Windows
    dialect: dbdialect, 
    logging: false,
});

db.authenticate()
    .then(() => {
        console.log('Conexión a la base de datos establecida exitosamente.');
    })
    .catch(err => {
        console.error('No se pudo conectar a la base de datos:', err);
    });

export default db;
