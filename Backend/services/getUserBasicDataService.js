// services/getBasicDataService.js

import User from '../models/user.js'; // Ajusta el nombre del modelo según tu configuración

const getBasicDataService = async (userId) => {
  try {
    // Obtener datos personales básicos
    const userData = await User.findOne({
      where: { id: userId },
      attributes: ['id', 'username', 'email'], // Ajusta las columnas según tus necesidades
    });

    if (!userData) {
      throw new Error('User basic data not found');
    }

    console.log('Datos básicos del usuario:', userData);

    return userData.toJSON();
  } catch (error) {
    console.error('Error en getBasicDataService:', error);
    throw error;
  }
};

export default getBasicDataService;
