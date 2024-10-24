// controllers/AuthenticateUserController.js
import authenticateUser from '../services/authenticateUser.js';

class AuthenticateUserController {
  async handle(req, res) {
    try {
      const result = await authenticateUser(req.body);
      res.status(200).json(result);
    } catch (error) {
      res.status(400).json({ status: 'error', message: error.message });
    }
  }
}

export default new AuthenticateUserController();
