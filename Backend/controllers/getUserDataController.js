// controllers/GetUserDataController.js

import jwt from 'jsonwebtoken';
import getUserDataService from '../services/getUserDataService.js';

class GetUserDataController {
  async handle(req, res) {
    // Extraer el token de la cabecera de autorización
    const token = req.headers.authorization.split(' ')[1];

    try {
      // Verificar y decodificar el token
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decodedToken.id;

      // Obtener los datos del usuario
      const userData = await getUserDataService(userId);

      return res.status(200).json(userData);
    } catch (error) {
  
      console.error('Error fetching user data:', error);
      return res.status(500).json({ message: 'Error fetching user data' });
    }
  }
}

export default new GetUserDataController();
