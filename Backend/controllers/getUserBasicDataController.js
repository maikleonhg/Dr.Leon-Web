// controllers/GetUserBasicDataController.js

import jwt from 'jsonwebtoken';
import getBasicDataService from '../services/getUserBasicDataService.js';

class GetUserBasicDataController {
  async handle(req, res) {
    // Extraer el token de la cabecera de autorización
    const token = req.headers.authorization.split(' ')[1];

    try {
      // Verificar y decodificar el token
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decodedToken.id;
      // Obtener los datos básicos del usuario
      const basicData = await getBasicDataService(userId);

      return res.status(200).json(basicData);
    } catch (error) {
      // Se mantiene el log de error genérico para no exponer información sensible
      console.error('Error fetching basic user data:', error);
      return res.status(500).json({ message: 'Error fetching basic user data' });
    }
  }
}

export default new GetUserBasicDataController();
