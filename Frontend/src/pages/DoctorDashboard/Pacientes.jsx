import React from 'react';
import HeaderDashboardDr from '../../components/Dashboards/HeaderDashDr';
import AsideDr from '../../components/Dashboards/AsideDr';

export const Pacientes = () => {
  // Ejemplo de datos de pacientes
  const pacientes = [
    { nombre: "Juan Pérez", edad: 34, fechaConsulta: "2023-03-15" },
    { nombre: "Ana Gómez", edad: 28, fechaConsulta: "2023-03-18" },
    { nombre: "Mayra Lev", edad: 24, fechaConsulta: "2023-03-17" },
    { nombre: "Maik Leon", edad: 25, fechaConsulta: "2023-03-18" },
    // Agrega más pacientes aquí
  ];

 return (
    <div>
      <HeaderDashboardDr />
      <main className='flex'>
        <AsideDr />
        <div className='flex-1 p-10'>
          <h2 className='text-2xl font-bold mb-5'>Pacientes</h2>
          <table className='w-full'>
            <thead>
              <tr className='bg-gray-200 text-left'>
                <th className='p-2'>Nombre</th>
                <th className='p-2'>Edad</th>
                <th className='p-2'>Consulta</th>
              </tr>
            </thead>
            <tbody>
              {pacientes.map((paciente, index) => (
                <tr key={index} className='border-b text-left'>
                  <td className='p-2'>{paciente.nombre}</td>
                  <td className='p-2'>{paciente.edad}</td>
                  <td className='p-2'>{paciente.fechaConsulta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};/*
return (
    <div>
      <HeaderDashboardDr />
      <main className='flex'>
        <AsideDr />
        <div className='flex-1 p-10'>
          <h2 className='text-2xl font-bold mb-5'>Pacientes</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
            {pacientes.map((paciente, index) => (
              <div key={index} className='bg-white shadow-md rounded-lg p-4'>
                <h3 className='text-xl font-semibold'>{paciente.nombre}</h3>
                <p>Edad: {paciente.edad} años</p>
                <p>Consulta: {paciente.fechaConsulta}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};*/