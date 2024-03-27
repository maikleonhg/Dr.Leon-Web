import db from "../database/db.js";

// Función asincrónica para probar la conexión
const testDatabaseConnection = async () => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Llamamos a la función para probar la conexión
testDatabaseConnection();
