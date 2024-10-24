import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../assets/logo sf.png';
import LoginIlustration from '../assets/LoginIlustrationDr.png';
import { Link } from 'react-router-dom';
import { loginUser } from '../services/loginService.jsx'; 
import { Snackbar, Alert } from "@mui/material"; 

export function LoginIn() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState(null); // Estado para manejar errores
  const [openSnackbar, setOpenSnackbar] = useState(false); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser(formData);

      // Guardar token en cookies
      document.cookie = `token=${data.token}`;
      if (data.userInfo && data.userInfo.role) {
        document.cookie = `role=${data.userInfo.role}`; 

        // Redirigir según el rol
        if (data.userInfo.role === 'MEDIC') {
          navigate('/AdminDashboard');
        } else {
          navigate('/historia');
        }
      } else {
        setError('El rol del usuario no está definido.');
        setOpenSnackbar(true); 
      }
    } catch (error) {
      setError('Error al autenticar usuario. Verifica tus credenciales.');
      setOpenSnackbar(true); 
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); // Cerrar Snackbar
  };

  return (
    <div className="flex align-stretch h-screen overflow-hidden">
      <aside className="hidden relative md:flex md:w-1/2 bg-[#262161] items-center justify-center rounded-r-[4rem] shadow-xl">
        <div className="">
          <img src={LoginIlustration} alt="Simboliza una pregunta" className="mx-auto " />
        </div>
      </aside>
      <main className="flex-1 flex items-center justify-center">
        <div className="flex flex-col items-stretch text-center max-w-xs w-full shadow-2xl rounded-2xl">
          <img src={logoImg} alt="Consult" className="self-center mb-5" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              placeholder="Usuario"
              className="mb-4 h-12 border-gray-300 border rounded-lg px-4"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              autoComplete="on"
              placeholder="Contraseña"
              className="mb-4 h-12 border-gray-300 border rounded-lg px-4"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg"
            >
              Iniciar sesión
            </button>
          </form>
          <p className="mt-4 text-sm pb-10">
            Si no tienes cuenta puedes registrarte{' '}
            <Link to="/signup" className="text-blue-500">
              aquí
            </Link>
          </p>
        </div>
      </main>

      {/* Snackbar para mostrar errores */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}
