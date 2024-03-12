import { Header } from './components/Header'
import { LandingPage } from './components/LandingPage';
import { Footer } from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ClDash } from './pages/PatientDashboard/ClDash'
import { DrDash } from './pages/DoctorDashboard/DrDash'

function App() {
  return (
    <main className='px-4 pt-0 md:px-0'>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/client-dashboard" element={<ClDash />} />
        <Route path="/doctor-dashboard" element={<DrDash />} />
        {/* Define otras rutas según sea necesario */}
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
