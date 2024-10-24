// PacienteController.js
import { PacienteService } from '../services/pacienteService.js';

export const getPaciente = async (req, res) => {
  try {
    const pacientes = await PacienteService.getPacientes();
    res.status(200).json(pacientes);
  } catch (error) {
    console.error('Error fetching pacientes:', error); // Mantenemos el log de error para diagnóstico
    res.status(500).json({ message: error.message });
  }
};

export const getPacienteById = async (req, res) => {
  const { id } = req.params;
  try {
    const paciente = await PacienteService.getPacienteById(id);
    if (!paciente) {
      return res.status(404).json({ message: 'Paciente no encontrado' });
    }
    res.status(200).json(paciente);
  } catch (error) {
    console.error('Error fetching paciente by ID:', error); // Mantenemos el log de error para diagnóstico
    res.status(500).json({ message: error.message });
  }
};