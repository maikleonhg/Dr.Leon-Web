const API_URL = import.meta.env.VITE_API_URL;

export const loginUser = async (userData)=> {

  try {
    const response = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error en la solicitud:', errorData.message);
      throw new Error(errorData.message || 'Error en el inicio de sesión');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al enviar la solicitud:', error);
    throw error;
  }
}
