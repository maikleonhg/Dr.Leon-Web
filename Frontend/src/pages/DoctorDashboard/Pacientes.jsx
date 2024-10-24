import { useState, useEffect } from 'react';
import HeaderDashboardDr from '../../components/Dashboards/HeaderDashDr';
import AsideDr from '../../components/Dashboards/AsideDr';
import { getPacientes, getPacienteById } from '../../services/pacientService';

export const Pacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [filteredPacientes, setFilteredPacientes] = useState([]);
  const [selectedPaciente, setSelectedPaciente] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPacientes();
  }, []);

  useEffect(() => {
    setFilteredPacientes(
      pacientes.filter(paciente =>
        paciente.fullname.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, pacientes]);

  const fetchPacientes = async () => {
    try {
      const data = await getPacientes();
      setPacientes(data);
      setFilteredPacientes(data);
    } catch (error) {
      console.error('Error fetching pacientes:', error);
    }
  };

  const handlePacienteSelect = async (id) => {
    try {
      const data = await getPacienteById(id);
      setSelectedPaciente(data);
    } catch (error) {
      console.error('Error fetching paciente details:', error);
    }
  };

  const handleBackToTable = () => {
    setSelectedPaciente(null);
  };

  return (
    <div>
      <HeaderDashboardDr />
      <main className='flex'>
        <AsideDr />
        <div className='flex-1 p-10'>
          <h2 className='text-2xl font-bold mb-5'>Pacientes</h2>
          {!selectedPaciente ? (
            <div>
              <input
                type='text'
                placeholder='Buscar por nombre'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='mb-5 p-2 border border-gray-300 rounded w-full'
              />
              <table className='w-full'>
                <thead>
                  <tr className='bg-gray-200 text-left'>
                    <th className='p-2'>Nombre</th>
                    <th className='p-2'>Edad</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPacientes.map((paciente) => (
                    <tr key={paciente.userId} className='border-b text-left cursor-pointer' onClick={() => handlePacienteSelect(paciente.userId)}>
                      <td className='p-2'>{paciente.fullname}</td>
                      <td className='p-2'>{paciente.age}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>
              <h3 className='text-lg font-bold mb-3'>Detalles del Paciente</h3>
              <div>
                <p><strong>Nombre:</strong> {selectedPaciente.userData.fullname}</p>
                <p><strong>Edad:</strong> {selectedPaciente.userData.age}</p>
                <p><strong>Sexo:</strong> {selectedPaciente.userData.sex}</p>
                <p><strong>Raza:</strong> {selectedPaciente.userData.race}</p>
                <p><strong>Altura:</strong> {selectedPaciente.userData.height}</p>
                <p><strong>Peso:</strong> {selectedPaciente.userData.weight}</p>
                <p><strong>Comorbilidades:</strong> {selectedPaciente.healthData.comorbidity}</p>
                <p><strong>Alergias:</strong> {selectedPaciente.healthData.alergics}</p>
                <p><strong>Uso de Cigarros:</strong> {selectedPaciente.healthData.howManyCigars}</p>
                <p><strong>Uso de Drogas:</strong> {selectedPaciente.healthData.howManyDrugs}</p>
                <p><strong>Uso de Alcohol:</strong> {selectedPaciente.healthData.howMuchAlcohol}</p>
              </div>
              <button className='mt-5 p-2 bg-blue-500 text-white rounded' onClick={handleBackToTable}>Volver a los pacientes</button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Pacientes;
