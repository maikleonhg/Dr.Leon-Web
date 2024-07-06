// services/getUserDataService.js

import User_data from '../models/user_data.js'; // Ajusta el nombre del modelo según tu configuración
import Health_data from '../models/health_data.js'; // Ajusta el nombre del modelo según tu configuración

const getUserDataService = async (userId) => {
  try {
    // Obtener datos personales
    const userData = await User_data.findOne({
      where: { userId },
    });

    if (!userData) {
      throw new Error('User data not found');
    }

    // Obtener datos de salud
    const healthData = await Health_data.findOne({
      where: { userDataId: userId },
    });

    if (!healthData) {
      throw new Error('Health data not found');
    }

    // Combinar ambos resultados en un solo objeto
    const combinedData = {
      ...userData.toJSON(),
      ...healthData.toJSON(),
    };

    console.log('Datos combinados del usuario:', combinedData);

    return combinedData;
  } catch (error) {
    console.error('Error en getUserDataService:', error);
    throw error;
  }
};

export default getUserDataService;