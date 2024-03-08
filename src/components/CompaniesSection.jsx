import logoUNAM from '../assets/Logos Escuelas/logo unam.png'
import logoUAEH from '../assets/Logos Escuelas/logo uaeh.png'
import logoMag from '../assets/Logos Escuelas/hospital-magdalena-de-la-salinas.png'
import logoTerInt from '../assets/Logos Escuelas/Logo esciela.png'
import { Container } from 'postcss'

export const CompaniesSection = () => {
  return (
    <section className=''>
        <div className='grid gap-y-8 grid-cols-2 justify-items-center p-12 sm:flex bg-[#F7F8F9] sm:place-content-around sm:items-center sm:p-20'>
            <div className='col-span-2 p-8'>
                <h2 className='text-2xl font-bold text-[#000147]'>Acreditado por instituciones</h2>
            </div>
            <img className='w-[120px] h-[137px]'
            src={logoUAEH} alt="Menu"  />
            <img className='w-[140px] h-[137px]'
            src={logoUNAM} alt="Menu"  />
            <img className='w-[135px] h-[137px]'
            src={logoMag} alt="Menu"  />
            <img className='w-[140px] h-[128px]'
            src={logoTerInt} alt="Menu"  />
        </div>
    </section>
  )
}
