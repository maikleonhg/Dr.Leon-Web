import updateUser from '../services/updateUser.js';

class UpdateUserController {
  async handle(req, res) {
    console.log('Solicitud de actualización de usuario recibida con datos:', req.body);
    try {
      const result = await updateUser(req.body);
      console.log('Sending successful response:', result);
      res.status(200).json(result);
    } catch (error) {
      console.error('Error en UpdateUserController:', error.message);
      res.status(400).json({ status: 'error', message: error.message });
    }
  }
}

export default new UpdateUserController();
