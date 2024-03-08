import pantallaVol from '../assets/Extras/pantalla-volumeview.jpg'
import ultrasonido from '../assets/Extras/ultrasonido.jpg'
import ventilacion from '../assets/Extras/ventilacion.jpg'

export const ServicesSection = () => {
  return (
    <section className='bg-[#F7F8F9] pt-10 px-8 pb-14'>
        <div className=''>
            <div className='md:flex text-center '>
                <div className='basis-1/3 grid place-content-center'>
                    <h1 className="font-bold text-2xl text-[#01162C]">Diagnóstico Preciso con Ultrasonido Cardíaco</h1>
                    <p className='text-[#01162D]'>Nuestro servicio de Ultrasonido Cardíaco proporciona imágenes claras y detalladas para un diagnóstico confiable y un seguimiento exhaustivo.</p>
                </div>
                <div className='basis-1/3 md:grid place-content-center'>
                   <img src={pantallaVol} alt='Foto perfil' className='p-8'/>
                </div>
                <div className='basis-1/3 grid place-content-center'>
                    <h1 className="font-bold text-2xl text-[#01162C]">Soporte Respiratorio Continuo para su Bienestar</h1>
                    <p className='text-[#01162D]'>Mejore su calidad de vida con nuestro tratamiento de CPAP, diseñado para mantener abiertas las vías respiratorias durante la noche</p>
                </div>
            </div>
            <div className='flex flex-col-reverse md:flex-row text-center'>
                <div className='basis-1/3'>
                    <img src={ultrasonido} alt='Foto perfil' className='p-8'/>  
                </div>
                <div className='basis-1/3 grid place-content-center'>
                    <h1 className="font-bold text-2xl text-[#01162C]">Visualización Avanzada para una Atención Crítica Óptima</h1>
                    <p className='text-[#01162D]'>A la vanguardia de la tecnología médica, nuestro Sistema Volume View ofrece una evaluación detallada y precisa del volumen intravascular</p>
                </div>
                <div className='basis-1/3'>
                    <img src={ventilacion} alt='Foto perfil' className='p-8'/>
                </div>
            </div>
        </div>
    </section>
  )
}
