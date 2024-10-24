// controllers/CreateUserDataController.js
import jwt from 'jsonwebtoken';
import createUserDataService from '../services/createUserDataService.js';

class CreateUserDataController {
  async handle(req, res) {
    const {
      fullname, age, sex, race, height, weight,
      comorbidity, details
    } = req.body;
    // Extraer el token de la cabecera de autorización
    const token = req.headers.authorization.split(' ')[1];

    try {
      // Verificar y decodificar el token
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      const userId = decodedToken.id;

      // Crear o actualizar los datos del usuario
      const userData = await createUserDataService({
        userId,
        fullname,
        age,
        sex,
        race,
        height,
        weight,
        comorbidity,
        isAlergic: details.alergias ? true : false,
        useCigars: details.tabaquismo ? true : false,
        useDrugs: details.drogas ? true : false,
        useMedication: details.medicamentos ? true : false,
        useAlcohol: details.alcohol ? true : false,
        howManyCigars: details.tabaquismo || '',
        alergics: details.alergias || '',
        howMuchAlcohol: details.alcohol || '',
        howManyDrugs: details.drogas || '',
        whichMedications: details.medicamentos || ''
      });

      return res.status(201).json(userData);
    } catch (error) {
      return res.status(500).json({ message: 'Error creating user data' });
    }
  }
}

export default new CreateUserDataController();
