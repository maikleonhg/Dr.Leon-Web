//authenticateUserController
import authenticateUser from '../services/authenticateUser.js';

class AuthenticateUserController {
  async handle(req, res) {
    console.log('Solicitud de autenticación recibida con datos:', req.body);
    try {
      const result = await authenticateUser(req.body);
      console.log('Sending successful response:', result);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error en AuthenticateUserController:', error.message);
      res.status(400).json({ status: 'error', message: error.message });
    }
  }
}

export default new AuthenticateUserController();
