import React from 'react';
import AsideOptionDr from './AsideOptionDr'; // Asegúrate de tener este componente definido o coméntalo si no está disponible

function AsideDr() {
  const options = ['Agenda', 'Pacientes'];
  
  return (
    <aside className="flex flex-col p-4 bg-transparent border-r border-gray-300">
      <span className="text-lg mb-2">Personal</span>
      <div className='flex flex-col space-y-2'>
        {options.map(option => 
          <AsideOptionDr 
            name={option}
            key={option}
          />
        )}
      </div>
    </aside>
  );
}

export default AsideDr;
