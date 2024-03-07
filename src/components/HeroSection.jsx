import imageMobile from '../assets/Foto_principal-removebg-preview.png'


export const HeroSection = () => {
  return (
    <section>
        <div className='sm:flex items-center '>
                <div className=''> 
                <h1 className='text-[40px] font-bold text-center m-2 w-80'>Dr. Leon Espino Julio Alejandro</h1>
                <p className='text-center m-2 w-64'>Medico especialista en terapia intensica y critica</p>
                <button className='delay-150 duration-100 transform hover:scale-125 transition ease-linear bg-teal-400 px-6 py-2 m-4 inline'>Agendar cita</button>
                </div>
            <picture className=''>
                <source media="(max-width: 640px)" srcSet={imageMobile}/> 
                <source media="(min-width: 641px)" srcSet={imageMobile}/> 
                <img src={imageMobile} alt='Articulo principal' />
            </picture>
            <h2></h2>
            <p></p>
        </div>
    </section>
  )
}
