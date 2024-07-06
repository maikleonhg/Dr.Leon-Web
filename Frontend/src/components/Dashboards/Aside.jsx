import React from 'react';
import AsideOption from './AsideOption'; // Asegúrate de tener este componente definido o coméntalo si no está disponible

function Aside() {
  const options = ['Perfil', 'Historia', 'Consulta'];
  
  return (
    <aside className="flex flex-col p-4 bg-transparent sm:border-r border-gray-300">
      <span className="hidden sm:block text-lg mb-2">Personal</span>
      <div className='flex flex-row justify-around  sm:flex-col sm:space-y-2'>
        {options.map(option => 
          <AsideOption 
            name={option}
            key={option}
          />
        )}
      </div>
    </aside>
  );
}

export default Aside;
