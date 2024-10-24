// src/pages/Signup.jsx
import { useState } from 'react';
import logoImg from '../assets/logo sf.png';
import SignupIllustration from '../assets/LoginIlustrationDr.png';
import { Link, useNavigate } from 'react-router-dom';
import { signupUser } from '../services/userService';
import { Snackbar, Alert } from "@mui/material";

export function Signup() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(null); // Estado para manejar errores
  const [openSnackbar, setOpenSnackbar] = useState(false); // Estado para abrir o cerrar el Snackbar
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userData = {
        username: formData.fullname,
        email: formData.email,
        password: formData.password,
        role: 'USER',
      };

      // Registro exitoso
      await signupUser(userData);
      setError(null);
      setOpenSnackbar(true);
      navigate('/login');
      
    } catch (error) {
      // Manejo de errores
      setError(`Error en el registro: ${error.message}`);
      setOpenSnackbar(true); 
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false); 
  };

  return (
    <div className="flex align-stretch h-screen overflow-hidden">
      <aside className="hidden relative md:flex md:w-1/2 bg-[#262161] items-center justify-center rounded-r-[4rem] shadow-xl">
        <div>
          <img src={SignupIllustration} alt="Regístrate en Medtools" className="mx-auto" />
        </div>
      </aside>
      <main className="flex-1 flex items-center justify-center bg-white">
        <div className="flex flex-col items-stretch text-center max-w-xs w-full shadow-2xl rounded-2xl p-8">
          <img src={logoImg} alt="Medtools" className="self-center mb-5" />
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullname"
              placeholder="Nombre completo"
              value={formData.fullname}
              onChange={handleChange}
              className="mb-4 h-12 border-gray-300 border rounded-lg px-4"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mb-4 h-12 border-gray-300 border rounded-lg px-4"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              value={formData.password}
              onChange={handleChange}
              className="mb-4 h-12 border-gray-300 border rounded-lg px-4"
              required
            />
            <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg">
              Registrarse
            </button>
          </form>
          <p className="mt-4 text-sm pb-10">
            Si ya tienes cuenta puedes ingresar{' '}
            <Link to="/login" className="text-blue-500">aquí</Link>
          </p>
        </div>
      </main>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={error ? "error" : "success"} sx={{ width: '100%' }}>
          {error ? error : 'Registro exitoso'}
        </Alert>
      </Snackbar>
    </div>
  );
}
