import burguerMenu from '../assets/Menu Hamburgiuesa.svg'

export const NavBar = () => {
  return (
    <>
    <ul className="bg-blue-400 hidden sm:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] sm:items-center">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Contactanos</a></li>
    </ul>
    <img className='w-10 h-12 cursor-pointer sm:hidden'
     src={burguerMenu} alt="Menu"  />
    </>
  )
}
