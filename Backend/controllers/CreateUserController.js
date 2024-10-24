// controllers/CreateUserController.js
import createUser from '../services/createUser.js';

class CreateUserController {
  async handle(req, res) {
    try {
      const result = await createUser(req.body);
      res.status(201).json(result);
    } catch (error) {
      res.status(400).json({ status: 'error', message: error.message });
    }
  }
}

export default new CreateUserController();
