const API_URL = import.meta.env.VITE_API_URL;

// Añadir token JWT a las solicitudes
const fetchWithAuth = async (url, options = {}) => {
  const token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, "$1");

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  console.log('Fetch options:', { ...options, headers });
  const response = await fetch(`${API_URL}${url}`, { ...options, headers });
  console.log('Respuesta recibida del servidor:', response);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error en la solicitud');
  }

  return response.json();
};

// Obtener lista de pacientes
export const getPacientes = () => {
  return fetchWithAuth('/pacientes', {
    method: 'GET',
  });
};

// Obtener datos de un paciente específico
export const getPacienteById = (id) => {
  return fetchWithAuth(`/pacientes/${id}`, {
    method: 'GET',
  });
};
