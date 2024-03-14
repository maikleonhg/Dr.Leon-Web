import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import burgerMenuIcon from '../assets/Menu Hamburgiuesa.svg'; // Ensure correct spelling and path

export const NavBar = () => {
  // State to handle the visibility of the mobile navigation menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();


  // Function to toggle the mobile navigation menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSignIn = () => {
    navigate('/login');
  };

  return (
    <header className='relative flex justify-between items-center p-4 bg-[#F7F8F9] md:justify-end'>
      
      {/* Mobile menu open icon */}
      <button 
  className={`md:hidden ${isMenuOpen ? 'opacity-70' : ''}`} 
  onClick={toggleMenu}
>
  <img 
    className='w-10 h-12 cursor-pointer'
    src={burgerMenuIcon}
    alt="Toggle Menu"
  />
</button>

      {/* Navigation links */}
      <nav className={`${
  isMenuOpen ? 'flex' : 'hidden'
} flex-col md:flex md:flex-row md:relative md:top-auto md:w-auto top-full md:bg-[#F7F8F9]  bg-[#F7F8F9] items-center right-8 gap-4 absolute transition-all ease-linear duration-300 z-20 overflow-hidden rounded-lg shadow-xl`}>
        <ul className='flex flex-col md:flex-row text-[18px] sm:text-[16px] text-[#000147] font-bold w-full '>
        <li><Link to="/" className='block px-6 py-2 hover:bg-[#262161] hover:text-[#F7F8F9]'>Inicio</Link></li>
          <li><a href="#acerca-de" className='block px-6 py-2 hover:bg-[#262161] hover:text-[#F7F8F9]'>Acerca de</a></li>
          <li><a href="#servicios" className='block px-6 py-2 hover:bg-[#262161] hover:text-[#F7F8F9]'>Servicios</a></li>
          <li><a href="#contacto" className='block px-6 py-2 hover:bg-[#262161] hover:text-[#F7F8F9]'>Contáctanos</a></li>
        </ul>
      </nav>
      
      {/* Sign-in button for larger screens */}
      <button onClick={handleSignIn} className='hidden md:inline-block delay-150 duration-100 transform hover:scale-125 transition ease-linear bg-[#262161] px-6 py-2 text-[#F7F8F9] rounded-lg'>
        Iniciar sesión
      </button>
    </header>
  );
};
