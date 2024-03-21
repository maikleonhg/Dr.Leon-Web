import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment/moment';
import 'moment/locale/es';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import AsideDr from '../../components/Dashboards/AsideDr';
import HeaderDashboardDr from '../../components/Dashboards/HeaderDashDr';

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

export const Agenda = () => {

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
          <Calendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
            style={{ height: '100%', width: '100%' }}
            views={['day', 'week','month', 'agenda']} // Asegúrate de incluir 'day' en las vistas
            defaultView={["week"]} // Usa el estado de la vista aquí
            min={minTime}
            max={maxTime}
            messages={messages}
            culture='es'
            selectable={true}
          />
        </div>
      </main>
    </div>
  );
};