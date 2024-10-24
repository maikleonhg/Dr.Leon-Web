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

  const response = await fetch(`${API_URL}${url}`, { ...options, headers });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Error en la solicitud');
  }

  return response.json();
};

//Obtener datos del perfil básico
export const getBasicProfile = () => {
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
  return fetchWithAuth('/user-data', {
    method: 'POST',
    body: JSON.stringify(mainData),
  });
};

