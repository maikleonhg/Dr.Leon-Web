// UpdateUserController.js
import updateUser from '../services/updateUser.js';

class UpdateUserController {
  async handle(req, res) {
    try {
      const result = await updateUser(req.body);
      return res.status(200).json(result);
    } catch (error) {
      console.error('Error en UpdateUserController:', error.message); // Mantenemos el log de error para diagnóstico
      res.status(400).json({ status: 'error', message: error.message });
    }
  }
}

export default new UpdateUserController();