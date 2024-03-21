import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment/moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Aside from '../../components/Dashboards/Aside';
import HeaderDashboardCl from '../../components/Dashboards/HeaderDashCl';

moment.locale('es');
const localizer = momentLocalizer(moment);

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

export const CalendarioCl = () => {
  const [myEventsList, setMyEventsList] = useState([]);
  const [view, setView] = useState('week');
  const [key, setKey] = useState(Date.now()); // Agrega una clave de estado para forzar la actualización del componente

  useEffect(() => {
    const updateView = () => {
      const currentWidth = window.innerWidth;
      if (currentWidth <= 764) {
        setView('day'); // Cambia a vista de día en pantallas pequeñas
      } else {
        setView('week'); // Vuelve a la vista de semana en pantallas más grandes
      }
      setKey(Date.now()); // Actualiza la clave para forzar la reconstrucción del componente
    };

    window.addEventListener('resize', updateView);
    return () => window.removeEventListener('resize', updateView);
  }, []);

  const handleSelectSlot = ({ start }) => {
    const title = prompt('Nombre del Paciente:');
    if (title) {
      const roundedStart = new Date(start);
      roundedStart.setMinutes(0);
      roundedStart.setSeconds(0);
      roundedStart.setMilliseconds(0);
      const end = new Date(roundedStart.getTime() + 60 * 60 * 1000); // Una hora más tarde

      const newEvent = { title, start: roundedStart, end };
      setMyEventsList(prevEvents => [...prevEvents, newEvent]);
    }
  };

  const minTime = new Date();
  minTime.setHours(12, 0, 0); // 12 PM

  const maxTime = new Date();
  maxTime.setHours(20, 0, 0); // 8 PM

  return (
    <div>
      <HeaderDashboardCl />
      <main className='flex'>
        <Aside />
        <div className="calendar-container flex-1" style={{ height: '500px', margin: '50px' }}>
          <Calendar
             key={key}
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%', width: '100%' }}
            views={['day', 'week']} // Asegúrate de incluir 'day' en las vistas
            defaultView={view} // Usa el estado de la vista aquí
            min={minTime}
            max={maxTime}
            messages={messages}
            culture='es'
            selectable={true}
            onSelectSlot={handleSelectSlot}
            onEventResize={handleSelectSlot}
            onEventDrop={handleSelectSlot}
          />
        </div>
      </main>
    </div>
  );
};