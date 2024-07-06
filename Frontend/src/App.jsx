import { LandingPage } from './components/LandingPage';
import LayoutWithHeader from './components/LayoutWithHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
//import { ClDash } from './pages/PatientDashboard/ClDash'
//import { DrDash } from './pages/DoctorDashboard/DrDash'
import {LoginIn} from './pages/LoginIn'
import { Signup } from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import AdminDashboardDr from './pages/DoctorDashboard/AdminDashboardDr'
import MainData from './pages/PatientDashboard/MainData';
import Profile from './pages/PatientDashboard/Profile';
import { Agenda } from './pages/DoctorDashboard/Agenda';
import { Pacientes } from './pages/DoctorDashboard/Pacientes';
import ClCalendar from './pages/PatientDashboard/ClCalendar';
import { CalendarioCl } from './pages/PatientDashboard/CalendarioCl';
import CalendarGoogle from './pages/PatientDashboard/CalendarGoogle';

function App() {
  return (
    <main className='px-4 pt-0 md:px-0'>

      <Routes>
      <Route path="/" element={<LayoutWithHeader><LandingPage /></LayoutWithHeader>} />
          <Route path="/login" element={<LayoutWithHeader><LoginIn /></LayoutWithHeader>} />
          <Route path="/signup" element={<LayoutWithHeader><Signup /></LayoutWithHeader>} />
          <Route path="/dashboard" element={<ProtectedRoute requiredRole="USER"><AdminDashboard /></ProtectedRoute>} />  
          <Route path="/AdminDashboard" element={<ProtectedRoute requiredRole="MEDIC"><AdminDashboardDr /></ProtectedRoute>} /> 
          <Route path='/agenda' element={<ProtectedRoute requiredRole="MEDIC"><Agenda /></ProtectedRoute>} /> 
          <Route path='/pacientes' element={<ProtectedRoute requiredRole="MEDIC"><Pacientes /></ProtectedRoute>} /> 
          <Route path="/historia" element={<ProtectedRoute requiredRole="USER"><MainData /></ProtectedRoute>} /> 
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} /> 
          <Route path="/CalendarUser" element={<ProtectedRoute requiredRole="USER"><CalendarGoogle /></ProtectedRoute>} /> 
        {/* Define otras rutas según sea necesario */}
      </Routes>

    </main>
  );
}

export default App;
