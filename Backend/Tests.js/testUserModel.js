import db from '../database/db.js'; // Ajusta esta línea según la ubicación real
import User from '../models/user.js';

const testUserModel = async () => {
  try {
    // Crear un nuevo usuario
    const newUser = await User.create({
      id: 'unique-id-12345', // Asegúrate de que este ID sea único
      username: 'testUser',
      email: 'test@example.com',
      password: 'securePassword123', // En un caso real, asegúrate de encriptar las contraseñas
      role: 'USER'
    });

    console.log('Nuevo usuario creado:', newUser.toJSON());

    /*// Buscar un usuario por su username
    const foundUser = await User.findOne({ where: { username: 'testUser' } });
    console.log('Usuario encontrado:', foundUser.toJSON());

    // Actualizar el usuario
    await foundUser.update({ email: 'newemail@example.com' });
    console.log('Usuario actualizado:', await foundUser.reload());

    // Eliminar el usuario
    await foundUser.destroy();
    console.log('Usuario eliminado');
    */
    // Cerrar la conexión
    await db.close();
  } catch (error) {
    console.error('Error durante el test del modelo User:', error);
  }
};

testUserModel();
