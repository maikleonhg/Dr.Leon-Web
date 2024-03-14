import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment/moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';

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

const minTime = new Date();
minTime.setHours(12, 0, 0); // 12 PM

const maxTime = new Date();
maxTime.setHours(20, 0, 0); // 8 PM

export const CalendarioCl = () => {
  const [myEventsList, setMyEventsList] = useState([
    // Tus eventos iniciales aquí, si los hay
  ]);

  const handleSelectSlot = ({ start, end }) => {
    const title = prompt('Nombre del Paciente:');
    if (title) {
      const newEvent = { start, end, title };
      setMyEventsList(prevEvents => [...prevEvents, newEvent]);
    }
  };

  return (
    <div className="calendar-container" style={{ height: '500px', margin: '50px' }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%', width: '100%' }}
        views={['week','month']}
        defaultView='week'
        min={minTime}
        max={maxTime}
        messages={messages}
        culture='es'
        selectable={true}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  );
};
