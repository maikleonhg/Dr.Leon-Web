import burguerMenu from '../assets/Menu Hamburgiuesa.svg'
import closeBtn from '../assets/icon-menu-close.svg'

export const NavBar = () => {
    
  return (
    <>
    <div className='sm:items-center flex justify-end place-content-between '>
        <div>
            <ul className="bg-[#F7F8F9] hidden md:flex text-[18px] sm:w-[438px] sm:place-content-around sm:text-[16px] text-[#000147] font-bold ">
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Acerca de</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Contáctanos</a></li>
            </ul>
        </div>
        <div className='justify-items-end'>
            <img className='w-10 h-12 cursor-pointer md:hidden'
            src={burguerMenu} alt="Menu"  />
            <button className='delay-150 duration-100 transform hover:scale-125 transition ease-linear bg-[#262161] px-6 py-2 m-4 text-[#F7F8F9] rounded-b-2xl hidden md:flex '>Iniciar sesión</button>
        </div>
     </div>
    </>
  )
}
