import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const myEventsList = [
  {
    start: moment().toDate(),
    end: moment().add(1, 'hours').toDate(),
    title: 'Consulta de ejemplo',
  },
  // Agrega más eventos según sea necesario
];

export const CalendarioDr = () => {
  return (
    <div className="calendar-container" style={{ height: '500px', margin: '50px' }}>
      <Calendar
        localizer={localizer}
        events={myEventsList}
        startAccessor="start"
        endAccessor="end"
        //style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
};
