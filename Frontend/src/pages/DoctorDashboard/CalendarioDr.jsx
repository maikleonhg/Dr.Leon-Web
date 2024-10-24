import { useState, useEffect } from 'react';
import { GoogleOAuthProvider, useGoogleLogin } from '@react-oauth/google';
import HeaderDashboardDr from '../../components/Dashboards/HeaderDashDr';
import AsideDr from '../../components/Dashboards/AsideDr';

const CalendarioDr = () => {
  return (
    <GoogleOAuthProvider clientId="196968608547-bjd6lll4398ts35v7c4bvolvket7g9eo.apps.googleusercontent.com">
      <CalendarioDrContent />
    </GoogleOAuthProvider>
  );
};

const CalendarioDrContent = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [accessToken, setAccessToken] = useState(null);

  // Función para guardar el token en las cookies
  const saveTokenToCookie = (token) => {
    const expirationTime = new Date(Date.now() + 3600 * 1000); // 1 hour expiration
    document.cookie = `accessToken=${token}; expires=${expirationTime.toUTCString()}; path=/`;
  };

  // Función para obtener el token de las cookies
  const getAccessTokenFromCookie = () => {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
      const [name, value] = cookie.trim().split('=');
      if (name === 'accessToken') {
        return value;
      }
    }
    return null;
  };

  const fetchEvents = async (token) => {
    console.log('Fetching events with access token:');
    try {
      const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error al obtener los eventos');
      }

      const data = await response.json();
      setEvents(data.items);
    } catch (error) {
      console.error('Error al obtener los eventos de Google Calendar:', error);
    } finally {
      setLoading(false);
    }
  };

  const login = useGoogleLogin({
    onSuccess: tokenResponse => {
      console.log('Google login successful:', tokenResponse);
      setAccessToken(tokenResponse.access_token);
      saveTokenToCookie(tokenResponse.access_token); // Guarda el token en las cookies
      setLoading(true);
      fetchEvents(tokenResponse.access_token);
    },
    onError: error => {
      console.error('Error during login:', error);
      setLoading(false);
    },
    scope: 'https://www.googleapis.com/auth/calendar.events.readonly',
  });

  useEffect(() => {
    // Al cargar el componente, verifica si hay un token en las cookies y úsalo si está disponible
    const tokenFromCookie = getAccessTokenFromCookie();
    if (tokenFromCookie) {
      setAccessToken(tokenFromCookie);
    }
  }, []);

  useEffect(() => {
    // Cuando el accessToken cambia, actualiza las cookies
    if (accessToken) {
      saveTokenToCookie(accessToken);
      fetchEvents(accessToken);
    }
  }, [accessToken]);

  return (
    <div>
      <HeaderDashboardDr />
      <main className="flex">
        <AsideDr />
        <div className="flex-1 flex justify-center items-center">
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Google Calendar Events</h2>
            {loading ? (
              <p>Cargando eventos...</p>
            ) : (
              <div className="flex-1">
                <ul className="divide-y divide-gray-200">
                  {events.map(event => (
                    <li key={event.id} className="py-4">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900">{event.summary}</p>
                        <p className="text-sm text-gray-500">{new Date(event.start.dateTime).toLocaleString()}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {!loading && events.length === 0 && (
              <button
                onClick={() => login()}
                className="bg-white text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <div className="flex items-center">
                  <img
                    src="https://www.google.com/images/icons/product/search-32.gif"
                    alt="Google"
                    className="w-5 h-5 mr-2"
                  />
                  Sign in with Google 🚀
                </div>
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default CalendarioDr;
