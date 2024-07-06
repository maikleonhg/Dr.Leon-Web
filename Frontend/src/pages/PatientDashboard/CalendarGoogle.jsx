import React from 'react';
import Aside from '../../components/Dashboards/Aside';
import HeaderDashboardCl from '../../components/Dashboards/HeaderDashCl';

const CalendarioGoogle = () => {
  return (
    <div>
      <HeaderDashboardCl />
      <main className="flex flex-col sm:flex-row">
        <Aside className="sm:order-1 order-2" />
        <div className="calendar-container flex-1" style={{ margin: '20px', maxWidth: '800px', overflowY: 'auto' }}>
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2CFBYX_LbDJIfPq7NhV-p4oIZ2_qy9Zky7nCAGSKLBjxAKDWNS814I-VGTIvep6iTrrYh2eaY1?gv=true"
            style={{ borderWidth: 0, width: '100%', height: '1200px' }}
            frameBorder="0"
            scrolling="no"
            className="google-calendar"
          ></iframe>
        </div>
      </main>
    </div>
  );
};

export default CalendarioGoogle;
