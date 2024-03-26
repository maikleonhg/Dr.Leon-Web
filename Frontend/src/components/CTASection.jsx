

export const CTASection = () => {
  return (
    <section>
        <div className="p-14">
            <div>
                <h1 className='text-center  font-bold text-3xl text-[#01162C] pb-10'>Empiece su Camino hacia la Recuperación</h1>
                <p className='text-[#01162D]  text-center pb-3'>Su salud es la prioridad. Programe una consulta para recibir cuidados expertos personalizados a sus necesidades.</p>
                <p className='text-[#01162D]  text-center pb-3 hidden sm:flex'>
                Agende su cita con facilidad y comience el viaje hacia la recuperación y el bienestar. Nuestro proceso de programación es simple y rápido, garantizando que reciba atención médica sin demoras.
                </p>
            </div>
            <div className="grid justify-items-center">
                 <button className='delay-150 duration-100 transform hover:scale-125 transition ease-linear bg-[#262161] px-6 py-2 m-4 text-[#F7F8F9] rounded-2xl'>Agendar consulta</button>
            </div>
        </div>
    </section>
  )
}
