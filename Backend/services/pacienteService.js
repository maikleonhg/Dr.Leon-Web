// PacienteService.js
import User_data from '../models/user_data.js'; // Ajusta el nombre del modelo según tu configuración
import Health_data from '../models/health_data.js';

export const PacienteService = {
  getPacientes: async () => {
    try {
      const pacientes = await User_data.findAll({
        attributes: ['userId', 'fullname', 'age']
      });
      return pacientes;
    } catch (error) {
      throw new Error('Error obteniendo pacientes');
    }
  },

  getPacienteById: async (id) => {
    try {
      const userData = await User_data.findByPk(id);
      const healthData = await Health_data.findOne({ where: { userDataId: id } });

      if (!userData || !healthData) {
        return null;
      }

      return { userData, healthData };
    } catch (error) {
      throw new Error('Error obteniendo datos del paciente');
    }
  }
};
