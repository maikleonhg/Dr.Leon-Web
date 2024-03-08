import imageMobile from '../assets/Foto_principal-removebg-preview.png'


export const HeroSection = () => {
  return (
    <section className='bg-[#F8F8F9] '>
        <div className='md:flex lg:flex justify-evenly grid justify-items-center'>
                <div className='grid justify-items-center sm:h+5 grid-cols-1 gap-2 content-center'> 
                    <h1 className='text-[40px] font-bold text-center sm:text-left m-4 w-80 text-[#000147]'>Dr. León Espino Julio Alejandro</h1>
                    <p className='text-center sm:text-left text-[#01162D]'>Médico especialista en terapia intensiva y crítica</p>
                    <button className='delay-150 duration-100 transform hover:scale-125 transition ease-linear bg-[#262161] px-6 py-2 m-4 text-[#F7F8F9] rounded-2xl'>Agendar cita</button>
                </div>
            <picture className=''>
                <source media="(max-width: 640px)" srcSet={imageMobile}/> 
                <source media="(min-width: 641px)" srcSet={imageMobile}/> 
                <img src={imageMobile} alt='Articulo principal' />
            </picture>
        </div>
    </section>
  )
}
