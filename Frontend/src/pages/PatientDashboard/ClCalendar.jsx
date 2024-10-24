import { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import esLocale from '@fullcalendar/core/locales/es';
import HeaderDashboardCl from '../../components/Dashboards/HeaderDashCl';
import Aside from '../../components/Dashboards/Aside';

function ClCalendar() {
  const [events] = useState([
    { title: 'Cita con el Dr. Smith', start: '2024-03-17T14:00:00', end: '2024-03-17T15:00:00', color: 'red' },
    // Agrega aquí otros eventos existentes
  ]);

  // Función para manejar la selección de horario
  const handleSelect = (selectInfo) => {
    let title = prompt('Por favor, ingresa tu nombre para la cita:');
    let calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // limpia la selección de calendario

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  };

  // Generador de IDs para eventos (puedes mejorar esto para que sea único de mejor manera)
  const createEventId = () => {
    return String(events.length + 1);
  };

  return (
    <div>
      <HeaderDashboardCl />
      <main className='flex'>
        <Aside />
        <section className='flex-1 p-8 bg-white'>
        <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView="timeGridWeek"
            locales={[esLocale]}
            allDayContent=''
            locale='es'
            slotEventOverlap={false} // Esto asegura que los eventos no se solapen
            contentHeight="auto" // Esto hace que la altura del contenido sea automática
            height="100vh" // Esto hace que la altura del calendario sea automática
            headerToolbar={{
              left: 'prev,next',
              center: 'title',
              right: 'timeGridWeek'
            }}
            customButtons={{
              myCustomButton: {
                text: 'Semana',
                click: function() {
                  alert('Clicked custom button!');
                }
              }
            }}
            headerClassNames="text-white"
            themeSystem="bootstrap" // Usa el sistema de temas de bootstrap para estilizar
            bootstrapFontAwesome={{
              prev: 'fa-chevron-left',
              next: 'fa-chevron-right',
              prevYear: 'fa-angle-double-left',
              nextYear: 'fa-angle-double-right'
            }}
            events={events}
            select={handleSelect}
            selectable={true}
            editable={true}
            businessHours={{
              daysOfWeek: [1, 2, 3, 4, 5], // Lunes a Viernes
              startTime: '14:00',
              endTime: '20:00',
            }}
            slotDuration="01:00:00" // Duración de la ranura de 1 hora
            slotMinTime="14:00:00"
            slotMaxTime="20:00:00"
            slotLabelInterval="01:00" // Etiqueta cada 1 hora
            slotLabelFormat={{
              hour: '2-digit',
              minute: '2-digit',
              hour12: false
            }}
            nowIndicator={false}
            dayHeaderContent={e => <span className="text-gray-600 font-semibold">{e.text}</span>}
            dayCellClassNames="hover:bg-gray-100"
          />
        </section>
      </main>
    </div>
  );
}

export default ClCalendar;
