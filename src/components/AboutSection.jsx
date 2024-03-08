import fotoPerfil from '../assets/Foto Perfil 2.jpeg'

export const AboutSection = () => {
  return (
    <section className='bg-[#FFFF]'>
        <div className='grid justify-items-center md:flex flex-row-reverse pb-14'>       
            <div className='basis-2/4 p-8 grid grid-cols-1 content-evenly'>
                <div>
                    <h1 className='text-center md:text-left font-bold text-3xl text-[#01162C]'>
                    Cuidado Excepcional en los Momentos Críticos
                    </h1>
                </div>
                <div>
                    <p className=' text-[#01162D] md:text-left text-center'>
                    Con una trayectoria distinguida en medicina crítica y terapia intensiva,
                    el Dr. Julio Alejandro León Espino combina experiencia, empatía y excelencia.
                    Formado en prestigiosas universidades y con una carrera en los hospitales más avanzados, el Dr. León no solo ha demostrado ser un líder en su campo, sino también un aliado confiable para sus pacientes. Comprometido con la atención personalizada, se dedica a proporcionar cuidados que no solo tratan la enfermedad, sino que también fomentan el bienestar integral de cada individuo.
                    </p>
                </div>
            </div>
            <div className='basis-2/4 drop-shadow-[-20px_35px_15px_rgba(38,33,97,0.8)]'>
                <img src={fotoPerfil} alt='Foto perfil' className='p-8'/>
            </div>
        </div>
    </section>
  )
}