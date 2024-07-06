const API_URL = '/api/users';

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

//Obtener datos del perfil básico
export const getBasicProfile = () => {
  console.log('Datos recibidos en getBasicProfile');
  return fetchWithAuth('/basic-profile', {
    method: 'GET',
  });
};

// Obtener datos del perfil
export const getProfile = () => {
  return fetchWithAuth('/profile', {
    method: 'GET',
  });
};

// Actualizar datos del perfil
export const updateProfile = (profileData) => {
  return fetchWithAuth('/profile', {
    method: 'PUT',
    body: JSON.stringify(profileData),
  });
};
// Nuevo servicio para actualizar datos del paciente
export const updateMainData = (mainData) => {
  console.log('Datos recibidos en updateMainData:', mainData);
  return fetchWithAuth('/user-data', {
    method: 'POST',
    body: JSON.stringify(mainData),
  });
};

