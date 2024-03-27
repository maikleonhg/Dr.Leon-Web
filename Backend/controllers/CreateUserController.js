// controllers/CreateUserController.js
import createUser from '../services/createUser.js';

class CreateUserController {
  async handle(req, res) {
    console.log('Solicitud recibida en CreateUserController con datos:', req.body);
    try {
      const result = await createUser(req.body);
      res.status(201).json(result);
    } catch (error) {
      console.error('Error en CreateUserController:', error.message);
      res.status(400).json({ status: 'error', message: error.message });
    }
  }
}

export default new CreateUserController();
