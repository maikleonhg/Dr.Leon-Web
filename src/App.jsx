import { LandingPage } from './components/LandingPage';
import LayoutWithHeader from './components/LayoutWithHeader';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { ClDash } from './pages/PatientDashboard/ClDash'
//import { DrDash } from './pages/DoctorDashboard/DrDash'
import {LoginIn} from './pages/LoginIn'
import { Signup } from './pages/Signup';
import AdminDashboard from './pages/AdminDashboard';
import MainData from './pages/PatientDashboard/MainData';
import Profile from './pages/PatientDashboard/Profile';

function App() {
  return (
    <main className='px-4 pt-0 md:px-0'>

      <Routes>
      <Route path="/" element={<LayoutWithHeader><LandingPage /></LayoutWithHeader>} />
          <Route path="/login" element={<LayoutWithHeader><LoginIn /></LayoutWithHeader>} />
          <Route path="/signup" element={<LayoutWithHeader><Signup /></LayoutWithHeader>} />
          <Route path="/dashboard" element={<AdminDashboard />} />
          <Route path="/historia" element={<MainData />} />
          <Route path="/profile" element={<Profile />} />
        {/* Define otras rutas según sea necesario */}
      </Routes>

    </main>
  );
}

export default App;
