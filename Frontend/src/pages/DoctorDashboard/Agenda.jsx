import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment/moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { gapi } from 'gapi-script';
import AsideDr from '../../components/Dashboards/AsideDr';
import HeaderDashboardDr from '../../components/Dashboards/HeaderDashDr';

moment.locale('es');
const localizer = momentLocalizer(moment);

const apiKeyGC =  import.meta.env.VITE_API_KEY_GCALENDAR;
const ClientIdGC = import.meta.env.VITE_CLIENT_ID_GCALENDAR;

const messages = {
  previous: '<',
  next: '>',
  today: 'Hoy',
  month: 'Mes',
  week: 'Semana',
  day: 'Día',
  noEventsInRange: 'No hay eventos en este rango',
  showMore: total => `+ Ver más (${total})`
};

export const Agenda = () => {
  const [events, setEvents] = useState([]);
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        apiKey: apiKeyGC, // Reemplaza con tu API Key
        clientId: ClientIdGC, // Reemplaza con tu Client ID
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: "https://www.googleapis.com/auth/calendar.readonly",
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        setIsSignedIn(authInstance.isSignedIn.get());
        authInstance.isSignedIn.listen(setIsSignedIn);
        if (authInstance.isSignedIn.get()) {
          fetchEvents();
        }
      });
    };
    gapi.load('client:auth2', initClient);
  }, []);

  const fetchEvents = () => {
    gapi.client.calendar.events.list({
      'calendarId': 'primary',
      'timeMin': (new Date()).toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'maxResults': 10,
      'orderBy': 'startTime',
      'key': apiKeyGC, // Asegúrate de agregar tu API Key aquí también
    }).then(response => {
      const events = response.result.items.map(event => ({
        title: event.summary,
        start: new Date(event.start.dateTime || event.start.date),
        end: new Date(event.end.dateTime || event.end.date)
      }));
      setEvents(events);
    });
  };

  const handleAuthClick = () => {
    gapi.auth2.getAuthInstance().signIn();
  };

  const handleSignOutClick = () => {
    gapi.auth2.getAuthInstance().signOut();
  };

  const minTime = new Date();
  minTime.setHours(12, 0, 0); // 12 PM

  const maxTime = new Date();
  maxTime.setHours(20, 0, 0); // 8 PM

  return (
    <div>
      <HeaderDashboardDr />
      <main className='flex'>
        <AsideDr />
        <div className="calendar-container flex-1" style={{ height: '500px', margin: '50px' }}>
          {isSignedIn ? (
            <>
              <button onClick={handleSignOutClick}>Sign Out</button>
              <Calendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{ height: '100%', width: '100%' }}
                views={['day', 'week', 'month', 'agenda']}
                defaultView="week"
                min={minTime}
                max={maxTime}
                messages={messages}
                culture='es'
                selectable={true}
              />
            </>
          ) : (
            <button onClick={handleAuthClick}>Authorize</button>
          )}
        </div>
      </main>
    </div>
  );
};