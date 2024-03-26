import React from 'react';
import logoImg from '../assets/logo sf.png';
import SignupIllustration from '../assets/LoginIlustrationDr.png';
import { Link } from 'react-router-dom';

export function Signup() {
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
          <form>
            <input
              type="text"
              name="fullname"
              placeholder="Nombre completo"
              className="mb-4 h-12 border-gray-300 border rounded-lg px-4"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="mb-4 h-12 border-gray-300 border rounded-lg px-4"
            />
            <input
              type="password"
              name="password"
              placeholder="Contraseña"
              className="mb-4 h-12 border-gray-300 border rounded-lg px-4"
            />
            <button
              type="submit"
              className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-lg"
            >
              Registrarse
            </button>
          </form>
          <p className="mt-4 text-sm pb-10">
            Si ya tienes cuenta puedes ingresar{' '}
            <Link to="/login" className="text-blue-500">
              aquí
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}
