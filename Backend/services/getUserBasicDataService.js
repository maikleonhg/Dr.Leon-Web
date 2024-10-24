// services/getBasicDataService.js

import User from '../models/user.js';

const getBasicDataService = async (userId) => {
  try {
    // Obtener datos personales básicos
    const userData = await User.findOne({
      where: { id: userId },
      attributes: ['id', 'username', 'email'],
    });

    if (!userData) {
      throw new Error('User basic data not found');
    }

    return userData.toJSON();
  } catch (error) {
    throw error;
  }
};

export default getBasicDataService;
