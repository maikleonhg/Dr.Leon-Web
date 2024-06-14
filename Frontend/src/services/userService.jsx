const API_URL = '/api/users';

export const signupUser = async (userData) => {
  console.log('Recibiendo solicitud de registro:', userData);

  try {
    const response = await fetch(`${API_URL}/sign-up`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error en la solicitud:', errorData);
      throw new Error(errorData.message || 'Error en el registro');
    }

    const data = await response.json();
    console.log('Respuesta recibida:', data);
    return data;
  } catch (error) {
    console.error('Error al enviar la solicitud:', error);
    throw error;
  }
};
