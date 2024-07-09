// PacienteService.js
import User_data from '../models/user_data.js'; // Ajusta el nombre del modelo según tu configuración
import Health_data from '../models/health_data.js';

export const PacienteService = {
    getPacientes: async () => {
      try {
        const pacientes = await User_data.findAll({
          attributes: ['userId', 'fullname', 'age']
        });
        console.log('Pacientes fetched:', pacientes); // Log para ver los datos de los pacientes
        return pacientes;
      } catch (error) {
        console.error('Error obteniendo pacientes:', error); // Log del error
        throw new Error('Error obteniendo pacientes');
      }
    },
  
    getPacienteById: async (id) => {
      try {
        const userData = await User_data.findByPk(id);
        console.log('User data fetched:', userData); // Log para ver los datos de user_data
  
        const healthData = await Health_data.findOne({ where: { userDataId: id } });
        console.log('Health data fetched:', healthData); // Log para ver los datos de health_data
  
        if (!userData || !healthData) {
          console.log('Paciente no encontrado:', { userData, healthData }); // Log en caso de que el paciente no se encuentre
          return null;
        }
  
        return { userData, healthData };
      } catch (error) {
        console.error('Error obteniendo datos del paciente:', error); // Log del error
        throw new Error('Error obteniendo datos del paciente');
      }
    }
  };